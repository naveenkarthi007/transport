import React, { useState } from "react";
import "../styles/Driver.css";
export default function UserPage() {
  const [status, setStatus] = useState("Online");
  const [trips, setTrips] = useState([
    { id: 1, from: "Chennai", to: "Bangalore", load: "Electronics", date: "15 Nov 2025", status: "Completed" },
    { id: 2, from: "Bangalore", to: "Chennai", load: "Furniture", date: "19 Nov 2025", status: "Completed" },
    { id: 3, from: "Chennai", to: "Coimbatore", load: "Clothing", date: "25 Nov 2025", status: "Upcoming" }
  ]);
  const [newTrip, setNewTrip] = useState({
    from: "",
    to: "",
    load: "",
    date: "",
    status: "Upcoming"
  });

  const addTrip = () => {
    if (!newTrip.from || !newTrip.to || !newTrip.load || !newTrip.date) {
      alert("Please fill all fields");
      return;
    }

    const tripToAdd = {
      id: trips.length + 1,
      ...newTrip
    };

    setTrips([...trips, tripToAdd]);

    setNewTrip({ from: "", to: "", load: "", date: "", status: "Upcoming" }); 
  };

  return (
    <div className="driver-container">
      <div className="driver-box">

        <h2 className="title">Welcome</h2>

        <div className="status-section">
          <p>
            Current Status:{" "}
            <span className={status === "Offline" ? "offline" : "online"}>
              {status}
            </span>
          </p>

          <div className="status-buttons">
            <button onClick={() => setStatus("Online")} className="btn online-btn">
              Go Online
            </button>
            <button onClick={() => setStatus("Offline")} className="btn offline-btn">
              Go Offline
            </button>
          </div>
        </div>

        <h3 className="sub-title">Add New Trip</h3>

        <div className="add-trip-form">
          <input
            type="text"
            placeholder="From"
            value={newTrip.from}
            onChange={(e) => setNewTrip({ ...newTrip, from: e.target.value })}
          />

          <input
            type="text"
            placeholder="To"
            value={newTrip.to}
            onChange={(e) => setNewTrip({ ...newTrip, to: e.target.value })}
          />

          <input
            type="text"
            placeholder="Load"
            value={newTrip.load}
            onChange={(e) => setNewTrip({ ...newTrip, load: e.target.value })}
          />

          <input
            type="date"
            value={newTrip.date}
            onChange={(e) => setNewTrip({ ...newTrip, date: e.target.value })}
          />
          <button className="btn add-btn" onClick={addTrip}>
            Add Trip
          </button>
        </div>
        <h3 className="sub-title">Your Trips</h3>
        <div className="trip-list">
          {trips.map((trip) => (
            <div className="trip-card" key={trip.id}>
              <h4>Trip #{trip.id}</h4>
              <p><strong>From:</strong> {trip.from}</p>
              <p><strong>To:</strong> {trip.to}</p>
              <p><strong>Load:</strong> {trip.load}</p>
              <p><strong>Date:</strong> {trip.date}</p>
              <p><strong>Status:</strong> {trip.status}</p>

              <button className="btn view-btn">View Details</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
