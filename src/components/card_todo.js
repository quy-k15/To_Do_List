import React from "react";
import "../styles/card_todo.css"
import img_delete from "../images/img_delete.png"

function Card_ToDo({ id, name, status, onChangeStatus, onDelete }) {
  const backgroundColor = getStatusBackgroundColor(status);
  return (
    <div className="card_todo" style={{ backgroundColor: backgroundColor }}>
      <h3>Task: {name}</h3>
    
      <div className="status_input_div">
        <p> Status:</p>
     
      <select className="select_status"value={status} onChange={(e) => onChangeStatus(id, e.target.value)}>
        <option value="Incomplete">Incomplete</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>

      </div>
      <div className="btn_delete_task">
        <img onClick={onDelete} src={img_delete} alt=""/>
      </div>
      
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
