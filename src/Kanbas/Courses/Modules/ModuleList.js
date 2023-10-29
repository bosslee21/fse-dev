import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";

//show
function ModuleList() {
  const { courseId } = useParams();

  const [modules, setModules] = useState(db.modules);


  const [lesson, setLesson] = useState({
    // name: "New Module",
    // description: "New Description",
    // course: courseId,
    name: "New Lesson",
    description: "New Description",

  });

  const addLesson = (lesson) => {

    let findModule = modules.find((m) => m.course === courseId); // find the module
    // console.log(findModule);
    const newLessons = [...findModule.lessons, lesson]; // new array of lesson from input append it to newLesson array
    // console.log(newLessons)
    findModule = { ...findModule, lessons: newLessons } // override the lesson in the result.(module)
    // console.log(findModule)
    const filterModule = modules.filter((mod) => mod._id !== courseId); // remove module that we want override. from all the modules. 
    // === only   allow that 1 particular to be ramained. 
    console.log(filterModule)
    setModules([

      ...filterModule, findModule  // append the result(which is new modules with new lesson) to all the modules.

    ]);

  };

  const deleteLesson = (lessonId) => {
    console.log("Calling Delete Lesson");
    // let findModule = modules.find((module) => module.course === courseId); // finding the module that we want to remove lesson
    // console.log(findModule)
    const removedLessonArr = findModule.lessons.filter((lesson) => lesson._id !== lessonId); // filter out the lesson from that module with lessonId
    console.log(removedLessonArr)
    findModule = { ...findModule, lessons: removedLessonArr } // override the lesson in the findModule
    const findModule = modules.find((module) => module._id !== lessonId);
    console.log(findModule)

    setModules([...modules, findModule]); // override the module in the modules

  };

  const updateModule = () => {
    setModules(
      modules.map((m) => {
        if (m.course === courseId) {
          let findModule = modules.find((module) => module.course === courseId); // finding the module that we want to remove lesson

          return findModule;
        } else {
          return m;
        }
      })
    );
  }



  return (
    <ul className="list-group wd-home-list-group">

      <li className="list-group-item">
        <button className="btn btn-success" onClick={() => addLesson(lesson)} style={{ marginBottom: 4, marginRight: 5 }}>Add</button>
        <button className="btn btn-warning" onClick={updateModule} style={{ marginBottom: 4 }} > Update</button>


        <input value={module.name} className="form-control" style={{ marginBottom: 4 }}
          onChange={(e) => setLesson({
            ...lesson, name: e.target.value
          })}
        />
        <textarea value={module.description} className="form-control" rows={3}
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
                              onClick={(event) => { setLesson(lesson); }}>
                              Edit
                            </button>

                            <button className="btn btn-danger float-middle" style={{ marginLeft: 4 }}
                              onClick={() => deleteLesson(module)}>
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
              {/* {
                // if there is lessons in the module, then render the lessons
                module.readings && (
                  <ul className="list-group">
                    <li class="list-group-item list-group-item-secondary" style={{ borderRadius: 0 }}><b>Reading </b></li>

                    {
                      module.readings.map((reading, index) => (
                        <li key={index} className="list-group-item">
                          <h6> {reading.name} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />  </h6>

                        </li>
                      ))
                    }
                  </ul>
                )
              } */}

            </li>
          ))
      }
    </ul>
  );
}
export default ModuleList;