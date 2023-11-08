import { useState } from "react";

function User() {
    const [user, setUser] = useState({ username: "Jae", password: "sss", email: "g2@gmail.com" });
    const [loggedIn, setLoggedIn] = useState(false);
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoggedIn(true);
    };


    //prof:  (e) = event that happen in the browser, e.target = the element that trigger the event,
    //  e.target.value = the value of the element that trigger the event
    // <input value={user.username} onChange={(e)=>setUser({...user, username: e.target.value})}></input>


    return (
        <div>


            <h2>Login</h2>
            {!loggedIn ? (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={user.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={handleChange}
                    />
                    <button type="submit">Login</button>
                </form>
            ) : (
                <h1>Welcome {user.username}!</h1>
            )}
        </div>
    );


}
export default User;