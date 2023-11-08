function ImpliedReturn() {
    // Notice we are droping the return keyword. this make it easier to read and write.
    const mulitply = (a,b) => a*b; // implicit return;
    const twoTimesFour = mulitply(2,4);

    console.log(twoTimesFour);
    return(
        <div>
            <h2>ImPlied Return</h2>
            twoTimesFour = {twoTimesFour}<br />
            mulitply(2, 4) = {mulitply(2, 4)}<br />
        </div>
    );

  
}

export default ImpliedReturn;