import Add from "./Add";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import FunctionAsParameters from "./FunctionAsParameters";
function A4 () {
    return (
        <div>
            <h1>Lab 4</h1>
            <ClickEvent />
            <FunctionAsParameters />
            <Add a= {1} b={2} />

            <Counter />
        </div>
    )
}
export default A4;