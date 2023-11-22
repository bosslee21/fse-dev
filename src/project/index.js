import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import UserList from "./users/list";
import Nav from "../Nav";
import UserDetails from "./users/details";
import SignIn from "./users/signin";
import Account from "./users/account";

function Project() {
  return (
    <div className="container-fluid">
      <Nav />
      <h1>PROFILE</h1>
      <div className="row">
        <div className="col-2">
          <div className="list-group">
            <Link to="/project/" className="list-group-item">
              Home
            </Link>
            <Link to="/project/signin" className="list-group-item">
              Signin
            </Link>
            <Link to="/project/signup" className="list-group-item">
              Signup
            </Link>
            <Link to="/project/account" className="list-group-item">
              Account
            </Link>
            <Link to="/project/search" className="list-group-item">
              Search
            </Link>
            <Link to="/project/users" className=" btn btn-primary">
              Users
            </Link>
            <Link to="/project/details" className="list-group-item">
              Details
            </Link>
          </div>
        </div>
        <div className="col-10">
          <Routes>
            <Route path="/users" element={<UserList />} />
            <Route path="/users/:userId" element={<UserDetails />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Project;
