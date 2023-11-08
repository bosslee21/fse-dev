import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./index.css";


function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-home-list-group">
      {
        modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">

              {
                // if there is lessons in the module, then render the lessons
                module.lessons && (
                  <ul className="list-group">

                    {
                      module.lessons.map((lesson, index) => (

                        <li key={index} className="list-group-item">
                          <li key={index} className="list-group-item list-group-item-secondary" style={{ borderRadius: 0 }}><h6>Week {index} <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>
                          </li>
                          <li key={index} className="list-group-item "><h6> LEARNING OBJECTIVE  <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>
                          </li>

                          <li key={index} className="list-group-item"><h6> {lesson.name} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />  </h6>
                          </li>
                          <li key={index} className="list-group-item "><h6> {lesson.description} <BsThreeDotsVertical className="float-end" /> <AiFillCheckCircle className="float-end" style={{ color: 'green' }} />
                          </h6>
                          </li>


                        </li>
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