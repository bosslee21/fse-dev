function FindFunction() {
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2', 'string3'];

    // The find() method of Array instances returns the first element in the
    //  provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.

    // returns the element 4 from the array if found. If not found, returns undefined
    const four = numberArray1.find(a => a === 4);
    const string3 = stringArray1.find(a => a === 'string3');

    return(
        <div>
            <h2>FindFunction</h2>
            four = {four}<br />
            String3 = {string3}<br />
        </div>
    )

}

export default FindFunction;