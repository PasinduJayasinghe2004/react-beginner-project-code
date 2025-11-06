import React,{useEffect, useState} from 'react';

function CurrencyConverter(){
    const[amount,setAmount]=useState(1);
    const[fromcurrency,setFromCurrency]=useState("USD");
    const[toCurrency,setCurrency]=useState("LKR");
    const[rate,setRate]=useState(0);
    const[converted,setConverted]=useState(0);
    const[currencies,setCurrencies]=useState([]);

    useEffect(()=>{
        fetch("https://api.exchangerate.host/symbols")
        .then((res)=>res.json())
        .then((data)=>setCurrencies(Object.keys(data.symbols)))
        .catch((err)=>console.error("Error loading symbols",err));
    }
        ,[]);
    useEffect(()=>{
        fetch(`https://api.exchangerate.host/latest?base=${fromcurrency}&symbols=${toCurrency}`)
        .then((res)=>res.json())
        .then((data)=>setRate(data.rates[toCurrency]))
        .catch((err)=>console.error("Error fetching rate: ",err));
    },[fromcurrency,toCurrency]);    

    useEffect(()=>{
        setConverted((amount*rate).toFixed(2));
    },[amount,rate]);

    function handleAmont(event){
        setAmount(event.target.value);
    }

    return(
        <div>
            <h1>Currency Converter</h1>

            <input type="number" value={amount} onChange={handleAmont}/>
            <select value={(e)=>setFromCurrency(e.target.value)}>
                {currencies.map((cur)=>(
                    <option key={cur}>{cur}</option>
                ))}
            </select>
            <select value={(e)=>setCurrency(e.target.value)}>
                {currencies.map((cur)=>(
                    <option key={cur}>{cur}</option>
                ))}
            </select>
            <h2>{amount} {fromcurrency}={converted}{toCurrency}</h2>

            <p>Exchange Rate: {rate.toFixed(3)}</p>
                
        </div>
    );


}
export default CurrencyConverter;