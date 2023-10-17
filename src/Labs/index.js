import Assignment3 from "./A3";
import A4 from "./A4";
import A5 from "./A5";
import Nav from "../Nav";
import StateManagement from "./StateManagement";
import { Routes, Route } from "react-router";
function Labs() {
    return (
        <div className="container">
            <Nav />
            <Routes>
                {/* we do not need to put labs infront of it. since we arlready in labs
                <Route path="/Labs/A3" element={<Assignment3 />} /> */}

                <Route path="/A3" element={<Assignment3 />} />
                <Route path="/A4" element={<A4 />} />
                <Route path="/A5" element={<A5 />} />
                <Route path="/StateManagement" element={<StateManagement />} />

            </Routes>

            {/* <Assignment3 />
            <A4 />
            <A5 /> */}
        </div>
    );
}
export default Labs;