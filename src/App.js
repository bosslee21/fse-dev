// import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import Labs from "./Labs/index.js";
import Kanbas from "./Kanbas/index.js";
import HelloWorld from './Labs/A3/HelloWorld';
import { HashRouter, Link, Route, Routes, Navigate } from "react-router-dom";

// import {iconName} from "react-icons/fa6";


function App() {
  // each component should have rows
  return (
    // only 1 hashRouter at the top of application. 
    <HashRouter>
      <div className="container-fluid p-0">


        <Routes>
          {/* if you see 'path' in the url then navigate to that path.
           {element} is the component to render */}

          <Route path="/" element={<Navigate to="Kanbas" />} />
          <Route path="/Hello" element={<HelloWorld />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />

        </Routes>

      </div>

    </HashRouter>
  );
}

export default App;
