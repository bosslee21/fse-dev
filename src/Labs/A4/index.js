import Add from "./Add";
import ClickEvent from "./ClickEvent";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import EventObject from "./EventObject";
import Counter from "./Counter";
import BooleanStateVariables from "./BooleanStateVariables";
import StringStateVariables from "./StringStateVariable";
import DateStateVariable from "./DateStateVariable";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import FunctionAsParameters from "./FunctionAsParameters";
import ParentStateComponent from "./ParentStateComponent";

function A4() {
    const sayHello = () => {
        alert("Hello WORLLD");
    };
    return (
        <div>
            <h1>Lab 4</h1>
            <Add a={1} b={2} />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <PassingFunctions theFunction={() => alert("Life is Good!")} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <ArrayStateVariable />
            <ObjectStateVariable />
            <StringStateVariables />
            <DateStateVariable />
            <ParentStateComponent />

            {/* <FunctionAsParameters /> */}

        </div>
    )
}
export default A4;