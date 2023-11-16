
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";
import * as client from "./client";

import { useSelector, useDispatch } from "react-redux";
import {
  addLesson,
  deleteLesson,
  updateModule,
  setLesson,
  setModules,
  setModule,
  setLessons,
} from "./modulesReducer";

function ModuleList() {

  
  

  const { courseId } = useParams();
  // const [modules,setModules] = useState([]);  //array
  // const [module, setModule] = useState({}); //object
  // const [lessons, setLessons] = useState ([]); // array of lessons
 
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const lessons = useSelector((state) => state.modulesReducer.lessons);
  const lesson = useSelector((state) => state.modulesReducer.lesson);
  const dispatch = useDispatch();
  
 

  // fetching modules from the module
  const fetchModules = async () => {
    const serverModules = await client.fetchModules(); // use Param Id to fetch. 
    dispatch(setModules(serverModules));
   
  }
  // fetching module from the course
  // Setting module state to the modules array from the Client server database.
  const fetchModule = async () => {
    const serverModule = await client.fetchModule(courseId); // use Param Id to fetch. 
    dispatch(setModule(serverModule));
    
  }
  const fetchLessons = async () => {
    const serverLessons = await client.findLessondForCourse(courseId); // use Param Id to fetch.
    dispatch(setLessons(serverLessons));
  }

  const handleAddLesson = async (courseId, lesson) => {

    const newLesson = await client.addLesson(courseId, lesson);
    
    dispatch(setModule({
      ...module, lessons: newLesson
    }))
    
  }
// need work
  const handleDeleteLesson = async (courseId, lesson) => {
   
    const newLesson = await client.deleteLesson(courseId, lesson);
    
    const findModule = modules.find((m) => m.course === courseId);

    const newLessons = findModule.lessons.filter((les) => les._id !== lesson._id);
  
    
    dispatch(setModule({...module, lessons: newLessons }) )
  }

  const handleUpdateModule = async (courseId, lesson) => {
    try{
      const updatedLesson = await client.updateLesson(courseId, lesson);
      fetchModules(); 
      dispatch(setModule(modules.lessons.map((les) => les._id === lesson._id ? updatedLesson : les)));
      // setLesson({...lesson})
     
      
    }
    catch(error) {
      console.log(error)
    }
  }





useEffect(() => {
  fetchModules();
}, [module]); // Empty dependency array means this runs once on mount


useEffect(() => {
  fetchModule();
}, []); // Dependency array with 'module'

// Fetching lessons - Assuming this also depends on the 'module' state
useEffect(() => {
  fetchLessons();
}, []); // Dependency array with 'module'

  


 

  return (
   



    <ul className="list-group wd-home-list-group">

      <li className="list-group-item">
        <button className="btn btn-success" onClick={() => dispatch(handleAddLesson( courseId, lesson ))} style={{ marginBottom: 4, marginRight: 5 }}>Add</button>

        <button className="btn btn-warning" onClick={() => dispatch(handleUpdateModule( courseId, lesson ))} style={{ marginBottom: 4 }} > Update</button>



        <input value={lesson.name} className="form-control" style={{ marginBottom: 4 }}
          onChange={(e) => dispatch(setLesson)({

            ...lesson, name: e.target.value
          })}
        />
        <textarea value={lesson.description} className="form-control" rows={3}
          onChange={(e) => dispatch(setLesson)({


            ...lesson, description: e.target.value
          })}
        />
      </li>

      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li className="list-group-item">

              {
                // if there is lessons in the module, then render the lessons
                module.lessons && (
                  <ul className="list-group">

                    {
                      module.lessons.map((lesson, index) => (

                        <div>
                          <li className="list-group-item list-group-item-secondary" style={{ borderRadius: 0 }}><h6>Week {index}
                            <button className="btn btn-success" style={{ marginLeft: 35 }}
                              onClick={() => dispatch((setLesson({ ...lesson })))}>
                              Edit
                            </button>

                            <button className="btn btn-danger float-middle" style={{ marginLeft: 4 }}
                              onClick={() =>dispatch (handleDeleteLesson(courseId,lesson))}>
                              Delete
                            </button>


                            <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>
                          </li>
                          <li className="list-group-item "><h6> LEARNING OBJECTIVE  <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>
                          </li>

                          <li className="list-group-item"><h6> {lesson.name} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />  </h6>
                          </li>
                          <li className="list-group-item "><h6> {lesson.description} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>

                          </li>

                        </div>

                      ))
                    }
                  </ul>
                )
              }
              {
                // if there is lessons in the module, then render the lessons
                module.readings && (
                  <ul className="list-group">
                    <li className="list-group-item list-group-item-secondary" style={{ borderRadius: 0 }}><b>Reading </b></li>

                    {
                      module.readings.map((reading, index) => (
                        <li key={index} className="list-group-item">
                          <h6> {reading.name} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />  </h6>

                        </li>
                      ))
                    }
                  </ul>
                )
              }

            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;