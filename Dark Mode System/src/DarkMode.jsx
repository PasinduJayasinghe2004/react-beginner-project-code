import React,{useState,useEffect} from 'react';
import "./App.css";

function DarkMode(){
    const[darkMode,setDarkMode]=useState(false);

    useEffect(()=>{
        const savedTheme=localStorage.getItem("darkMode")==="true";
        setDarkMode(savedTheme);
    },[]);
    useEffect(()=>{
        localStorage.setItem("darkMode",darkMode);
    },[darkMode]);

    const toggleTheme=()=>{
        setDarkMode(!darkMode)
    };
    return(
        <div className={`App ${darkMode ? "dark":"light"}`}>
            <div className="container">
                <h1>{darkMode ? "🌙 Dark Mode":"☀️ Light Mode"}</h1>
                <p>Click the Button to switch theme!</p>
                <button onClick={toggleTheme}>
                    Switch to {darkMode ? "Light" :" Dark"} Mode
                </button>

            </div>
        </div>
    );

}
export default DarkMode