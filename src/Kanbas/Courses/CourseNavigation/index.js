import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css"


function CourseNavigation() {
    const links = ["Home", "Modules", "Assignments", "Grades","Quizzes","Discussions","People","Pages","Files","Syllabus","Outcomes","Settings"];
    const { courseId } = useParams();
    const { pathname } = useLocation();
    return (
        <div className="list-group wd-course-navigation " style={{ width: 100, marginTop:0, marginLeft:10}}>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/Courses/${courseId}/${link}`}
                    className={`list-group-item ${pathname.includes(link) && "active"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}


export default CourseNavigation;