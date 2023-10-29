// 1.
// const q = [1, 2, 3, 4, 5]
// const w = q.map(a => a === 3 ? 6 : a)
// [1, 2, 6, 4, 5]


// 2. URL:Uniform Resource Locator

// 3. DOM:  Document Object Model

// 4.

//     < Label  for = "email" > Email</label >
//         <input
//             value="alice@wonderland.com"
//             placeholder="john@doe.com"
//             id="email"
//             title="Type your email" />

// 5.

// const y = [123, 234, 345, 456]
// const z = [y[1], ...y]
// [234, 123, 234, 345, 456]


// 6.

// jkl.js
// import React from "react";
// import { useParams } from "react-router-dom";
// function Jkl({ asd = [9, 2, 8, 3] }) {
//     const { dsa } = useParams();
//     const ewq = [dsa, ...asd];
//     return (
//         <div>
//             <h2>{ewq}</h2>
//         </div>
//     );
// }
// export default Jkl;


// bnm.js

// import { Link, Route, Routes } from "react-router-dom";
// import Jkl from "./Jkl";
// function Bnm({ sdf = 4 }) {
//     return (
//         <div>
//             <Link to={`/q11/${sdf}`}>BUTTON</Link>
//             <Routes>
//                 <Route path="/q11/:dsa" element={<Jkl />} />
//             </Routes>
//         </div>
//     );
// }
// export default Bnm;

// BUTTON sets ewq to[4, 9, 2, 8, 3]


// 7.

// const q = { a: 123, b: 234 }
// const w = { ...q, c: 456, b: 345 }

// { a: 123, b: 345, c: 456 }


// 8.  Fill in the blanks above so that if you click LINK A and then LINK B, the browser renders 7
// // BrowserRouter = HashRouter
// Asd.js
// function Asd() {
//     const {zxc, xcv} = useParams() // does not match with parameter name
//     const qwe = parseInt(zxc)
//     const wer = parseInt(xcv)
//     return(<h1>{__xcv__ - __zxc__}</h1>)
//    }
//    export default Asd
   
   
//    Rew.js
//    import {BrowserRouter, Link, Routes, Route}
//     from "react-router"
//    function Rew() {
//     const {qwe, wer} = useParams() // component destructuring needs to match with the parameter name
//     return(<__Link__ to={`/asd/${wer}/${qwe}`}> // 14 ,21
//     LINK B
//     </__Link__>)
//    }
//    export default Rew
   
//    // first screen to see. 
//    App.js
//    import Asd from "./Asd"
//    import Rew from "./Rew"
//    import {BrowserRouter, Link, Routes, Route}
//     from "react-router"
//    function App() {
//     return(
//     <BrowserRouter> 
//     <Link to="/qwe/21/14/wer">LINK A</Link>
//     <Routes>
//     <Route path="/__qwe__/:qwe/:wer/wer" // 21/14 will be match with : qwe and :wer as parameter
//     element={<__Rew__/>}/>
//     <Route path="/__asd__/:zxc/:xcv"
//     element={<__Asd__/>}/>
//     </Routes>
//     </BrowserRouter>
//     )
//    }
   


// 9.

// const w = ["ewq", "dsa", "asd", "tre", "zxc"];
// const r = w.find((a, b) => a === "tre")
// b = index
// a = value

// Fill in the blanks so that r is equal to "tre"



// 10. Consider the following set of buttons.If a user clicks on the text, the button on its left is selected.

// < label > <input type="checkbox" name="radio" id="ABC" />ABC </label >
// <label><input type="checkbox" name="radio" id="DEF"/> DEF </label>
// <label><input type="checkbox" name="radio" id="GHI"/>GHI</label>


// 11. ASK QUESTIONS!!!!!!!!!!!!!!!!!

// BUTTON, the console prints the following
// [321, 432, 999, 654, 765]

// function Asd() {
//     const ewq = [321, 432, 543, 654, 765];

//     const tre = (ytr, uyt) => {
//         const poi = ewq.map(
//             (iuy) => (iuy === ytr ? uyt : iuy));
//         console.log(poi);
//     };

//     return (
//         <div>
//             <button oneClick={() => tre(543, 999)}>
//                 BUTTON
//             </button>
//         </div>
//     );
// }


// 12. Fill in the blanks so that q is equal to 1

// const w = [51, 42, 33, 24, 15]
// const q = w.findIndex(b => b === 42)



// ASKKK!!!!!!!!!!!!!!!!!!!
// 13. Fill in the blanks above so the console prints 1 
// after clicking button Lvp 4 times and button Poi 3 times.


