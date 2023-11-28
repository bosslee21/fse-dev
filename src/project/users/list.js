import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { BsFillCheckCircleFill, BsPlusCircleFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";

import * as client from "./client";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [user, setUser] = useState({
    username: "",
    password: "",
    role: "USER",
  });

  const createUser = async () => {
    try {
      const newUser = await client.createUser(user);
      setUsers([newUser, ...users]);
    } catch (err) {
      console.log(err);
    }
  };
  const selectUser = async (user) => {
    try {
      const u = await client.findUserById(user._id);
      setUser(u);
    } catch (err) {
      console.log(err);
    }
  };
  const updateUser = async () => {
    try {
      const status = await client.updateUser(user);
      setUsers(users.map((u) => (u._id === user._id ? user : u)));
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCurrentUser = async () => {
    const serverCurrentUser = await client.account();
    setCurrentUser(serverCurrentUser);
  };

  const fetchUsers = async () => {
    const serverUsers = await client.findAllUsers();
    setUsers(serverUsers);
  };

  useEffect(() => {
    fetchUsers();
    fetchCurrentUser();
  }, [setCurrentUser]);
  console.log(currentUser);

  return (
    <div>
      {currentUser && currentUser.role === "ADMIN" && (
        <>
          <div>
            <h1>User List</h1>
            <h2>
              <p>Current User: {currentUser.username} </p> Role:{" "}
              {currentUser.role}
            </h2>
            <table className="table">
              <thead>
                <tr>
                  <th>UserName</th>
                  <th>Password</th>
                  <th>FirstName</th>
                  <th>LastName</th>
                  <th>Role</th>
                </tr>
                <tr>
                  <td>
                    <input
                      className="form-control"
                      value={user.username}
                      placeholder="Username"
                      onChange={(e) =>
                        setUser({ ...user, username: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Password"
                      value={user.password}
                      onChange={(e) =>
                        setUser({ ...user, password: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      placeholder="first Name"
                      value={user.firstName}
                      onChange={(e) =>
                        setUser({ ...user, firstName: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <input
                      className="form-control"
                      placeholder="Last Name"
                      value={user.lastName}
                      onChange={(e) =>
                        setUser({ ...user, lastName: e.target.value })
                      }
                    />
                  </td>
                  <td>
                    <select
                      className="form-control"
                      value={user.role}
                      onChange={(e) =>
                        setUser({ ...user, role: e.target.value })
                      }
                    >
                      <option value="USER">User</option>
                      <option value="ADMIN">Admin</option>
                      <option value="FACULTY">Faculty</option>
                      <option value="STUDENT">Student</option>
                    </select>
                  </td>
                  <td>
                    <BsPlusCircleFill
                      className="me-2 text-danger fs-1 text"
                      onClick={createUser}
                    />
                  </td>
                </tr>
              </thead>
            </table>
          </div>
          <div className="list-group">
            {users.map((user) => (
              <Link
                key={user._id}
                to={`/project/users/${user._id}`}
                className="list-group-item"
              >
                {user.username}
                <button className="float-end btn btn-warning me-2">
                  <FaPencilAlt onClick={() => selectUser(user)} />
                </button>
              </Link>
            ))}
          </div>
        </>
      )}
      {currentUser && currentUser.role !== "ADMIN" && (
        <Navigate to="/project/signin" />
      )}
    </div>
  );
}

export default UserList;

/* <div>
      <h2> users</h2>
      <div className="list-group">
        {users.map((user) => (
          <Link
            key={user._id}
            to={`/project/users/${user._id}`}
            className="list-group-item"
          >
            {user.username}
          </Link>
        ))}
      </div>
    </div> */
