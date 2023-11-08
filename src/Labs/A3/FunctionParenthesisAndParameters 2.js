function FunctionParenthesisAndParameters() {
    const square = a => a * a;
    const plusOne = a => a + 1;
    const twoSquared = square(2);
    const threePlusOne = plusOne(3);

    return(
        <div>
            <h2>Function Parenthesis and Parameters</h2>
            square = {square} <br />
            plusOne = {plusOne} <br />
            twoSquared = {twoSquared} <br />
            threePlusOne = {threePlusOne} <br />
        </div>
    );



}
export default FunctionParenthesisAndParameters;