// const Jkl = () => {
//     let qwe = { ert: 6 };
//     const __wer__ = (ewq) => console.log(ewq.ert);
//     return (
//         <div>
//             <button onClick={
//                 () => wer({ ...qwe, ert: qwe.ert + 1 })}>
//                 Lvp
//             </button>
//             <button onClick={
//                 () => __wer__({ ...qwe, ert: qwe.ert - 3 })}>
//                 Poi
//             </button>
//         </div>
//     );
// };
// export default Jkl;



// 14.

//     < input type = "radio_"  name = "color" placeholder = "color" /> Comedy
//         < input type = "radio"  name = "genre" placeholder = "genre" /> Red
//             < input type = "radio"  name = "color" placeholder = "color" /> Horror
//                 < input type = "radio"  name = "genre" placeholder = "genre" /> Blue
//                     < input type = "radio"  name = "color" placeholder = "color" /> Drama
//                         < input type = "radio"  name = "genre" placeholder = "genre" /> Yellow



// 15. Fill in the blanks above so that clicking on the BUTTON twice, the console displays 20.
// Answers are case insensitive


// import React from "react";
// function Xyz({ __qwe__ = 10 }) {
//     let __rew__ = qwe;
//     const __ert__ = (ewq) => {
//         rew = ewq;
//     };
//     const __asd__ = () => {
//         ert(rew + 5);
//         console.log(rew);
//     };
//     return (
//         <div>
//             <button __onClick__={asd}>BUTTON</button>
//         </div>
//     );
// }
// export default Xyz;




// 16.
// Fill in the blanks above so that the console prints 456 and then 234

// const qwe = { asd: 123, sdf: 234 }
// const zxc = { sdf: 345, ...qwe, asd: 456, zxc: 567 }
// const { sdf, asd } = zxc

// console.log(asd)
// console.log(sdf)

// 17.  Fill in the blanks so that the text is guaranteed to render as follows:
// white text.red background.
// #id overrides the class since it is more specific
//     .class overrides the tag since it is more specific

//         < h1 id = "qwe" class="wer" > I'm white on red</h1>


// 18. Fill in the blanks above so that the console prints 321 and then 456

// // mine
// const qwe = __3__ ?? 
// const asd = 456
// const __zxc__ = [321, qwe, 432, asd, 321]

// const [__ewq__,  , , __rew__] = zxc   // , , operator basically skip one index of array so in this case 2.
// console.log(ewq)  321
// console.log(rew) 456

// // answer just change qwe and grab first from array for ewq
// const qwe = __456__
// const asd = 456
// const __4__ = [321, qwe, 432, asd, 321]
// const [_ewq__, __rew__] = zxc
// console.log(ewq)
// console.log(rew)


// 19.  Fill in the blanks above so that the browser renders 9.

// // prop name must be matching 
// Qwe.js

// const Qwe = ({__asd__, zxc}) => <h1>{asd * zxc}</h1>
// export default Qwe

// // this will not work since the prop name is not matching in App.js and Qwe
// App.js

// import Qwe from "./Qwe"
// const App = () => <Qwe __zxc__="9" asd="__1__"/>


// const Qwe = ({asd, zxc}) => <h1>{asd * zxc}</h1>
// export default Qwe



// App.js

// import Qwe from "./Qwe"
// const App = () => <Qwe abc="9" ggg="__1__"/>


// 20.  Fill in the blanks so that q contains the following values [ 3, 4, 5]

// const q = [1, 2, 3, 4, 5]
// const w = __q__.__filter__(a => __a__ > 2)



// 21.  Fill in the blanks below so that clicking the BUTTON, the resulting output in the console is [123, 234, 456, 567]


// import React, { useState } from "react";
// function Delete() {
//  let qwe = [123, 234, 345, 456, 567];
 
//  const wer = (tyu) => {
//     qwe = tyu;
//  };

//  const __ert__ = (rty) => {
//     const __tyu__ = __qwe__.__filter__((yui) => __yui__ != __rty__);
//     wer(tyu);
//     console.log(qwe);
//  };

//     return (
//     <div>
//     <button __onClick__={() => ert(__345__)}>BUTTON</button>
//     </div>
//     );

// }
// export default Delete;
// //The arrow function yui => yui != 345 is the callback function for the filter()
// // method. For each element yui in the array qwe, the function checks 
// //if yui is not equal to 345. If yui is not equal to 345, it returns true,
// // meaning the element will be included in the new array. If yui is equal to 345,
// // it returns false, meaning the element will be excluded.

// qwe = [123,234,345,456,567];
// const remove = qwe.filter(yui => yui == 345);
// // with this it only only include 345 in the new array. 
