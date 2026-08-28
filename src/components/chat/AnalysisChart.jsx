import {
  ResponsiveContainer,
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

function AnalysisChart({ data, type = 'bar' }) {
  if (!data || data.length === 0) {
    return null;
  }

  const keys = Object.keys(data[0]);

  const labelKey = keys[0];

  const numericKey = keys.find(
    (key) => typeof data[0][key] === 'number'
  );

  if (!numericKey) {
    return null;
  }

  if (type === 'pie') {
    return (
      <div className="analysis-chart">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey={numericKey}
              nameKey={labelKey}
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} />
              ))}
            </Pie>

            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    );
  }

  if (type === 'line') {
    return (
      <div className="analysis-chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey={labelKey} />

            <YAxis />

            <Tooltip />

            <Legend />

            <Line
              type="monotone"
              dataKey={numericKey}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }

  return (
    <div className="analysis-chart">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey={labelKey} />

          <YAxis />

          <Tooltip />

          <Legend />

          <Bar dataKey={numericKey} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalysisChart;