import "./TaskContainer.css";

function TaskContainer({containerTitle, tasks}) {
  if (tasks.length === 0) {
    return <h2>No Pending Tasks</h2>;
  } else {
    return (
      <>
        <h2>{containerTitle}</h2>
        <ul>
          {tasks.map((task, index) => (
            <li
              className={task.isUrgent ? "task-item urgent-task" : "task-item"}
              key={index}
            >
              <span>{task.time}</span>-<span>{task.text}</span>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default TaskContainer;
