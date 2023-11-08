import { useState } from "react";
function Login() {

    const [user, setUser] = useState({ username: "", password: "" });
    const [loggedIn, setLoggedIn] = useState(false);
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setLoggedIn(true);
    };
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
export default Login;