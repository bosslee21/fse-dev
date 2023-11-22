import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import * as client from "./client";

function UserList() {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

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
  }, []);

  return (
    <div>
      {currentUser && currentUser.role === "ADMIN" && (
        <>
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
