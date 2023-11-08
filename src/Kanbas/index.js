import { Route, Routes, Navigate } from "react-router";
import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import Account from "./Account";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Calendar from "./Calendar";

// import "./index.css";
function Kanbas() {
    return (
        
         <div className="row">
            <div className="col-2 col-xl-1" style={{paddingLeft: 10 , paddingRight:0, display:"flex"}}>
                <KanbasNavigation />
            </div>

            <Routes>
                <Route path="/" element={<Navigate to= "Dashboard"/>} />
                <Route path="Account" element={<Account/>} />
                <Route path="Dashboard" element={<Dashboard/>} />
                <Route path="Courses/:courseId/*" element={<Courses/>} />
                <Route path="Calendar" element={<Calendar/>} />

            </Routes>

        </div>



     
    )
}
export default Kanbas


{/* <div className="container-fluid"> 
            <div className="row">
                <div className="col-md-1">
                    <KanbasNavigation />
                    
                </div>
                <div className="col-md-11">
                    <div className="navbar"> 
                    <p>sidjsdijdsijsdijsdjis nav</p>
                    
                    </div>
                    <div className="main-content-class row"> 
                        <div className="col-2">
                            course nav

                        </div>

                        <div className="col-8">
                            main

                        </div>

                        <div className="col-2">
                            sidebar
                        </div>
                    
                    
                    </div>

                    <Routes>
                        <Route path="/" element={<Navigate to= "Dashboard"/>} />
                        <Route path="Account" element={<Account/>} />
                        <Route path="Dashboard" element={<Dashboard/>} />
                        <Route path="Courses/:courseId/*" element={<Courses/>} />
                        <Route path="Calendar" element={<Calendar/>} />

                    </Routes>
                </div>
            </div>
        
        
        </div> */}




// const Kanbas = () => {
//     return(
//         <div className="d-flex">
//         <div>
//           <h1>Kanbas Navigation</h1>
//         </div>
//         <div>
//           <h1>Account</h1>
//           <h1>Dashboard</h1>
//           <h1>Courses</h1>
//         </div>
//       </div>
//     );
//     )
// }
// export default Kanabs 