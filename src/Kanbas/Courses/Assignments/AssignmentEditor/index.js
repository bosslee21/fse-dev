import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsCalendar3 } from "react-icons/bs";

import {
  setAssignment
} from "../assignmentsReducer";
import { useDispatch, useSelector } from "react-redux";


function AssignmentEditor() {
  const { assignmentId } = useParams();

  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const assignmentSelector = useSelector((state) => state.assignmentsReducer.assignment);

  const dispatch = useDispatch();
  const { courseId } = useParams();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>

      <div className="d-flex flex-row-reverse bg-white text-right">
        <button type="button" className="btn btn-secondary btn-sm opacity-75">
          <BsThreeDotsVertical />
        </button>
        <b style={{ color: 'green', marginRight: '8px' }}>
          <AiFillCheckCircle /> Published
        </b>
      </div>
      <hr />

      <h6>Assignment Name</h6>



      <input value={assignment.title} className="form-control"
        onChange={(e) => dispatch(setAssignment({ ...assignmentSelector, title: e.target.value }))} />


      <div className="mb-3">

        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" defaultValue={assignment.title + " " + assignmentId} />

        <div className="mb-3 row " style={{ marginTop: 5 }}>
          <label htmlFor="point" className="col-sm-2 col-form-label">Points</label>
          <div className="col-sm-5">
            <input type="number" className="form-control" id="point" defaultValue="100" />
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="Assigment-group" className="col-sm-2 col-form-label">Assigment Group</label>
          <div className="col-sm-5">
            <select className="form-select" id="Assigment-group">
              <option selected>Assignement Group</option>
              <option value="1">one</option>
              <option value="2">two</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="Display-grade" className="col-sm-2 col-form-label">Display Grade as</label>
          <div className="col-sm-5">
            <select className="form-select" id="Display-grade">
              <option selected>Percentage</option>
              <option value="1">one</option>
              <option value="2">two</option>
            </select>
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="r6" className="col-sm-2 col-form-label"></label>
          <div className="col-sm-8">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="r6" />
              <label className="form-check-label" htmlFor="r6" style={{ fontSize: 'small' }}>
                Do not count the assignment toward the final grade:
              </label>
            </div>
          </div>
        </div>


        <div className="mb-3 row">
          <label htmlFor="Submission-Type" className="col-sm-2 col-form-label">Submission Type</label>
          <div className="col-sm-8 rounded" style={{ border: '1px solid gray' }}>
            <select className="form-select" style={{ width: '200px' }} id="Submission-Type">
              <option selected>Online</option>
              <option value="1">one</option>
              <option value="2">two</option>
            </select>
            <label>Online Entry Option</label>
            <div className="form-check" style={{ marginTop: '10px' }}>
              {['Text Entry', 'Website URL', 'Media Recording', 'File Upload'].map((option, index) => (
                <div key={index}>
                  <input className="form-check-input" type="checkbox" id={`defaultCheck${index}`} checked={index < 2} />
                  <label className="form-check-label" htmlFor={`defaultCheck${index}`}>
                    {option}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>


        <div className="mb-3 row">
          <label htmlFor="Assign" className="col-sm-2 col-form-label">Assign</label>
          <div className="col-sm-8 rounded" style={{ border: '1px solid gray' }}>
            <select className="form-select" style={{ width: '200px' }} id="Assign">
              <option selected>Everyone</option>
              <option value="1">one</option>
              <option value="2">two</option>
            </select>
            {['Due', 'Available From', 'Until'].map((label, index) => (
              <div key={index}>
                <label>{label}</label>
                <div className="col-8">
                  <div className="input-group date" id="datepicker">
                    <input type="text" className="form-control" id={`date${index}`} defaultValue="Sep 6,2023" />
                    <span className="input-group-append">
                      <span className="input-group-text bg-light d-block">
                        <BsCalendar3 />

                      </span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>





      </div>


      <hr />
      <div className="d-flex justify-content-center">
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger">
          Cancel
        </Link>
        <button onClick={handleSave} className="btn btn-success me-2">
          Save
        </button>

      </div>

    </div>
  );
}


export default AssignmentEditor;


