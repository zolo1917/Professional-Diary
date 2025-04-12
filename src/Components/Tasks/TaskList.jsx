import { useEffect, useState } from "react";

function TaskList({ projectIds, status }) {
  const [taskList, setTaskList] = useState([]);
  const [selectedTask, setSelectedTask] = useState({});
  const getTasksForProject = async () => {
    await getTasksForProject(projectIds).then(
      (objList) => {
        setTaskList(objList);
      },
      (error) => {
        console.log(error);
        setTaskList([]);
      },
    );
  };
  useEffect(() => {
    getTasksForProject(projectIds);
  }, [projectIds]);
  return <div>TaskList</div>;
}

export default TaskList;
