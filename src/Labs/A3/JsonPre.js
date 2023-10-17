function JsonPre({ json }) {
    return (
        <pre>
            <code>
                {/* add  2 spaces to the beginning of each line and break new line after each comma */}
                {JSON.stringify(json, null, 2)}

            </code>

        </pre>
    );

   
}

export default JsonPre;