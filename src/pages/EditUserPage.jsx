import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Admin.css";

export default function EditUserPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    status: "Online",
    trips: 0
  });

  useEffect(() => {
    const dummyUsers = [
      { id: 1, name: "Naveen", status: "Online", trips: 5 },
      { id: 2, name: "Suresh", status: "Offline", trips: 3 },
      { id: 3, name: "Prakash", status: "Online", trips: 7 }
    ];

    const selected = dummyUsers.find((u) => u.id === Number(id));
    if (selected) setUser(selected);
  }, [id]);

  const saveUser = () => {
    alert("User updated!");
    navigate("/admin");
  };

  return (
    <div className="admin-container">
      <div className="edit-box">
        <h3>Edit User</h3>

        <label>Name</label>
        <input
          className="input"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />

        <label>Status</label>
        <select
          className="input"
          value={user.status}
          onChange={(e) => setUser({ ...user, status: e.target.value })}
        >
          <option>Online</option>
          <option>Offline</option>
        </select>

        <label>Trips</label>
        <input
          type="number"
          className="input"
          value={user.trips}
          onChange={(e) =>
            setUser({ ...user, trips: Number(e.target.value) })
          }
        />

        <button className="btn save-btn" onClick={saveUser}>
          Save Changes
        </button>

        <button className="btn cancel-btn" onClick={() => navigate("/admin")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
