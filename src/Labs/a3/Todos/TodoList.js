import TodoItem from "./TodoItem";
import todos from "./todos.json";
const TodoList = () => {
 return(
   <>
     <h3>Todo List</h3>
     <ul className="list-group">
       {
         todos['todos'].map(todo => {
           return(<TodoItem todo={todo} key={todo["title"]}/>);
         })
       }
     </ul>
   </>
 );
}
export default TodoList;