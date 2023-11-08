import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setMessage } from "./HelloReducer";

function HelloRedux() {
    // const [message, setMessage] = useState("Hello World");

    // useSelector is used to get the state from the store
    const message = useSelector((state) => state.Hello.message);
    // same as above
    // const { message } = useSelector((state) => state.Hello);

    const dispatch = useDispatch();
    return (
        <div>

            <button className="btn btn-secondary" onClick={() => dispatch(setMessage("Hello Redux!!!"))}>Set Message</button>
            <h2>{message}</h2>

        </div>
    );
}
export default HelloRedux;







// function HelloRedux() {
//     // const [message, setMessage] = React.useState("Hello World");
//     const message = useSelector((state) => state.hello.message);
//     // const {message} = useSelector((state) => state.HelloReducer);
//     return (
//         <div>

//             <button onClick={() => setMessage("Hello Redux")}>Change Message</button>
//             <h2>{message}</h2>
//         </div>
//     );
// }
// export default HelloRedux;