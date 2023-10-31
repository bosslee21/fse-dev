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
        _id: new Date().getTime(),
        name: "New Lesson",
        description: "New Description",

    });

    const addLesson = (lesson) => {

        let findModule = modules.find((m) => m.course === courseId); // find the module
        const newLessons = [...findModule.lessons, lesson]; // new array of lesson from input append it to newLesson array
        findModule = { ...findModule, lessons: newLessons } // override the lesson in the findModule.(module)
        const filterModule = modules.filter((mod) => mod.course !== courseId); // remove module that we want override. from all the modules. 
        // === only   allow that 1 particular to be ramained. 
        setModules([

            ...filterModule, findModule  // append the result(which is new modules with new lesson) to all the modules.

        ]);

    };

    const deleteLesson = (lesson) => {
        console.log("Calling Delete Lesson");
        let findModule = modules.find((module) => module.course === courseId); // finding the module that we want to remove lesson
        console.log(findModule)

        const removeLessonId = lesson._id; // getting lessonId from passed in lesson
        const removedLessonArr = findModule.lessons.filter((lesson) => lesson._id !== removeLessonId); // filter out the lesson from that module with lessonId 
        // console.log(removedLessonArr)

        findModule = { ...findModule, lessons: removedLessonArr } // override the lesson in the findModule
        console.log(findModule)

        const filterModule = modules.filter((mod) => mod.course !== courseId); // remove module that we want override. from all the modules.
        setModules([...filterModule, findModule]); // override the module in the modules

    };





    // const updateModule = (lesson) => { // new object of lesson that was input 
    //   setModules(
    //     modules.map((m) => {
    //       if (m.course === courseId) {
    //         // console.log(m)

    //         let foundLesson = m.lessons.find((les) => les._id === lesson._id)

    //         let index = m.lessons.findIndex((les) => les._id === lesson._id) // 0

    //         foundLesson = { ...lesson }
    //         m.lessons[index] = foundLesson



    //       }
    //     })
    //   );
    // }

    const updateModule = (lesson) => {
        let updatedModules = [...modules]

        updatedModules.map((m) => {
            if (m.course === courseId) {
                console.log("lessons are \n")
                console.log(m.lessons)

                let index = m.lessons.findIndex((l) => l._id === lesson._id)
                m.lessons[index] = { ...lesson }

            }
        })
        setModules(updatedModules)
    }


    return (
        <ul className="list-group wd-home-list-group">

            <li className="list-group-item">
                <button className="btn btn-success" onClick={() => addLesson(lesson)} style={{ marginBottom: 4, marginRight: 5 }}>Add</button>

                <button className="btn btn-warning" onClick={() => updateModule(lesson)} style={{ marginBottom: 4 }} > Update</button>


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
                                                            onClick={(event) => { setLesson(lesson); }}>
                                                            Edit
                                                        </button>

                                                        <button className="btn btn-danger float-middle" style={{ marginLeft: 4 }}
                                                            onClick={() => deleteLesson(lesson)}>
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
                            }

                        </li>
                    ))
            }
        </ul>
    );
}
export default ModuleList;