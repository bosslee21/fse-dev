function FindIndex() {
    let numberArray1 = [1, 2, 4, 5, 6];
    let stringArray1 = ['string1', 'string3'];

    const fourIndex = numberArray1.findIndex(a => a === 4);
    const string3Index = stringArray1.findIndex(a => a === 'string3');

    // The findIndex() method of Array instances returns the index of the first
    //  element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
    return(
        <div>
            <h2>FindINDEX Function</h2>
            fourIndex = {fourIndex}<br />
            string3Index = {string3Index}<br />
        </div>
    );


}
export default FindIndex;