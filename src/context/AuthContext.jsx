import { useState, useEffect, useCallback } from 'react';
import authService from '../services/authService';
import { AuthContext } from './authContextInstance';

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [token, setToken] = useState(() => localStorage.getItem('accessToken'));
  const [isLoading, setIsLoading] = useState(() => Boolean(localStorage.getItem('accessToken')));

  const fetchCurrentUser = useCallback(async () => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      setIsLoading(false);
      return;
    }

    try {
      const data = await authService.getCurrentUser();
      if (data?.result) {
        setUser(data.result);
        localStorage.setItem('user', JSON.stringify(data.result));
      }
    } catch (error) {
      console.error('Không thể lấy thông tin người dùng:', error);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let isMounted = true;
    if (token) {
      authService.getCurrentUser()
        .then((data) => {
          if (isMounted && data?.result) {
            setUser(data.result);
            localStorage.setItem('user', JSON.stringify(data.result));
          }
        })
        .catch((error) => {
          if (isMounted) {
            console.error('Không thể lấy thông tin người dùng:', error);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            localStorage.removeItem('user');
            setUser(null);
            setToken(null);
          }
        })
        .finally(() => {
          if (isMounted) {
            setIsLoading(false);
          }
        });
    }
    return () => {
      isMounted = false;
    };
  }, [token]);

  // Đăng nhập
  const login = async (email, password) => {
    const res = await authService.login({ email, password });
    if (res?.result) {
      const { accessToken, refreshToken, user: userData } = res.result;
      localStorage.setItem('accessToken', accessToken);
      if (refreshToken) {
        localStorage.setItem('refreshToken', refreshToken);
      }
      if (userData) {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
      }
      setToken(accessToken);
      return res.result;
    }
    return null;
  };

  // Đăng ký
  const register = async (email, password, fullName) => {
    const res = await authService.register({ email, password, fullName });
    return res?.result;
  };

  // Đăng xuất
  const logout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      if (refreshToken) {
        await authService.logout(refreshToken);
      }
    } catch (error) {
      console.error('Lỗi khi logout:', error);
    } finally {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
      setUser(null);
      setToken(null);
    }
  };

  const value = {
    user,
    token,
    isAuthenticated: Boolean(token),
    isLoading,
    login,
    register,
    logout,
    refetchUser: fetchCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;

