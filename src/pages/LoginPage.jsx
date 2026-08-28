import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogIn, Lock, Mail, AlertCircle, Loader2 } from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      console.error('Login error:', err);
      setError(
        err.response?.data?.message ||
        'Đăng nhập thất bại. Vui lòng kiểm tra lại email hoặc mật khẩu.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
      maxWidth: '400px',
      margin: '60px auto',
      backgroundColor: '#ffffff',
      padding: '32px',
      borderRadius: '16px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    }}>
      <div style={{ textAlign: 'center', marginBottom: '24px' }}>
        <div style={{
          display: 'inline-flex',
          padding: '12px',
          borderRadius: '50%',
          backgroundColor: '#eff6ff',
          color: '#2563eb',
          marginBottom: '12px'
        }}>
          <LogIn size={28} />
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827' }}>Đăng nhập tài khoản</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>
          Đăng nhập để bắt đầu phân tích dữ liệu của bạn
        </p>
      </div>

      {error && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 14px',
          backgroundColor: '#fef2f2',
          color: '#ef4444',
          borderRadius: '8px',
          fontSize: '13px',
          marginBottom: '16px',
          border: '1px solid #fee2e2'
        }}>
          <AlertCircle size={18} style={{ flexShrink: 0 }} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
            Email
          </label>
          <div style={{ position: 'relative' }}>
            <Mail size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@company.com"
              style={{
                width: '100%',
                padding: '10px 12px 10px 38px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
            Mật khẩu
          </label>
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              style={{
                width: '100%',
                padding: '10px 12px 10px 38px',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                fontSize: '14px',
                outline: 'none'
              }}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          style={{
            marginTop: '8px',
            padding: '12px',
            backgroundColor: isLoading ? '#93c5fd' : '#2563eb',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: isLoading ? 'not-allowed' : 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}
        >
          {isLoading ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              <span>Đang đăng nhập...</span>
            </>
          ) : (
            'Đăng nhập'
          )}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
        Chưa có tài khoản?{' '}
        <Link to="/register" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
          Đăng ký ngay
        </Link>
      </div>
    </div>
  );
}
