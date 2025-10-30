import React,{useState} from "react"

function CrateArray2(){

    const[foods,setFoods]=useState(["Apple","Banana","Watermelon"]);

    function handleAddFood(){
        const newFood=document.getElementById("foodInput").Value;
        document.getElementById("foodInput").value="";

        setFoods(f=>[...f,newFood]);

    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_,i)=>i!=index));
    }

    return(
        <div>
            <h2>List Of Fruits</h2>
            <ul>
                {foods.map((food,index)=>
                <li key={index} onClick={()=>handleRemoveFood(index)}>
                    {food}
                </li>)}

            </ul>
            <input type="text" id="foodInput" placeholder="enter fruit name"/>
            <button onClick={handleAddFood}>Add Fruit</button>
        </div>
    );
    

}
export default CrateArray2;