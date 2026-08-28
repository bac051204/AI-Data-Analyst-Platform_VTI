import { useMemo, useState } from 'react';
import { ArrowLeft, Search, Download } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

const mockData = [
  {
    id: 1,
    customer: 'Nguyen Van An',
    product: 'Laptop',
    category: 'Electronics',
    quantity: 2,
    revenue: 24000000,
    date: '2026-08-01',
  },
  {
    id: 2,
    customer: 'Tran Thi Binh',
    product: 'Phone',
    category: 'Electronics',
    quantity: 1,
    revenue: 15000000,
    date: '2026-08-02',
  },
  {
    id: 3,
    customer: 'Le Van Cuong',
    product: 'Keyboard',
    category: 'Accessories',
    quantity: 3,
    revenue: 4500000,
    date: '2026-08-03',
  },
  {
    id: 4,
    customer: 'Pham Thi Dung',
    product: 'Monitor',
    category: 'Electronics',
    quantity: 2,
    revenue: 12000000,
    date: '2026-08-04',
  },
  {
    id: 5,
    customer: 'Hoang Van Em',
    product: 'Mouse',
    category: 'Accessories',
    quantity: 5,
    revenue: 2500000,
    date: '2026-08-05',
  },
  {
    id: 6,
    customer: 'Doan Thi Hoa',
    product: 'Laptop',
    category: 'Electronics',
    quantity: 1,
    revenue: 12000000,
    date: '2026-08-06',
  },
  {
    id: 7,
    customer: 'Nguyen Van Kien',
    product: 'Headphone',
    category: 'Accessories',
    quantity: 2,
    revenue: 3000000,
    date: '2026-08-07',
  },
  {
    id: 8,
    customer: 'Tran Van Long',
    product: 'Phone',
    category: 'Electronics',
    quantity: 2,
    revenue: 30000000,
    date: '2026-08-08',
  },
];

function DatasetDetailPage() {
  const navigate = useNavigate();
  const { datasetId } = useParams();

  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const rowsPerPage = 5;

  const filteredData = useMemo(() => {
    return mockData.filter((row) => {
      const keyword = search.toLowerCase();

      return (
        row.customer.toLowerCase().includes(keyword) ||
        row.product.toLowerCase().includes(keyword) ||
        row.category.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  const currentData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handleSearch = (event) => {
    setSearch(event.target.value);
    setCurrentPage(1);
  };

  return (
    <div className="dataset-detail-page">
      {/* Header */}
      <div className="detail-header">
        <button
          className="back-button"
          onClick={() => navigate('/datasets')}
        >
          <ArrowLeft size={18} />
          Back to Datasets
        </button>

        <button className="secondary-button">
          <Download size={16} />
          Export
        </button>
      </div>

      {/* Dataset information */}
      <div className="dataset-overview">
        <div>
          <h2>{datasetId || 'sales_2026.csv'}</h2>
          <p>Dataset Preview</p>
        </div>

        <div className="dataset-stats">
          <div>
            <strong>8</strong>
            <span>Rows</span>
          </div>

          <div>
            <strong>7</strong>
            <span>Columns</span>
          </div>

          <div>
            <strong>CSV</strong>
            <span>Format</span>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="table-toolbar">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search data..."
            value={search}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* Table */}
      <div className="data-table-card">
        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Category</th>
                <th>Quantity</th>
                <th>Revenue</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {currentData.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.customer}</td>
                  <td>{row.product}</td>
                  <td>{row.category}</td>
                  <td>{row.quantity}</td>
                  <td>
                    {row.revenue.toLocaleString('vi-VN')} ₫
                  </td>
                  <td>{row.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {currentData.length === 0 && (
          <div className="empty-table">
            No data found.
          </div>
        )}

        {/* Pagination */}
        <div className="pagination">
          <span>
            Showing {currentData.length} of {filteredData.length} rows
          </span>

          <div className="pagination-buttons">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((page) => page - 1)}
            >
              Previous
            </button>

            <span>
              Page {currentPage} / {totalPages || 1}
            </span>

            <button
              disabled={currentPage >= totalPages}
              onClick={() => setCurrentPage((page) => page + 1)}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DatasetDetailPage;