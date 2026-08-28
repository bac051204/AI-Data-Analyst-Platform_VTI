import { NavLink, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Database, BarChart2, MessageSquare, LogIn, UserPlus, BrainCircuit, LogOut, User } from 'lucide-react';
import useAuth from '../../hooks/useAuth';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navStyle = ({ isActive }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '8px 16px',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '14px',
    color: isActive ? '#2563eb' : '#4b5563',
    backgroundColor: isActive ? '#eff6ff' : 'transparent',
    transition: 'all 0.2s ease',
  });

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '12px 24px',
      backgroundColor: '#ffffff',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      <Link to="/dashboard" style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
        color: '#1e40af',
        fontWeight: 'bold',
        fontSize: '18px'
      }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          backgroundColor: '#2563eb',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <BrainCircuit size={22} />
        </div>
        <span>AI Data Analyst</span>
      </Link>

      <nav style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <NavLink to="/dashboard" style={navStyle}>
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="/datasets" style={navStyle}>
          <Database size={18} />
          <span>Datasets</span>
        </NavLink>
        <NavLink to="/analysis" style={navStyle}>
          <BarChart2 size={18} />
          <span>Analysis</span>
        </NavLink>
        <NavLink to="/chat" style={navStyle}>
          <MessageSquare size={18} />
          <span>AI Chat</span>
        </NavLink>
      </nav>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        {isAuthenticated ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 12px',
              backgroundColor: '#f3f4f6',
              borderRadius: '8px',
              fontSize: '14px',
              color: '#374151'
            }}>
              <User size={16} color="#2563eb" />
              <span style={{ fontWeight: 500 }}>{user?.fullName || user?.email || 'Tài khoản'}</span>
            </div>
            <button
              onClick={handleLogout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 14px',
                backgroundColor: '#fee2e2',
                color: '#dc2626',
                border: 'none',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              <LogOut size={16} />
              <span>Đăng xuất</span>
            </button>
          </div>
        ) : (
          <>
            <NavLink to="/login" style={navStyle}>
              <LogIn size={18} />
              <span>Đăng nhập</span>
            </NavLink>
            <NavLink to="/register" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 16px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '14px',
              color: '#ffffff',
              backgroundColor: '#2563eb',
            }}>
              <UserPlus size={18} />
              <span>Đăng ký</span>
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
}
