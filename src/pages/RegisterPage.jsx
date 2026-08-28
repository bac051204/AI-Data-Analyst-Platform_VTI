import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserPlus, Lock, Mail, User, AlertCircle, Loader2 } from 'lucide-react';
import useAuth from '../hooks/useAuth';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      await register(email, password, fullName);
      navigate('/login');
    } catch (err) {
      console.error('Register error:', err);
      if (!err.response) {
        setError('Không thể kết nối đến máy chủ Backend (http://localhost:8080). Vui lòng kiểm tra xem Backend Spring Boot đã được khởi chạy chưa!');
      } else {
        setError(
          err.response?.data?.message ||
          err.response?.data?.error ||
          'Đăng ký thất bại. Vui lòng kiểm tra lại thông tin.'
        );
      }
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
          <UserPlus size={28} />
        </div>
        <h2 style={{ fontSize: '22px', fontWeight: 'bold', color: '#111827' }}>Tạo tài khoản mới</h2>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>
          Đăng ký để bắt đầu phân tích dữ liệu cùng AI
        </p>
      </div>

      {error && (
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '8px',
          padding: '10px 14px',
          backgroundColor: '#fef2f2',
          color: '#ef4444',
          borderRadius: '8px',
          fontSize: '13px',
          lineHeight: '1.4',
          marginBottom: '16px',
          border: '1px solid #fee2e2'
        }}>
          <AlertCircle size={18} style={{ flexShrink: 0, marginTop: '2px' }} />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div>
          <label style={{ display: 'block', fontSize: '13px', fontWeight: 500, color: '#374151', marginBottom: '6px' }}>
            Họ và tên
          </label>
          <div style={{ position: 'relative' }}>
            <User size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Nguyễn Văn A"
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
            Mật khẩu (tối thiểu 8 ký tự)
          </label>
          <div style={{ position: 'relative' }}>
            <Lock size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
            <input
              type="password"
              required
              minLength={8}
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
              <span>Đang tạo tài khoản...</span>
            </>
          ) : (
            'Đăng ký'
          )}
        </button>
      </form>

      <div style={{ textAlign: 'center', marginTop: '20px', fontSize: '14px', color: '#6b7280' }}>
        Đã có tài khoản?{' '}
        <Link to="/login" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 600 }}>
          Đăng nhập ngay
        </Link>
      </div>
    </div>
  );
}
