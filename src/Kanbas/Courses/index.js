import React,{useState,useEffect} from "react";
import { useParams, Routes,Route, Navigate, useLocation } from "react-router";
import db from "../Database";
import JsonPre from "../../Labs/A3/JsonPre";
import CourseNavigation from "./CourseNavigation";
import {RiArrowDropRightLine} from "react-icons/ri";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import {RxHamburgerMenu} from "react-icons/rx";
import * as client from "./client";


function Courses() {
    const {courseId} = useParams();
    const { pathname } = useLocation(); 
    // const {kanbas,courses,id, screenpath} = pathname.split("/");
    // splitting the pathname to get the Course navigation path
    const path = pathname.split("/")[4];
    const [course, setCourse] = useState({});
    // const course = db.courses.find((course) => course._id === courseId);
    const fetchCourse = async () => {
        const course = await client.fetchCourse(courseId);
        setCourse(course);
    }

    useEffect(() => {
        fetchCourse();
    },[]);
    // <div className="overflow-y-scroll position-fixed bottom-0 end-0"></div>
    return (
      
       <div className="col-10 col-xl-11 " style={{paddingLeft:15}}>
            <div className="row">
                <div className="col">
                <h3> <RxHamburgerMenu style={{marginRight:4, color: "red"}}/> <b style={{color:'red'}}> {course.name} </b> <RiArrowDropRightLine/> {path} </h3>
                <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-3 col-lg-2" style={{paddingLeft:0}}>
                    <CourseNavigation />
                </div>
                 
            <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
                    <Route path="Grades" element={<Grades/>} />
            </Routes>


            </div>
           
           

       </div>
 
        
  
 
    

  
       
  
    );
}
export default Courses


// return (
//     <div className="container">
//         <div className="row" style={{ marginLeft: 2.5}}>
//             <div className="col">
//             <h3> {course.name} <RiArrowDropRightLine/>  {course.startDate}</h3>
//             <hr />
//             </div>
//         </div>
//         <CourseNavigation />
  
//     </div>

//     // <div>
//     //     <h1>Courses {course.name}</h1>
//     //     <CourseNavigation />
//     //     {/* <JsonPre json={course} /> */}
        
//     // </div>
// );