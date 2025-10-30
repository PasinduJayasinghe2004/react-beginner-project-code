import React,{useState} from 'react';
function FormHandler(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[message,setMessage]=useState("");
    const[submitted,setSubmitted]=useState(false);

function handleSubmit(event){
    event.preventDefault();
    setSubmitted(true);
}
function handleName(event){
    setName(event.target.value)

}
function handleEmail(event){
    setEmail(event.target.value)
}
function handleMessage(event){
    setMessage(event.target.value)

    
}


return(
    <div className="form">
        <h1>Simple Form Handler</h1>
        <form onSubmit={handleSubmit}>
            <div className="from1">
                <input type="text"
                       placeholder="name"
                       value={name}
                       onChange={handleName}/>

            </div>
            <div className="form1">
                <input type="email"
                        placeholder="enter email"
                        value={email}
                        onChange={handleEmail}/>
            </div>
            <div className="form1">
                <textarea
                placeholder="Enter comment "
                value={message}
                onChange={handleMessage}></textarea>

            </div>
            <button type="submit">Submit</button>

        </form>
        {submitted && (
            <div>
                <h2>Submitted Data:</h2>
                <p><strong>Name:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Message:</strong> {message}</p>
            </div>
        )}

    </div>
);
}
export default FormHandler