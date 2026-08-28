import { BarChart2, PieChart } from 'lucide-react';

export default function AnalysisPage() {
  return (
    <div>
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', color: '#111827' }}>Phân tích Dữ liệu Chuyên sâu</h1>
        <p style={{ color: '#6b7280', fontSize: '14px', marginTop: '4px' }}>
          Tạo biểu đồ và trực quan hóa xu hướng từ bộ dữ liệu của bạn
        </p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '24px'
      }}>
        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Doanh thu theo tháng</h3>
            <BarChart2 size={20} color="#2563eb" />
          </div>
          <div style={{
            height: '200px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px dashed #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            [Biểu đồ doanh thu]
          </div>
        </div>

        <div style={{
          backgroundColor: '#fff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #e5e7eb'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600 }}>Tỷ lệ nhóm khách hàng</h3>
            <PieChart size={20} color="#10b981" />
          </div>
          <div style={{
            height: '200px',
            backgroundColor: '#f9fafb',
            borderRadius: '8px',
            border: '1px dashed #d1d5db',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#9ca3af',
            fontSize: '14px'
          }}>
            [Biểu đồ phân bố]
          </div>
        </div>
      </div>
    </div>
  );
}
