import React, { useEffect,useState } from "react";
import { Link, useParams } from "react-router-dom";

import { AiOutlinePlus } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import "./index.css";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment, setAssignment
} from "./assignmentsReducer";
// finsiehd extra credit for fetch and delete.
import * as client from "./client";

function Assignments() {
  const { courseId } = useParams();

  const[assignments,setAssignments] = useState([]); //array
  // const[assignment,setAssignment] = useState({
  //   title: "New Assignment", description: "New Description",
  //   _id: new Date().getTime().toString(),
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

const fetchAssignment = async () => {
  const serverAssignments = await client.fetchAssignment(courseId); // use Param Id to fetch. 
  setAssignments(serverAssignments);
};

const deleteAssignment = async (aid) => {
  console.log(aid);
  
  try {
    await client.deleteAssignment(aid); // ignore the response.
    setAssignments(assignments.filter((assignment) => assignment._id !== aid));
  }
  catch (error) {
    console.log(error);
  }
}


useEffect(() => {
  fetchAssignment();
}, []);


  const dispatch = useDispatch();

  const courseAssignments = assignments.filter((as) => as.course === courseId);
 


  return (

    <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>
      <div className="row">

        <div className="col d-flex   ">
          <input className="form-control w-25" type="text" placeholder="Search for Assignement" aria-label="default input example" style={{ marginRight: 100 }} />

          <div className="justify-content-md-end">
            <button className="btn btn-secondary opacity-10" style={{ marginBottom: '2px', marginRight: 1 }}>
              <AiOutlinePlus style={{ color: 'white' }} /> Group
            </button>
            <button className="btn btn-danger opacity-20" style={{ marginBottom: '2px', marginRight: 1 }} onClick={{}}>
              <AiOutlinePlus className="wd-incon" /> Assignment
            </button>

            <button className="btn btn-secondary opacity-10" style={{ marginBottom: '2px' }}> <BsThreeDotsVertical /> </button>

          </div>
        </div>
        <hr style={{ marginTop: 5 }} />

        <div>
          <div className="list-group wd-assi-list-group">
            <li className="list-group-item list-group-item-secondary " style={{ borderRadius: 0 }}> <b style={{ marginRight: 450 }}> Assignements</b>

              <button type="button" className="btn btn-light" style={{ borderRadius: 40 }}> 40% of total</button>
              <AiOutlinePlusSquare /> </li>

            {courseAssignments.map((assignment, index) => (
              <>
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  className="list-group-item">
                  <h6><BsPencilSquare style={{ color: 'green' }} /> <b>  A{index + 1} {assignment.title} </b>
                  </h6>
                  <p>Week {index + 1} - Starting on {assignment.startDate}  <br></br> Due on {assignment.dueDate} </p>

                </Link>
                <div className="d-flex flex-row">
                  <div>
                    <button className="btn btn-danger float-middle" style={{ marginLeft: 6 }}
                      onClick={(event) => {
                        event.preventDefault();
                        deleteAssignment(assignment._id)}
                      } >
                      Delete
                    </button>

                  </div>
                  <div>
                    <Link
                      key={assignment._id}
                      to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                    ><button className="btn btn-warning float-middle" style={{ marginLeft: 6 }}
                      onClick={() => dispatch(setAssignment({ ...assignment }))}>
                        Edit
                      </button>


                    </Link>


                  </div>


                </div>



              </>

            ))}
          </div>
        </div>








      </div>

    </div>







    // <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>


    // </div>
  );
}
export default Assignments;