import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
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
//show
function ModuleList() {

    const { courseId } = useParams();


    const modules = useSelector((state) => state.modulesReducer.modules);
    const lesson = useSelector((state) => state.modulesReducer.lesson);
    const dispatch = useDispatch();




    return (
        <ul className="list-group wd-home-list-group">

            <li className="list-group-item">
                <button className="btn btn-success" onClick={() => dispatch(addLesson({ courseId, lesson }))} style={{ marginBottom: 4, marginRight: 5 }}>Add</button>

                <button className="btn btn-warning" onClick={() => dispatch(updateModule({ courseId, lesson }))} style={{ marginBottom: 4 }} > Update</button>


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
                                                            onClick={() => dispatch(setLesson(lesson))}>
                                                            Edit
                                                        </button>

                                                        <button className="btn btn-danger float-middle" style={{ marginLeft: 4 }}
                                                            onClick={() => dispatch(deleteLesson(lesson))}>
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