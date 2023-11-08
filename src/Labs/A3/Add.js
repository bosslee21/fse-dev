import React from "react";
import { useParams } from "react-router-dom";

// refer to PathParameters.js  to where it it used
function Add() {
    // parse URL parameters using useParams() hook
    // if will create object with a and b properties
    // and extract the values from the URL
  const { a, b } = useParams();
  return (
    <div> <h2>Add Path Parameters</h2>
      {a} + {b} = {parseInt(a) + parseInt(b)}
    </div>
  );
}
export default Add;