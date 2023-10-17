function ClickEvent() {

    //function implementation
    const handleClick = () => {
        alert("You Click the button");
    };

    const alertAdd = (a,b) => {
        alert(a+b);
    };

    return (
        <div>
           <h1>ClickEvent</h1>
           first two button are the same
           <button onClick={handleClick}>Click Me</button>
           <br> </br>
           <button onClick={() => handleClick}>Click Me</button>

            <br></br>
           <button onClick={() => alertAdd(1,2)}>Click add, Embedded</button>
        </div>
    )

}
export default ClickEvent;