import api from './api';

export const authService = {
  // Đăng ký tài khoản mới: POST /api/auth/register
  register: async ({ email, password, fullName }) => {
    const response = await api.post('/api/auth/register', { email, password, fullName });
    return response.data;
  },

  // Đăng nhập: POST /api/auth/login
  login: async ({ email, password }) => {
    const response = await api.post('/api/auth/login', { email, password });
    return response.data;
  },

  // Refresh Token: POST /api/auth/refresh
  refreshToken: async (refreshToken) => {
    const response = await api.post('/api/auth/refresh', { refreshToken });
    return response.data;
  },

  // Đăng xuất: POST /api/auth/logout
  logout: async (refreshToken) => {
    const response = await api.post('/api/auth/logout', { refreshToken });
    return response.data;
  },

  // Lấy thông tin người dùng hiện tại: GET /api/users/me
  getCurrentUser: async () => {
    const response = await api.get('/api/users/me');
    return response.data;
  },
};

export default authService;