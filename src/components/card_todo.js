import React from "react";
import "../styles/card_todo.css"

function Card_ToDo({ id, name, status, onChangeStatus, onDelete }) {
  const backgroundColor = getStatusBackgroundColor(status);
  return (
    <div className="card_todo" style={{ backgroundColor: backgroundColor }}>
      <h3>{name}</h3>
      <p>Status:</p>
      <div className="status_input_div">
      <select value={status} onChange={(e) => onChangeStatus(id, e.target.value)}>
        <option value="Incomplete">Incomplete</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      </div>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
function getStatusBackgroundColor(status) {
  switch (status) {
    case "Incomplete":
      return "#f8d7da"; // Màu đỏ nhạt
    case "In Progress":
      return "#fff3cd"; // Màu vàng nhạt
    case "Completed":
      return "#B5E7E4"; // Màu xanh nhạt
    default:
      return "transparent";
  }
}


export default Card_ToDo;
