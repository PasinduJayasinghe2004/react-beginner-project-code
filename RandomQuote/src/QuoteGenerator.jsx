import React,{useState} from "react";

function QuoteGenerator(){
    const quotes=["The best way to predict the future is to invent it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Code is like humor. When you have to explain it, it’s bad.",
    "Experience is the name everyone gives to their mistakes.",
    "In order to be irreplaceable, one must always be different.",
    "The secret of getting ahead is getting started."];

    const[quote,setQuotes]=useState("Click the button to get a quote!")

    function generateQuote(){
        const randomIndex=Math.floor(Math.random()*quotes.length);
        setQuotes(quotes[randomIndex])

    }
    return(
        <div className="form1">
            <h1>Random quote Generator</h1>
            <div className="form2">
                "{quote}""
            </div>
            <button onClick={generateQuote} className="btn">
                New quote
            </button>

        </div>
    );

}
export default QuoteGenerator;