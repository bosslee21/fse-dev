import React, { useState } from "react";
function BooleanStateVariables() {
  const [done, setDone] = useState(true);

  const handleClick = () => {
    setDone(!done);
    alert("You Click the button");
  };

  return (
    <div>
      <h2>Boolean State Variables</h2>
      <p>{done ? "Done" : "Not done"}</p>
      <label className="form-control">
        <input type="checkbox" checked={done}
          onChange={() => setDone(!done)} />
        Done
      </label>
      {done && <div className="alert alert-success">
        Yay! you are done</div>}
    </div>
  );
}
export default BooleanStateVariables;





// import React, { useState } from "react";
// function BooleanState() {
//     const [done, setDone] = useState(false);
//     const handleClick = () => {
//         setDone(!done);
//         alert("You Click the button");
//     };

//     return (
//         <div>
//             <p>Done: {done}</p>
//             <button onClick={handleClick}>Click Me</button>
//             <h3>{done ? "Done" : "not DONE"} </h3>
//             <input type="checkbox" checked={done} onChange={handleClick}></input>
//         </div>
//     );
// }
// export default BooleanState;


