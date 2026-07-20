import "./TaskContainer.css";

function TaskContainer() {
    const containerTitle = "Task Due Today";
  return (
    <>
      <h2>{containerTitle}</h2>
      <ul>
        <li>
          <span>9:00 AM</span>-<span>Get eggs in 5 mins</span>
        </li>
        <li>
          <span>9:05 AM</span>-<span>Forget to get eggs</span>
        </li>
        <li>
          <span>10:00 AM</span>-<span>Get scolded by mom</span>
        </li>
        <li>
          <span>10:05 AM</span>-<span>Argue with mom</span>
        </li>
        <li>
          <span>10:10 AM</span>-<span>Tend to your chappal bruise on face</span>
        </li>
      </ul>
    </>
  );
}

export default TaskContainer;
