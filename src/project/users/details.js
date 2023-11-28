import { useParams, useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import * as client from "./client";
function UserDetails() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const fetchUserById = async (userId) => {
    const serverUser = await client.findUserById(userId);
    console.log(serverUser);
    setUser(serverUser);
  };
  const updateUser = async (userId, user) => {
    const status = await client.updateUser(userId, user);
  };

  const deleteUser = async (userId) => {
    const status = await client.deleteUser(userId);
    navigate("/project/users");
  };
  useEffect(() => {
    fetchUserById(userId);
  }, []);

  return (
    <div>
      <h2>user detail</h2>
      {user && (
        <div>
          Username:
          <input
            type="text"
            className="form-control"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
          ></input>
          <p>
            First Name:
            <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            ></input>{" "}
          </p>
          <p>
            Last Name:
            <input
              type="text"
              className="form-control"
              value={user.lastName}
              onChange={(e) => setUser({ ...user, lastName: e.target.value })}
            ></input>{" "}
          </p>
          Role:
          <select
            className="form-control"
            value={user.role}
            onChange={(e) => setUser({ ...user, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <button
            className="btn btn-primary"
            style={{ marginTop: "10px" }}
            onClick={() => updateUser(userId, user)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            onClick={() => deleteUser(userId)}
            style={{ marginTop: "10px" }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
export default UserDetails;
