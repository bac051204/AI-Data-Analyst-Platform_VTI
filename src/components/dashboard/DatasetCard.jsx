import { FileSpreadsheet, Eye, BarChart3 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function DatasetCard({ dataset }) {
  const navigate = useNavigate();

  return (
    <div className="dataset-card">
      <div className="dataset-icon">
        <FileSpreadsheet size={24} />
      </div>

      <div className="dataset-info">
        <h3>{dataset.name}</h3>

        <p>
          {dataset.type} • {dataset.rows} rows • {dataset.columns} columns
        </p>
      </div>

      <div className="dataset-actions">
        <button
          className="secondary-button"
          onClick={() => navigate(`/datasets/${dataset.name}`)}
        >
          <Eye size={16} />
          View
        </button>

        <button className="primary-button">
          <BarChart3 size={16} />
          Analyze
        </button>
      </div>
    </div>
  );
}

export default DatasetCard;