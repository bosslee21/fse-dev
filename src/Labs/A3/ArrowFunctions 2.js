function ArrowFunctions() {
    // ES6 function syntax is more concise and easier to read. It also solves the problem of this arrow=> keyword.
    // notice its not function declaration. it can be const which is set as non-changeable variable
    const subtract = (a, b) => {
        return a - b;
      }
      const threeMinusOne = subtract(3, 1);
      console.log(threeMinusOne);
    
      return (
       <>
        <h3>New ES6 arrow functions</h3>
        threeMinusOne = {threeMinusOne}<br />
        subtract(3, 1) = {subtract(3, 1)}<br />
       </>
      )
    

}
export default ArrowFunctions;