import React,{useState} from "react";

function UpdateArray(){
    const[cars,setCars]=useState([]);
    const[caryear,setCarYear]=useState(new Date().getfullYear());
    const[carmodel,setCarModel]=useState("");
    const[carMake,setCarmake]=useState("");

    function handleAddCar(){

        const newcar={year:caryear,
            make:carMake,
            model:carmodel,
        };
        setCars(c=>[...c,newcar]);
        setCarYear(new Date().getFullYear());

    }
    function handlremove(index){
        setCars(cars.filter((_,i)=>i!=index));

    }
    function handleChangeYear(event){
        setCarYear(event.target.value);

    }
    function handlChangeModel(event){
        setCarModel(event.target.value);

    }
    function handleChangeMake(event){
        setCarmake(event.target.value);

    }
    return(
        <div>
            <h2>List of Car Object</h2>
            <ul>
                {cars.map((car,index)=><li key={index} onClick={handlremove(index)}>
                    {car.year} {car.make} {car.model}
                </li>)}
            </ul>
            <input type="number" value={caryear} onChange={handleChangeYear} placeholder=""/> <br/>
            
            <input type="text" value={carMake} onChange={handleChangeMake} placeholder="enter car make"/><br/>
            <input type="text" value={carmodel} onChange={handlChangeModel} placeholder="enter model"/><br/>

            <button onClick={handleAddCar}>Add Car</button>

        </div>

    );



}
export default UpdateArray;