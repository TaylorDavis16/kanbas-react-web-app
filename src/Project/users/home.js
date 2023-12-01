import { useSelector } from "react-redux/es/hooks/useSelector";
import AccordionItem from "../tools/accordionItem";
const qAndA = [
    {
        question: "What is the purpose of this project?",
        answer: "This project is for CS5610",
    },
    {
        question: "How many roles are there in this project?",
        answer: "There are four roles in this project: ADMIN, FACULTY, STUDENT, and USER",
    },
    {
        question: "Who can see and manage all the users?",
        answer: "Only ADMIN can see and manage all the users",
    },
    {
        question: "How to search users?",
        answer: "You can search users by username, firstname, lastname, email, and dob. You are only allowed to search users with the same role as you except you are an ADMIN. For example, if you are a student, you can only search students. If you are an ADMIN, you can search all users.",
    },
    {
        question: "Can I sign up as an ADMIN?",
        answer: "No, you can sign up as a USER, FACULTY, or STUDENT. Only ADMIN can create an ADMIN account. Or you can have an ADMIN assign you an ADMIN role.",
    },
    {
        question: "Can I modify my role after I sign up?",
        answer: "No, you cannot modify your role after you sign up. Only ADMIN can modify your role.",
    },
    ];
export default function Home() {
  const currentUser = useSelector((state) => state.projectReducer.currentUser);
  const loggedIn = currentUser !== null;
  return (
    <div className={`alert alert-${loggedIn ? "success" : "info"}`}>
      <h1>
        {loggedIn
          ? `Welcome, ${currentUser.firstName} ${currentUser.lastName}!`
          : "Hi, this is the project of CS 5610"}
      </h1>
      <div className="accordion" id="accordionPanelsStayOpen">
        {qAndA.map((qa, i) => (
        <AccordionItem id={`panelsStayOpen-${i}`} title={qa.question} key={i}>{qa.answer}</AccordionItem>
        ))}
      </div>
    </div>
  );
}
