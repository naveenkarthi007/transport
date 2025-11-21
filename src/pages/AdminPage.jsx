import React, { useState } from "react";
import "../styles/Admin.css";
import { useNavigate } from "react-router-dom";

export default function AdminPage() {
  const navigate = useNavigate();

  const [users] = useState([
    { id: 1, name: "Naveen", status: "Online", trips: 5 },
    { id: 2, name: "Suresh", status: "Offline", trips: 3 },
    { id: 3, name: "Prakash", status: "Online", trips: 7 },
  ]);

  return (
    <div className="admin-container">
      <div className="admin-box">
        <h2 className="title">Admin Dashboard</h2>
        <h3 className="subtitle">Drivers List</h3>

        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Status</th>
              <th>Trips</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <span className={user.status === "Online" ? "online" : "offline"}>
                    {user.status}
                  </span>
                </td>
                <td>{user.trips}</td>
                <td>
                  <button className="btn view-btn" onClick={() => navigate("/user")}>
                    View Page
                  </button>

                  <button
                    className="btn edit-btn"
                    onClick={() => navigate(`/edit/${user.id}`)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}
