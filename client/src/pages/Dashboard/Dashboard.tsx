import MainLayout from "../../components/layout/MainLayout";

import WelcomeBanner from "../../components/dashboard/WelcomeBanner";
import StatisticsCard from "../../components/dashboard/StatisticsCard";
import RecentActivity from "../../components/dashboard/RecentActivity";
import TeamMembers from "../../components/dashboard/TeamMembers";

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="dashboard-page">
        <WelcomeBanner />
        <StatisticsCard />
        <RecentActivity />
        <TeamMembers />
      </div>
    </MainLayout>
  );
};

export default Dashboard;