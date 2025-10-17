// src/Pages/Profile.jsx
import { NavLink } from "react-router-dom"; 
import "../Styles/Profile.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// --- Chart Data ---
const chartData = [
  { month: 'Jan', health: 65 },
  { month: 'Feb', health: 72 },
  { month: 'Mar', health: 78 },
  { month: 'Apr', health: 85 },
  { month: 'May', health: 92 },
];

const ProfilePage = () => {
  return (
    <div>
      {/* --- Navbar --- */}
      <nav className="navbar-home">
        <div className="navbar-left">
          <img src="/Main.png" alt="PlantPal Logo" className="logo" />
        </div>
        <ul className="nav-links-home">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/plantlib">Plant Library</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li><NavLink to="/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/urbangrow">UrbanGrow</NavLink></li>
        </ul>
      </nav>

      <div className="profile-page-wrapper">
        <div className="profile-container">
          {/* PROFILE HEADER */}
          <header className="profile-header">
            <div className="profile-header-main">
              <div className="profile-pic-container">
                {/* Add profile image here if needed */}
              </div>
              <div className="profile-info">
                <h1>Elara Vance</h1>
                <p>Passionate urban gardener and plant enthusiast. Dedicated to nurturing a vibrant indoor oasis and sharing the joy of plant care with the community. Always learning and growing!</p>
              </div>
              <div className="profile-actions">
              <button className="btn btn-secondary">Edit Profile</button>
              <NavLink to="/dashboard" className="btn btn-secondary-outline">
                View My Garden
              </NavLink>
            </div>

            </div>

            <div className="profile-header-stats">
              <div className="stat-item">
                <span className="stat-value">7</span>
                <span className="stat-label">Total Plants</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">88%</span>
                <span className="stat-label">Garden Health</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">2 days ago</span>
                <span className="stat-label">Last Watered</span>
              </div>
            </div>
          </header>

          {/* MAIN GRID */}
          <main className="profile-content">
            {/* LEFT COLUMN */}
            <section className="account-settings-card">
              <h2>Account Settings</h2>
              <p className="card-subtitle">Manage your personal details, password, and notification preferences.</p>
              <form>
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" defaultValue="Elara Vance" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" defaultValue="elara.vance@example.com" />
                </div>
                <div className="form-group">
                  <label htmlFor="currentPassword">Current Password</label>
                  <input type="password" id="currentPassword" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label htmlFor="newPassword">New Password</label>
                  <input type="password" id="newPassword" placeholder="Enter new password" />
                </div>

                <h3>Notification Preferences</h3>
                <div className="checkbox-group">
                  <input type="checkbox" id="generalNotifications" />
                  <label htmlFor="generalNotifications">Receive general notifications</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="emailUpdates" defaultChecked />
                  <label htmlFor="emailUpdates">Email updates about plant health</label>
                </div>
                <div className="checkbox-group">
                  <input type="checkbox" id="smsAlerts" />
                  <label htmlFor="smsAlerts">SMS alerts for urgent care</label>
                </div>

                <button type="submit" className="btn btn-primary btn-full-width">Save Changes</button>
              </form>
            </section>

            {/* RIGHT COLUMN */}
            <aside className="sidebar">
              <div className="widget-card">
                <h2>Garden Statistics</h2>
                <p className="card-subtitle">Overview of your plant collection and health trends.</p>
                <div className="overall-health">
                  <p>Overall Garden Health Score</p>
                  <span>88%</span>
                </div>
                <div className="garden-summary-stats">
                  <div className="summary-stat-item">
                    <span className="summary-stat-value">7</span>
                    <span className="summary-stat-label">Total Plants</span>
                  </div>
                  <div className="summary-stat-item">
                    <span className="summary-stat-value">5</span>
                    <span className="summary-stat-label">Cared For</span>
                  </div>
                </div>
                <h3>Health Trend</h3>
                <div className="chart-container" style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis domain={[60, 100]} ticks={[60,70,80,90,100]} />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Line type="monotone" dataKey="health" stroke="#7D9A6B" strokeWidth={3} dot={{ r: 4 }} />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="widget-card">
                <h2>Community Hub</h2>
                <p className="card-subtitle">Connect with other gardeners and share your experiences.</p>
                <p>Discover gardening tips, join discussions, and showcase your plant collection to the PlantPal community.</p>
                <button className="btn btn-secondary-outline btn-full-width">Explore Community</button>
                <p className="no-activity-text">No new activity yet. Be the first to post!</p>
              </div>
            </aside>
          </main>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
