import { cloneElement, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NewTask from "./components/NewTask";
import Tasks from "./components/Tasks";

const data = [
  {
    text: "Complete something",
    id: 1,
    checked: false,
  },
  {
    text: "Another thing",
    id: 2,
    checked: true,
  },
  {
    text: "and another",
    id: 3,
    checked: false,
  },
];
function App() {
  const [tasks, setTasks] = useState(data);

  const temp = [...tasks];
  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task

  const deleteTask = (id) => {
    setTasks(temp.filter((task) => task.id !== id));
    console.log(temp);
  };

  //Clear completed
  const clearCompleted = () => {
    setTasks(temp.filter((task) => task.checked !== true));
    console.log(temp);
  };

  const showCompleted = () => {
    setTasks(temp.filter((task) => task.checked == true));
    console.log(temp);
  };
  function toggleCheck(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, checked: !task.checked } : task
      )
    );
  }

  //show all tasks
  const showAll = () => {
    setTasks(data);
  };

  const remainingTasks = temp.filter((task) => task.checked == false);

  // const activeTasks = () => {
  //   setTasks(
  //   tasks.filter((task) => task.checked == true))}

  return (
    <div className="main-container">
      <div className="wrapper">
        <Header
          svg={
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
              <path
                fill="#FFF"
                fillRule="evenodd"
                d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
              />
            </svg>
          }
        />
        <NewTask task={tasks} onAdd={addTask} />
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onCheck={toggleCheck} onDelete={deleteTask} />
        ) : (
          <h1 className="emptyTask">Tasks you add will be viewed here!</h1>
        )}
        <Footer
          count={remainingTasks.length}
          onClear={clearCompleted}
          task={tasks}
          showAll={showAll}
          onActive={() => setTasks(remainingTasks)}
          onCompleted={showCompleted}
        />
      </div>
    </div>
  );
}

export default App;
