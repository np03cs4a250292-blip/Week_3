import { useState } from "react";
import PageTitle from "./components/PageTitle/PageTitle";
import TaskContainer from "./components/TaskContainer/TaskContainer";
import Form from "./components/Form/Form";
import PageHeader from "./components/PageHeader/PageHeader";

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const containerTitle = "Tasks Due Today";
  const tasks = [
    { time: "9:00 AM", text: "Get eggs", isUrgent: true },
    { time: "9:05 AM", text: "Clean your room", isUrgent: false },
    { time: "10:00 AM", text: "Complete task 1", isUrgent: false },
    { time: "4:00 PM", text: "Go for a walk", isUrgent: true },
  ];

  return (
    <>
      <PageTitle />
      <PageHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 1 && <Form />}
      {currentPage === 0 && (
        <TaskContainer containerTitle={containerTitle} tasks={tasks} />
      )}
    </>
  );
}

export default App;
