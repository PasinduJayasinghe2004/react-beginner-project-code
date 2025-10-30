import React,{useState} from 'react';

function ToDoList(){

    const[task,setTask]=useState("");
    const[taskList,settaskList]=useState([]);

    function handleAdd(){
        if(task.trim() === "")return;//ignor empty input
        settaskList([...taskList,task]);
        setTask("");
    }
    function handleDelete(index){
        const newList=taskList.filter((_,i)=>i !== index);
        settaskList(newList);
    }
    function handleChangeTask(even){
        setTask(even.target.value);
    }
    return(
        <div className="todolist">
            <h1>To Do List App</h1>

            <input type="text" placeholder="Enter New Task" value={task}
            onChange={handleChangeTask}/>

            <button onClick={handleAdd}>Add</button>

            <ul className="list">
                {taskList.map((item,index)=>(
                   <li key={index} className="list1" >
                    {item}{" "}
                    <button onClick={()=>handleDelete(index)}>❌</button>
                   </li> 
                ))}


            </ul>
            {taskList.length === 0 && <p>No task yet.Add Something! </p>}

        </div>

    );

}
export default ToDoList;