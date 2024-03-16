import React, { useState , useRef } from "react";
import Card_ToDo from "../components/card_todo"; 
import img_what_work from "../images/img_what_work.gif";
import img_working from "../images/img_working.png"
import "../styles/To_Do_List.css";

function To_Do_List() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const bodyFilterRef = useRef(null);


  const addTask = () => {
    if (!input.trim()) return;
    const newTask = { id: Date.now(), name: input, status: "Incomplete" };
    setTasks([...tasks, newTask]);
    setInput("");
  };
  const onChangeStatus = (id, newStatus) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, status: newStatus };
      }
      return task;
    }));
  };
  
  const toggleDialog = () => setIsDialogOpen(!isDialogOpen);
  

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  const [filter, setFilter] = useState("All");

  const scrollToFilters = () => {
    if (bodyFilterRef.current) {
      bodyFilterRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  

  return (
    <div className="To_Do_List_Page">
      <div className="header"> 
        <div className="header_img">
          <img src={img_what_work} alt="What to work on"/>
        </div>
        <div className="header_text">
          <h2>What to do today?</h2>
          <div className="header_button">
            <div className="header_button_add">
              <button onClick={toggleDialog}>Add New Task</button>
            </div>
            <div className="header_button_task">
              <button onClick={scrollToFilters}>Task Management</button>
            </div>
          </div>
        </div>
        {isDialogOpen && (
        <div className="dialog">
         
          <div>
            <div className="dialog_task"> 
              <p>New Task: </p>
              <input value={input} onChange={e => setInput(e.target.value)} />
            </div>
            <div className="dialog_addtask">
              <div className="dialog_img">
                <img src={img_working} alt=""/>
              </div>
              <div className="dialog_btn_add"> 
                <button onClick={() => {addTask(); toggleDialog();scrollToFilters()}}>Add Task</button>
              </div>
              
             
            </div>
          </div>
        </div>
      )}
      </div>
      <div ref={bodyFilterRef}  className="body">
        <div className="body_filter">
          <div className={`filter_all ${filter === 'All' ? 'active' : ''}`} onClick={() => setFilter("All")}><h3>All</h3></div>
          <div className={`filter_incomplete ${filter === 'Incomplete' ? 'active' : ''}`} onClick={() => setFilter("Incomplete")}><h3>Incomplete</h3></div>
          <div className={`filter_inprogress ${filter === 'In Progress' ? 'active' : ''}`} onClick={() => setFilter("In Progress")}><h3>In Progress</h3></div>
          <div className={`filter_completed ${filter === 'Completed' ? 'active' : ''}`} onClick={() => setFilter("Completed")}><h3>Completed</h3></div>
        </div>
        <div className="list_task">
          {tasks.filter(task => filter === "All" || task.status === filter).map((task) => (
            <Card_ToDo
              key={task.id}
              id={task.id}
              name={task.name}
              status={task.status}
              onChangeStatus={onChangeStatus}
              onDelete={() => deleteTask(task.id)}
            />
          ))}
        </div>



      </div>
     

     
    </div>
  );
}

export default To_Do_List;
