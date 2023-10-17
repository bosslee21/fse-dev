// import HelloWorld from "./HelloWorld";
import VariableAndConstant from "./VariablesAndConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariable from "./BooleanVariable";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import ES5Functions from "./ES5Functions";
import ArrowFunctions from "./ArrowFunctions";
import ImpliedReturn from "./ImpliedReturn";
import WorkingWithArrays from "./WorkingWithArrays";
import FunctionParenthesisAndParameters from "./FunctionParenthesisAndParameters";
import ArrayIndexAndLength from "./ArrayIndexAndLength";
import AddingAndRemovingArray from "./AddingAndRemovingDataToFromArrays";
import Forloops from "./ForLoops";
import MapFunction from "./MapFunction";
import JsonString from "./JsonStringify";
import FindFunction from "./FindFunction";
import FindIndex from "./FindIndex";
import FilterFunction from "./FilterFunction";
import TemplateLiterals from "./TemplateLiterals";
import House from "./House";
import Spread from "./Spread";
import Destructing from "./Destructing";
import FunctionDestructing from "./FunctionDestructing";
import PathParameters from "./PathParameters";


// In this we dont need JavaScript.js we can directly add the components to index.js in the A3 folder.
//  But in this demo we are adding JavaScript.js and adding the components to it. 
function JavaScript() {
    console.log("hello from JavaScript.js");
    
    return(
       <div>
          <h1>JavaScript</h1>
          {/* <HelloWorld /> */}
          <VariableAndConstant />
          <VariableTypes />
          <BooleanVariable />
          <IfElse />
          <TernaryOperator />
          <ES5Functions />
          <ArrowFunctions />
          <ImpliedReturn />
          <FunctionParenthesisAndParameters />
            <WorkingWithArrays />
            <ArrayIndexAndLength />
            <AddingAndRemovingArray/>
            <Forloops />
            <MapFunction />
            <JsonString /> 
            <FindFunction />
            <FindIndex />
            <PathParameters />

            <FilterFunction />
            <TemplateLiterals />
            <House />
            <Spread />
            <Destructing />
            <FunctionDestructing />
            
       </div>
    );
 }
 export default JavaScript