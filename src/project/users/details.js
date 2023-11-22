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
          <p>Username: {user.username}</p>
          <p>
            First Name:
            <input
              type="text"
              className="form-control"
              value={user.firstName}
              onChange={(e) => setUser({ ...user, firstName: e.target.value })}
            ></input>{" "}
          </p>
          <p>Last Name: {user.lastName}</p>
          <p>Role: {user.role}</p>

          <button
            className="btn btn-primary"
            onClick={() => updateUser(userId, user)}
          >
            Update
          </button>
          <button className="btn btn-danger" onClick={() => deleteUser(userId)}>
            Delete
          </button>
        </div>
      )}
    </div>
  );
}
export default UserDetails;
