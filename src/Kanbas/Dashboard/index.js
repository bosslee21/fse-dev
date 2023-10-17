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
    const courses = db.courses;


    return (
        <div className="col-10 col-xl-11 " style={{ position: "relative" }} >
            <div className="row" >
                <div className="col">
                    <h1>Dashboard</h1>
                    <hr />
                    <h3>Published Courses ({courses.length})</h3>
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
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Dashboard;
