import "./App.css";
import Task from "./components/Task";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, markDone, undoTask, deleteAllMarked } from "./store/todoSlice";
import { useEffect } from "react";
import { TaskModel } from "./store/task";

function App() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state) as TaskModel[];

  useEffect(() => {
    console.log(todos);
  }, []);

  const addTask = () => {
    const taskName = document.getElementById("input-task") as HTMLInputElement;
    console.log(taskName?.value);
    dispatch(addTodo(taskName?.value));
    taskName.value = "";
  };

  const handleClickDone = (taskId: string) => {
    console.log("done: ")
    dispatch(markDone(taskId));
  }
  const handleClickUndo = (taskId: string) => {
    console.log("undo")
    dispatch(undoTask(taskId))  
  }

  const handleClickDelete = (taskId: string) => {
    dispatch(deleteTodo(taskId));
    console.log("after delete", todos)
    
  } 

  const deleteMarked = () => {
    dispatch(deleteAllMarked())
  }
  return (
    <>
      <h1>TODO APP</h1>
      <p className="delete-marked" onClick={deleteMarked}>Delete all completed tasks</p>
      <div className="new-task">
        <input
          type="text"
          name="input-task"
          id="input-task"
          className="input-task"
          placeholder="Create Task"
        />
        <button className="add-task-btn" onClick={addTask}>
          Add
        </button>
      </div>
      <div className="tasks">
        {todos.map((todo) => {
          return (
            <Task
              key={todo.id}
              taskId={todo.id}
              name={todo.name}
              isDone={todo.isDone}
              onClickDone={handleClickDone}
              onClickUndo={handleClickUndo}
              onClickDelete={handleClickDelete}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
