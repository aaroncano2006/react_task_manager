import Button from "./Button";

function Tasklist({ content, onDelete, onMark }) {
  return (
    <>
      {content.map((task) => (
        <tr key={task.taskId}>
          <td>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onMark(task.taskId)}
            />
          </td>

          <td className="p-3">
            <span
              className={task.completed ? "text-decoration-line-through" : ""}
            >
              {task.taskName}
            </span>

            {task.taskImportant && (
              <i className="fa-solid fa-triangle-exclamation text-danger ms-2"></i>
            )}
          </td>

          <td>{task.taskCategory}</td>
          <td>{task.taskDueDate}</td>
          <td>{task.taskPriority}</td>
          <td className="p-3">{task.taskDescription}</td>

          <td className="p-3">
            <Button
              bootstrap="btn btn-sm btn-danger"
              type="button"
              action={() => onDelete(task.taskId)}
            >
              <i className="fa-solid fa-trash text-white"></i>
            </Button>
          </td>
        </tr>
      ))}
    </>
  );
}

export default Tasklist;