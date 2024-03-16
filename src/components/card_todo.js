import React, { useState , useRef } from "react";
import "../styles/card_todo.css"
import img_delete from "../images/img_delete.png"
import img_update from "../images/img_update.png"

function Card_ToDo({ id, name, status, onChangeStatus, onDelete, onUpdate }) {
  const backgroundColor = getStatusBackgroundColor(status);
  const [isUpdateDialogOpen, setIsUpdateDialogOpen] = useState(false);
  const [newName, setNewName] = useState(name);

 
  const openUpdateDialog = () => {
    setIsUpdateDialogOpen(true);
  };

  const closeUpdateDialog = () => {
    setIsUpdateDialogOpen(false);
  };

  const handleNameUpdate = () => {
    onUpdate(id, newName); 
    closeUpdateDialog();
  };
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
      <div className="btn_task">
        <div className="btn_delete_task">
          <img onClick={onDelete} src={img_delete} alt=""/>
        </div>
        <div className="btn_update_task">
          <img onClick={openUpdateDialog} src={img_update} alt=""/>
        </div>
        {isUpdateDialogOpen && (
        <div className="dialog">
          <h3>Update Task</h3>
          <div className="dialog_content">
            <input
              type="text"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />
          </div>
          <div className="dialog_update_btn">
            <button className="btn_update"onClick={handleNameUpdate}>Update Task</button>
            <button className="btn_cancel" onClick={closeUpdateDialog}>Cancel</button>
          </div>
    
        </div>
      )}

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
