function RecentQueries() {
  const queries = [
    'Doanh thu tháng nào cao nhất?',
    'Sản phẩm nào bán chạy nhất?',
    'Tổng doanh thu năm 2026?',
    'Khu vực nào có doanh thu cao nhất?',
  ];

  return (
    <div className="recent-card">
      <div className="card-header">
        <h3>Recent Questions</h3>
      </div>

      <div className="query-list">
        {queries.map((query, index) => (
          <div className="query-item" key={index}>
            <span className="query-number">{index + 1}</span>
            <span>{query}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentQueries;