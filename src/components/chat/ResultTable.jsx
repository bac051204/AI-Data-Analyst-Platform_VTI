function ResultTable({ data }) {
  if (!data || data.length === 0) {
    return null;
  }

  const columns = Object.keys(data[0]);

  return (
    <div className="result-table-wrapper">
      <table className="result-table">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>{column}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column) => (
                <td key={column}>
                  {typeof row[column] === 'number'
                    ? row[column].toLocaleString('vi-VN')
                    : row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultTable;