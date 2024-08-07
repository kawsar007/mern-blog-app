import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Posts from "./Posts";
import Profile from "./Profile";
import DashboardSidebar from "./Sidebar";
import Users from "./Users";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        <DashboardSidebar />
      </div>
      {tab === "profile" && <Profile />}
      {/* Posts */}
      {tab === "posts" && <Posts />}
      {/* Users */}
      {tab === "users" && <Users />}
    </div>
  );
};

export default Dashboard;
