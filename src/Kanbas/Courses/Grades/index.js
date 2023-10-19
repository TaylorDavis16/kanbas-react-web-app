import db from "../../Database";
import { useParams } from "react-router-dom";
import GradeButtons from "../Components/GradeButtons";
import GradeSearchForm from "../Components/GradeSearchForm";
import GradeTable from "../Components/GradeTable";
import './grades.css'
function Grades(props) {
    const { courseId } = useParams();
    const assignments = db.assignments.filter(
        (assignment) => assignment.course === courseId
    );
    const enrollments = db.enrollments.filter(
        (enrollment) => enrollment.course === courseId
    );
    return (
        <>
        <GradeButtons />
        <GradeSearchForm />
        <GradeTable assignments={assignments} enrollments={enrollments} />
        </>
    );
}
export default Grades;
