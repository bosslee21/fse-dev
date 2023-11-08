function ArrayIndexAndLength() {
    let numberArray1 = [1, 2, 3, 4, 5];
    // return size of the array = 5
    const length1 = numberArray1.length;
    // return index of 3 in the array = 2 which is 3rd element
    const index1 = numberArray1.indexOf(3);

    // find element in index of array position 3
    // const index2 = numberArray1.findIndex(3)

    return(
        <div>
            <h2>Array Index and Length</h2>
            numberArray1 = {numberArray1} <br />
            length1 = {length1} <br />
            index1 = {index1} <br />
            {/* index2 = {index2} <br /> */}
        </div>
    );

}
export default ArrayIndexAndLength;