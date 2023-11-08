import db from "../../Database";
import { useParams } from "react-router-dom";
import { BiImport } from "react-icons/bi";
import { BiExport } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";

function Grades() {
    const { courseId } = useParams();
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div className="col-9 col-lg-10 d-none d-sm-block" style={{ paddingLeft: 0, overflow: "hidden" }}>
            <div className="row">
                <div className="col d-flex  justify-content-md-end ">

                    <button className="btn btn-secondary opacity-60" style={{ marginBottom: '2px', marginRight: 2 }}>
                        <BiImport /> Import
                    </button>
                    <button className="btn btn-secondary opacity-20" style={{ marginBottom: '2px', marginRight: 2 }}>
                        <BiExport />Export
                    </button>

                    <button className="btn btn-secondary opacity-10" style={{ marginBottom: '2px' }}> <AiFillSetting /> </button>

                </div>

            </div>
            <div className="row">
                <div className="col-sm">
                    <label htmlFor="studentSearchInput" className="form-label">
                        Search Student
                        <AiOutlineSearch />
                    </label>
                    <input
                        type="text"
                        className="form-control wd-50"
                        id="studentSearchInput"
                        placeholder="Search Student"
                    />
                </div>

                <div className="col-sm">
                    <label htmlFor="assignmentNameInput" className="form-label">
                        Assignment Names
                        <AiOutlineSearch />
                    </label>
                    <input
                        type="text"
                        className="form-control wd-50"
                        id="assignmentNameInput"
                        placeholder="Search Assignment"
                    />
                </div>
            </div>
            <hr />

            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                            const user = db.users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user.firstName} {user.lastName}</td>
                                    {assignments.map((assignment) => {
                                        const grade = db.grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div></div>);
}
export default Grades;

