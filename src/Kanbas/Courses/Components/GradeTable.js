import db from "../../Database";
function GradeTable(props) {
    const { assignments, enrollments } = props;
    return (
        <div className="table-responsive">
            <table className="table table-striped table-hover table-bordered align-middle">
                <thead>
                    <tr>
                        <th scope="col" className="fw-medium text-center align-middle">
                            Student Name
                        </th>
                        {assignments.map(a => (
                            <th key={a._id} scope="col" className="fw-medium text-center align-middle">
                                {a.title}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {enrollments.map(e => {
                        const user = db.users.find(user => user._id === e.user);
                        return (
                            <tr key={e._id}>
                                <td>
                                        <a href="./" className="link-no-decoration link-red fw-normal">{user.firstName} {user.lastName}</a>
                            </td>
                            {assignments.map((a) => {
                                const grade = db.grades.find(
                                  (g) => g.student === e.user && g.assignment === a._id);
                                  return (<td className="fw-medium text-center align-middle" key={`${e._id}+${a._id}`}>{grade?.grade || ""}</td>);})}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default GradeTable;
