// src/pages/StartWatering.jsx
import React, { useState } from "react";
import "../Styles/Features.css";
import "../Styles/StartWatering.css";
import DescriptionPopup from "../Components/DescriptionPopup";

function StartWatering({ onBack }) {
  const [schedules, setSchedules] = useState([]);
  const [formData, setFormData] = useState({
    plant: "",
    startTime: "",
    frequency: "daily",
    duration: 1,
  });

  const [editId, setEditId] = useState(null);
  const [showPlantDropdown, setShowPlantDropdown] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false); // state for popup

  const plantOptions = ["Rose", "Tulip", "Lily", "Orchid"]; // backend can populate

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const addSchedule = () => {
    if (!formData.plant || !formData.startTime || !formData.duration) {
      alert("Please fill all fields.");
      return;
    }

    if (editId) {
      setSchedules(
        schedules.map((sched) =>
          sched.id === editId ? { ...formData, id: editId, enabled: sched.enabled } : sched
        )
      );
      setEditId(null);
    } else {
      setSchedules([...schedules, { ...formData, id: Date.now(), enabled: true }]);
    }

    setFormData({ plant: "", startTime: "", frequency: "daily", duration: 1 });
    setShowPlantDropdown(false);
  };

  const toggleSchedule = (id) => {
    setSchedules(
      schedules.map((sched) =>
        sched.id === id ? { ...sched, enabled: !sched.enabled } : sched
      )
    );
  };

  const deleteSchedule = (id) => {
    setSchedules(schedules.filter((sched) => sched.id !== id));
  };

  const editSchedule = (sched) => {
    setFormData({
      plant: sched.plant,
      startTime: sched.startTime,
      frequency: sched.frequency,
      duration: sched.duration,
    });
    setEditId(sched.id);
    setShowPlantDropdown(false);
  };

  const handlePlantClick = (plant) => {
    setFormData({ ...formData, plant });
    setShowPlantDropdown(false);
  };

  const saveChanges = () => {
    // later: send schedules to backend or dashboard
    alert("Changes saved! Your schedules will appear on the dashboard.");
  };

  const filteredPlants = plantOptions.filter((p) =>
    p.toLowerCase().includes(formData.plant.toLowerCase())
  );

  return (
    <div className="feature-details">
      <div className="header-with-button">
        <h2>Watering Schedule Management</h2>
        <button className="desc-btn" onClick={() => setPopupVisible(true)}>
          See description to setup sensor
        </button>
      </div>

      {/* Schedule Form */}
      <div className="schedule-form">
        <div className="plant-dropdown-wrapper">
          <input
            type="text"
            name="plant"
            placeholder="Plant Name"
            value={formData.plant}
            onChange={(e) => {
              handleInputChange(e);
              setShowPlantDropdown(true);
            }}
            onClick={() => setShowPlantDropdown(true)}
          />
          {showPlantDropdown && filteredPlants.length > 0 && (
            <ul className="plant-dropdown">
              {filteredPlants.map((plant) => (
                <li key={plant} onClick={() => handlePlantClick(plant)}>
                  {plant}
                </li>
              ))}
            </ul>
          )}
        </div>

        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleInputChange}
        />
        <select
          name="frequency"
          value={formData.frequency}
          onChange={handleInputChange}
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="weekly">Once in 2-3 days</option>
        </select>
        <input
          type="number"
          name="duration"
          placeholder="Duration (minutes)"
          min="1"
          value={formData.duration}
          onChange={handleInputChange}
        />
        <button onClick={addSchedule}>
          {editId ? "Update Schedule" : "Add Schedule"}
        </button>
      </div>

      {/* Schedule List */}
      <div className="schedule-list">
        {schedules.length === 0 && <p>No schedules yet.</p>}
        {schedules.map((sched) => (
          <div className="schedule-card" key={sched.id}>
            <div className="schedule-info">
              <h3>{sched.plant}</h3>
              <p>
                Time: {sched.startTime} | Frequency: {sched.frequency} | Duration:{" "}
                {sched.duration} mins
              </p>
            </div>
            <div className="schedule-actions">
              <button
                className={sched.enabled ? "enabled" : "disabled"}
                onClick={() => toggleSchedule(sched.id)}
              >
                {sched.enabled ? "Disable" : "Enable"}
              </button>
              <button
                className="edit-btn"
                onClick={() => editSchedule(sched)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteSchedule(sched.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Save Changes Button */}
      {schedules.length > 0 && (
        <div className="save-changes-wrapper" style={{ textAlign: "right", marginTop: "1rem" }}>
          <button className="save-btn" onClick={saveChanges}>
            Save Changes
          </button>
        </div>
      )}

      {/* Calendar UI */}
      <div className="calendar-view">
        <h2>Calendar View</h2>
        <div className="calendar-placeholder">
          <p>📅 Calendar will be implemented here.</p>
        </div>
      </div>

      {/* Popup for sensor description */}
      <DescriptionPopup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
      />
    </div>
  );
}

export default StartWatering;
