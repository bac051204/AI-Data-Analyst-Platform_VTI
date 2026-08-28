function RecentDatasets() {
  const datasets = [
    {
      name: 'sales_2026.csv',
      rows: '10,000 rows',
    },
    {
      name: 'customers.xlsx',
      rows: '5,240 rows',
    },
    {
      name: 'products.csv',
      rows: '2,850 rows',
    },
  ];

  return (
    <div className="recent-card">
      <div className="card-header">
        <h3>Recent Datasets</h3>
      </div>

      <div className="dataset-list">
        {datasets.map((dataset) => (
          <div className="dataset-item" key={dataset.name}>
            <div>
              <strong>{dataset.name}</strong>
              <span>{dataset.rows}</span>
            </div>

            <button>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentDatasets;