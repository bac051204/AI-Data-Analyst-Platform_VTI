import StatCard from '../components/dashboard/StatCard';
import RecentQueries from '../components/dashboard/RecentQueries';
import RecentDatasets from '../components/dashboard/RecentDatasets';
import RevenueChart from '../components/chart/RevenueChart';

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="page-heading">
        <div>
          <h2>Dashboard</h2>
          <p>Welcome back! Here's an overview of your data.</p>
        </div>
      </div>

      <div className="stats-grid">
        <StatCard
          title="Total Datasets"
          value="12"
          description="Datasets uploaded"
        />

        <StatCard
          title="Total Queries"
          value="48"
          description="AI questions asked"
        />

        <StatCard
          title="Total Analyses"
          value="35"
          description="Completed analyses"
        />

        <StatCard
          title="Data Rows"
          value="18.2K"
          description="Rows analyzed"
        />
      </div>

      <div className="dashboard-grid">
        <RevenueChart />

        <RecentQueries />
      </div>

      <RecentDatasets />
    </div>
  );
}

export default DashboardPage;