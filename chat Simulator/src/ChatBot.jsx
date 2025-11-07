import React,{useState} from "react";

import "./App.css";

function ChatBot(){
    const[message,setMessage]=useState([
        {text:"Hi there! I am your chat bot. ",sender:"bot"},//it  start with one default message from the bot
    ]);
    const[input,setInput]=useState("");

    //funtion handle when user click send
    const handleSend=()=>{
        if(input.trim()=== "")return;//ignore empty input

        const usermessage={text:input,sender:"user"};
        //prev copies all previous messages,and we add the new one
        setMessage((prev)=>[...prev,usermessage]);
        setInput("");

        setTimeout(()=>{
                //create bot reply by generating text based 
                const botReply={text:generateBotReply(input),sender:"bot",};

                setMessage((prev)=>[...prev,botReply]);
        },1500);
    };
    //Function that creates a bot reply based on user's message
    const generateBotReply=(userText)=>{
        userText=userText.toLowerCase();

            // Simple condition checks for keywords and return different replies
        if (userText.includes("hello")) return "Hello! How are you today? 😊";
        if (userText.includes("how are you"))
        return "I'm just code, but I'm feeling great! 🤖";
        if (userText.includes("bye")) return "Goodbye! Have a great day! 👋";

        // Default response if the message doesn’t match anything
        return "I'm not sure what you mean, but that sounds interesting! 🤔";
    };
    function handleinput(event){
        setInput(event.target.value);
    }

    return(

        <div classname="chat-container">
            <h2>Chat Simulator</h2>
            <div className="chat-box">
                {message.map((msg,index)=>(
                    <div key={index} className={`message ${msg.sender === "user "? "user":"bot"}`}>
                        {msg.text}
                    </div>    
                ))}
            </div>

            <div className="input-box">
                <input type="text" placeholder="Type yoyr message" value={input} onChange={handleinput}
                onKeyDown={(e)=>e.key ==="Enter" && handleSend()} />


                <button onClick={handleSend}>Send</button>
            </div>

        </div>

    );

    }


export default ChatBot;