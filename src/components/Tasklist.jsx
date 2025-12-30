import Button from "./Button";

function Tasklist({ content, onDelete }) {
  return (
    <>
      {content.map((task) => (
        <tr key={task.taskId} data-set={task.taskId}>
          <td>
            {task.completed 
              ? <input type="checkbox" checked></input>
              : <input type="checkbox"></input>
            }
          </td>
          <td className="p-3">
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
            <Button bootstrap="btn btn-sm btn-danger" type="button" target={task.taskId} action={onDelete}>
                <i className="fa-solid fa-trash text-white"></i>
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tasklist;