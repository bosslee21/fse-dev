import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import "./index.css";
import imgRS101 from './Images/RS101.jpg';
import imgRS102 from './Images/RS102.jpg';
import imgRS103 from './Images/RS103.jpg';
import imgRS104 from './Images/RS104.jpg';
import imgRS105 from './Images/RS105.jpg';
import imgRS106 from './Images/RS106.jpg';



// Function to generate image URLs based on the course name
// function getImageUrl(courseId) {
//     return `./Dashboards/images/${courseId}.jpg`;
// }

function getImageUrl(courseId) {
    switch (courseId) {
        case 'RS101': return imgRS101;
        case 'RS102': return imgRS102;
        case 'RS103': return imgRS103;
        case 'RS104': return imgRS104;
        case 'RS105': return imgRS105;
        case 'RS106': return imgRS106;
        default: return ''; // default case to handle unexpected courseId
    }
}


function Dashboard() {
    // const courses = db.courses;
    const [courses, setCourses] = useState(db.courses);

    const [course, setCourse] = useState({
        name: "New Course", number: "New Number",
        startDate: "2023-09-10", endDate: "2023-12-15",
    });

    const addNewCourse = () => {
        setCourses([...courses,
        {
            ...course,
            _id: new Date().getTime()
        }]);
    };
    const deleteCourse = (courseId) => {
        setCourses(courses.filter((course) => course._id !== courseId));
    };

    const updateCourse = () => {
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };







    return (
        <div className="col-10 col-xl-11 " style={{ position: "relative" }} >
            <div className="row" >
                <div className="col">
                    <h1>Dashboard</h1>
                    <hr />
                    <h3>Published Courses ({courses.length})</h3>

                    <div>
                        <button className="btn btn-primary" style={{ marginRight: 5 }} onClick={addNewCourse} >
                            Add
                        </button>
                        <button onClick={updateCourse} className="btn btn-secondary" >
                            Update
                        </button>




                        <h5>Course</h5>
                        <input value={course.name} className="form-control" onChange={(e) => setCourse({ ...course, name: e.target.value })} />

                        <input value={course.number} className="form-control" onChange={(e) => setCourse({ ...course, number: e.target.value })} />

                        <input value={course.startDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />

                        <input value={course.endDate} className="form-control" type="date" onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />

                    </div>


                    <hr />
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-2 g-4 wd-dashboard-grid">
                {courses.map((course) => (
                    <div className="col" key={course._id}>
                        <div className="card h-100">
                            <img src={getImageUrl(course._id)} className="wd-card-img-top" alt="Course" />
                            <div className="card-body">
                                <h5 className="card-title">
                                    <Link to={`/Kanbas/Courses/${course._id}`} className="link-primary">
                                        {course.name}
                                    </Link>
                                </h5>
                                <p className="card-text">
                                    {course.number}


                                    <br />
                                    {course.startDate} to {course.endDate}
                                </p>
                                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>
                                <button className="btn btn-danger" style={{ marginRight: 5 }}
                                    onClick={(event) => {
                                        event.preventDefault();
                                        deleteCourse(course._id);
                                    }}>
                                    Delete
                                </button>


                                <button
                                    className="btn btn-warning"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        setCourse(course);
                                    }}>
                                    Edit
                                </button>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
