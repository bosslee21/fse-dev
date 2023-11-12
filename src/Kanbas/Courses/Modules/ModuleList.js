
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";

import { useSelector, useDispatch } from "react-redux";
import {
  addLesson,
  deleteLesson,
  updateModule,
  setLesson,
} from "./modulesReducer";
import * as client from "./client";

//show
function ModuleList() {

  //new  2 hour : 
  // const [modules, setModules] = useState([]);
  
  

  const { courseId } = useParams();
  const [modules,setModules] = useState([]);  //array
  const [module, setModule] = useState({}); //object
  const [lessons, setLessons] = useState ([]); // array of lessons
 
  // console.log(module)
  // console.log(lessons)
  
  
  const [lesson,setLesson] = useState({
    name: "New Lesson", description: "New Description",
    _id: new Date().getTime(),
  });

  const fetchModules = async () => {
    const serverModules = await client.fetchModules(); // use Param Id to fetch. 
    setModules(serverModules);
   
  }
  
  // Setting module state to the modules array from the Client server database.
  const fetchModule = async () => {
    const serverModule = await client.fetchModule(courseId); // use Param Id to fetch. 
    setModule(serverModule);
    
  }
  const fetchLessons = async () => {
    const serverLessons = await client.findLessondForCourse(courseId); // use Param Id to fetch.
    setLessons(serverLessons);
  }
 // only Render once when page loads to prevent infinite loop.
  useEffect(() => {
    fetchModules();
    fetchModule();
    fetchLessons();
}, [module]); //  This is the dependency array. It's a list of values (usually props or state) that the effect depends on. The effect will only re-run if one of these values changes.

  

  const addLesson = async (courseId, lesson) => {

    const newLesson = await client.addLesson(courseId, lesson);
    
    setModule({
      ...module, lessons: newLesson
    })
    
  }
// need work
  const deleteLesson = async (courseId, lesson) => {
   
    const newLesson = await client.deleteLesson(courseId, lesson);
    
    const findModule = modules.find((m) => m.course === courseId);

    const newLessons = findModule.lessons.filter((les) => les._id !== lesson._id);
  
    
    setModule({...module, lessons: newLessons } )
  }

  const updateModule = async (courseId, Llesson) => {
    try{
      const updatedLesson = await client.updateLesson(courseId, Llesson);

      setModule(modules.lessons.map((les) => les._id === Llesson._id ? updatedLesson : les));
      setLesson({...lesson})

    }
    catch(error) {
      console.log(error)
    }
  }


 

  return (
   



    <ul className="list-group wd-home-list-group">

      <li className="list-group-item">
        <button className="btn btn-success" onClick={() => addLesson( courseId, lesson )} style={{ marginBottom: 4, marginRight: 5 }}>Add</button>

        <button className="btn btn-warning" onClick={() => updateModule( courseId, lesson )} style={{ marginBottom: 4 }} > Update</button>



        <input value={lesson.name} className="form-control" style={{ marginBottom: 4 }}
          onChange={(e) => setLesson({

            ...lesson, name: e.target.value
          })}
        />
        <textarea value={lesson.description} className="form-control" rows={3}
          onChange={(e) => setLesson({


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
                              onClick={() => (setLesson({ ...lesson }))}>
                              Edit
                            </button>

                            <button className="btn btn-danger float-middle" style={{ marginLeft: 4 }}
                              onClick={() => (deleteLesson(courseId,lesson))}>
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