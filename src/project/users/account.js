import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as client from "./client";

function Account() {
  const [account, setAccount] = useState({});
  const navigate = useNavigate();

  const fetchAccount = async () => {
    try {
      const serverAccount = await client.account();
      setAccount(serverAccount);
    } catch (error) {
      navigate("/project/signin");
    }
  };
  const updateAccount = async (account) => {
    const serverUpdateUser = await client.updateUser(account._id, account);
  };
  const signOut = async () => {
    const serverSignOut = await client.signOut();
    navigate("/project/signin");
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <div>
      <h1>Account</h1>
      {account && (
        <div>
          <input
            className="form-control"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />
          <input
            className="form-control"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <input
            className="form-control"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <input
            className="form-control"
            type="text"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <input
            className="form-control"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <select
            className="form-control"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>

          <button
            className="btn btn-primary"
            onClick={() => updateAccount(account)}
          >
            Update
          </button>

          <button onClick={() => signOut()} className="btn btn-danger">
            Sign out
          </button>
          <Link to="/project/users" className="btn btn-warning">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
