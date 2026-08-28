import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 12000 },
  { month: 'Feb', revenue: 18000 },
  { month: 'Mar', revenue: 15000 },
  { month: 'Apr', revenue: 22000 },
  { month: 'May', revenue: 28000 },
  { month: 'Jun', revenue: 25000 },
];

function RevenueChart() {
  return (
    <div className="chart-card">
      <div className="card-header">
        <h3>Revenue Overview</h3>
        <span>2026</span>
      </div>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="revenue" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default RevenueChart;