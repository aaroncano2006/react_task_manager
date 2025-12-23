import Button from "./Button";

function Tasklist({ content }) {
  const tasks = [];

  if (content.length > 0) {
    for (let i = 0; i < content.length; i++) {
      const key = content.key(i);
      const value = content.getItem(key);

      try {
        tasks.push(JSON.parse(value));
      } catch (e) {
        console.log("No s'ha detectat un format de tasca vàlid: " + e);
      }
    }
  }

  console.log(tasks);

  return (
    <>
      {tasks.map((task) => (
        <tr key={task.taskId}>
          <td>
            <input type="checkbox"></input>
          </td>
          <td>
            <span>{task.taskName}</span>
            {task.taskImportant && (
              <i className="fa-solid fa-triangle-exclamation text-danger ms-2"></i>
            )}
          </td>
          <td>{task.taskCategory}</td>
          <td>{task.taskDueDate}</td>
          <td>{task.taskPriority}</td>
          <td className="p-3">{task.taskDescription}</td>
          <td className="p-3">
            <Button bootstrap="btn btn-sm bg-danger" type="button">
                <i className="fa-solid fa-trash text-white"></i>
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tasklist;
