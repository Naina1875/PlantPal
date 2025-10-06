// src/pages/Dashboard.jsx
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import '../Styles/Dashboard.css'; 
function Dashboard() {
    
  // Placeholder sensor data (simulating live readings)
  const plants = [
    { name: 'Rose', status: '✅', moisture: 80 },
    { name: 'Tulip', status: '✅', moisture: 65 },
    { name: 'Orchid', status: '⚠️', moisture: 35 },
  ];

  // Identify plants needing attention
  const attentionPlants = plants.filter(p => p.moisture < 45);

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="navbar-home">
        <div className="navbar-left">
          <img
            src="/Main.png"
            alt="PlantPal Logo"
            className="logo"
          />
        </div>
        <ul className="nav-links-home">
          <li><NavLink to="/home">Home</NavLink></li>
          <li><NavLink to="/plantlib">Plant Library</NavLink></li>
          <li><NavLink to="/features">Features</NavLink></li>
          <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink></li>
          <li><NavLink to="/urbangrow">UrbanGrow</NavLink></li>
        </ul>
      </nav>

      {/* Dashboard Content */}
      <div className="dashboard-container">
        
        {/* Section 1: Garden Overview */}
        <motion.div
          className="garden-overview"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="overview-header">
            <h1>🌿 Garden Overview</h1>
            <p className="overview-subtext">
              {attentionPlants.length === 0
                ? "Everything looks lush and healthy today!"
                : `Some plants need your attention (${attentionPlants.length})`}
            </p>
          </div>

          <div className="overview-summary">
            <div className="summary-item">💧 Moisture: <span>Optimal</span></div>
            <div className="summary-item">🌱 Nutrients: <span>Good</span></div>
            <div className="summary-item">🐞 Pests: <span>None Detected</span></div>
          </div>

          {attentionPlants.length > 0 && (
            <div className="attention-list">
              <h3>🪴 Needs Attention</h3>
              <ul>
                {attentionPlants.map((plant) => (
                  <li key={plant.name}>{plant.name} — Low moisture ({plant.moisture}%)</li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        {/* Section 2: My Garden */}
        <h2 className="section-title">My Garden</h2>
        <div className="plant-grid">
          {plants.map(plant => (
            <motion.div
              className="plant-card"
              key={plant.name}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="plant-card-header">
                <h3>{plant.name}</h3>
                <span className="status-icon">{plant.status}</span>
              </div>
              <div className="health-meter">
                <label>Moisture</label>
                <div className="progress-bar-bg">
                  <div
                    className={`progress-bar-fill ${plant.moisture < 45 ? "low" : ""}`}
                    style={{ width: `${plant.moisture}%` }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Section 3: Automated Schedules */}
        <h2 className="section-title">Automated Schedules</h2>
        <motion.div
          className="schedules-overview"
          initial={{ opacity: 0, y: 20 }}
    
        >
          <div className="schedule-item">
            <strong>Rose:</strong> Watering is <strong>ON</strong>. Waters automatically when moisture drops below 45%.
          </div>
          <div className="schedule-item">
            <strong>System:</strong> Next pest detection scan is scheduled for tomorrow at 9:00 AM.
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;
