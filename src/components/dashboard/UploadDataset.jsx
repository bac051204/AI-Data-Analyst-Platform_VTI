import { useRef } from 'react';
import { Upload } from 'lucide-react';

function UploadDataset() {
  const fileInputRef = useRef(null);

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      return;
    }

    console.log('Selected file:', file.name);
  };

  return (
    <div className="upload-section">
      <input
        ref={fileInputRef}
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileChange}
        hidden
      />

      <button
        className="upload-button"
        onClick={handleUploadClick}
      >
        <Upload size={18} />
        Upload Dataset
      </button>
    </div>
  );
}

export default UploadDataset;