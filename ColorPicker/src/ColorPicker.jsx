import React,{useState} from 'react';

function ColorPicker(){
    const[color,setColor]=useState("blue");
    const[copied,setCopied]=useState(false);



    function handlcolorChange(event){
        setColor(event.target.value);
    }

    function generateRandomColor(){
        const randomColor="#" +Math.floor(Math.random() * 16777215).toString(16);
        setColor(randomColor);
    }
    function copyToClipboard(){
        navigator.clipboard.writeText(color);
        setCopied(true);

        setTimeout(()=>setCopied(false),2000);
    }



    return(
        <div className="pick">
            <h1>Color Picker App</h1>

            <input type="color" value={color} onChange={handlcolorChange}
            classname="color"/>
            <div>
            <h2>Selected Color: {color}</h2>

            <button className="btn" onClick={generateRandomColor}>
                Generate Random Color
            </button>   
            <button onClick={copyToClipboard} className='btn1'>copy code</button>
                {copied && <p className='p1'>Copied to clipboard</p>}
            </div>
            <div className="color1">
            </div>
        </div>

    );
}
export default ColorPicker;