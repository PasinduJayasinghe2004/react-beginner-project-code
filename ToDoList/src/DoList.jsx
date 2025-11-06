import React,{useState} from 'react';

function DoList(){

    const[task,setTask]=useState("");
    const[taskList,settaskList]=useState([]);

    function handleAdd(){
        if(task.trim=== "")return;
        settaskList([...taskList,task]);
        setTask("");
    }
    function handleDelete(index){
        const newList=taskList.filter((_,i)=>i !=index);
        settaskList(newList)

    }
    function handlechanges(event){
        setTask(event.target.value);
    }

    return(
        <div>
            <h1>To Do List App</h1>
            <input type="text" placeholder='enter habit' onChange={handlechanges} value={task}/>

            <button  onClick={handleAdd}>Add</button>

            <ul>
                {taskList.map((item,index)=>{
                    <li key={index}>{item}
                    <button onClick={()=>handleDelete(index)}>X</button>
                    
                    </li>
                })}
            </ul>
            {taskList.length === 0 && <p>No task found.</p>}
        </div>
        
    );

}
export default DoList
