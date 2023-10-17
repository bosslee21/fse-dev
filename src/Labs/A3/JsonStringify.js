import JsonPre from "./JsonPre";
function JsonString() {
    const squares = [1,4,16,25,36];

    return(
        <div>
            <h2>JSON Stringify</h2>
            squares = {JSON.stringify(squares)} <br />
            <h2>Json PRE STRINGIFY</h2>
            <JsonPre json={squares} />
            {/* <JsonPre json={JSON.stringify(squares)} /> */}
        </div>
    )

}
export default JsonString;