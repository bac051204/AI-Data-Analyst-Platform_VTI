import api from './api';

export const datasourceService = {
  // Lấy danh sách DataSource: GET /api/datasources
  getDataSources: async () => {
    const response = await api.get('/api/datasources');
    return response.data;
  },

  // Tạo DataSource mới: POST /api/datasources
  // Request: { name, type: "MYSQL", host, port, databaseName, username, password }
  createDataSource: async (dataSourceData) => {
    const response = await api.post('/api/datasources', dataSourceData);
    return response.data;
  },

  // Test kết nối DataSource: POST /api/datasources/test-connection
  testConnection: async (connectionData) => {
    const response = await api.post('/api/datasources/test-connection', connectionData);
    return response.data;
  },

  // Lấy chi tiết DataSource: GET /api/datasources/{datasourceId}
  getDataSourceById: async (datasourceId) => {
    const response = await api.get(`/api/datasources/${datasourceId}`);
    return response.data;
  },

  // Cập nhật DataSource: PUT /api/datasources/{datasourceId}
  updateDataSource: async (datasourceId, updateData) => {
    const response = await api.put(`/api/datasources/${datasourceId}`, updateData);
    return response.data;
  },

  // Xóa DataSource: DELETE /api/datasources/{datasourceId}
  deleteDataSource: async (datasourceId) => {
    const response = await api.delete(`/api/datasources/${datasourceId}`);
    return response.data;
  },

  // Lấy Schema Metadata (bảng, cột, khóa ngoại): GET /api/datasources/{datasourceId}/schema
  getSchemaMetadata: async (datasourceId) => {
    const response = await api.get(`/api/datasources/${datasourceId}/schema`);
    return response.data;
  },
};

export default datasourceService;

