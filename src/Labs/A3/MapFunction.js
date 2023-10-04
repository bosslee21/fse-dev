function MapFunction() {
    let numberArray1 = [1, 2, 3, 4, 5, 6];
    const square = a => a * a;
    // Map function calls square function on each element of numberArray1
    // iterate over the array and call the function on each element
    // it accumulates the results of each function call in a new array and returns it

    // square = 1, 4, 9, 16, 25, 36
    const squares = numberArray1.map(square);
    // cube = 1, 8, 27, 64, 125, 216
    const cubes = numberArray1.map(a => a * a * a);

    return (
        <div>
            <h2>Map Function</h2>
            numberArray1 = {numberArray1} <br />
            squares = {squares} <br />
            cubes = {cubes} <br />
           
        </div>

    )


}
export default MapFunction;