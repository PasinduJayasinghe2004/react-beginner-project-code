import React,{useState,useEffect} from "react";

function Digitalclock(){
    const[time,setTime]=useState(new Date());

    useEffect(()=>{
        const timer=setInterval(()=>{
            setTime(new Date());
        },1000);

        return()=>clearInterval(timer);
    },[]);

    const formattedtime=time.toLocaleTimeString();

    return(
        <div>
            <h1>Digital Clock</h1>

            <div>
                {formattedtime}
            </div>
        </div>
    );

}
export default Digitalclock;