function TernaryOperator() {
    let LoggedIn = true;
    return(
        <div>
            <h2>Ternary Operator</h2>
            {/* if loggedIn is true then return first p else second p */}
            {LoggedIn ? <p>Logged In</p> : <p>Logged Out</p>}
        </div>
    )


}
export default TernaryOperator;