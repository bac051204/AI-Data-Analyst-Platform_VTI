import { Search } from 'lucide-react';

import DatasetCard from '../components/dashboard/DatasetCard';
import UploadDataset from '../components/dashboard/UploadDataset';

function DatasetPage() {
  const datasets = [
    {
      name: 'sales_2026.csv',
      type: 'CSV',
      rows: '10,000',
      columns: 12,
    },
    {
      name: 'customers.xlsx',
      type: 'Excel',
      rows: '5,240',
      columns: 8,
    },
    {
      name: 'products.csv',
      type: 'CSV',
      rows: '2,850',
      columns: 10,
    },
  ];

  return (
    <div className="dataset-page">
      <div className="page-heading dataset-heading">
        <div>
          <h2>Datasets</h2>
          <p>Manage and analyze your datasets.</p>
        </div>

        <UploadDataset />
      </div>

      <div className="dataset-toolbar">
        <div className="search-box">
          <Search size={18} />

          <input
            type="text"
            placeholder="Search datasets..."
          />
        </div>
      </div>

      <div className="dataset-list-page">
        {datasets.map((dataset) => (
          <DatasetCard
            key={dataset.name}
            dataset={dataset}
          />
        ))}
      </div>
    </div>
  );
}

export default DatasetPage;
