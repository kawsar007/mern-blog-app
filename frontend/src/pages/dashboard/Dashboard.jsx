import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardComp from "../../components/DashboardComp";
import DashboardComments from "./Comments";
import Favourits from "./Favourits";
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
      {/* Favourits */}
      {tab === "favourits" && <Favourits />}
      {/* Users */}
      {tab === "users" && <Users />}
      {/* comments */}
      {tab === "comments" && <DashboardComments />}
      {/* dashboard component */}
      {tab === "dashboard" && <DashboardComp />}
    </div>
  );
};

export default Dashboard;
