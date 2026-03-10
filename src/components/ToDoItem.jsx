import { useState } from "react";

function ToDoItem({ task, deleteTask, toggleComplete, editTask }) {
  const [editing, setEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  function saveEdit() {
    editTask(task.id, newText);
    setEditing(false);
  }

  return (
    <div className="task">
      {editing ? (
        <div className="editSection">
          <input
            className="editInput"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button className="saveBtn" onClick={saveEdit}>
            Save
          </button>
        </div>
      ) : (
        <>
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleComplete(task.id)}
          />

          {/* Task text */}
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              marginLeft: "8px",
            }}
          >
            {task.text}
          </span>

          <button onClick={() => setEditing(true)}>Edit</button>

          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </>
      )}
    </div>
  );
}

export default ToDoItem;
