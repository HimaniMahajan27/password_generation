import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { LC, NC, SC, UC } from './Data/Char';

function App() {
   let [uppercase,letuppercase]=useState(false)
   let [lowercase,letlowercase]=useState(false)
   let [symbol,letsymbol]=useState(false)
   let [number,letnumber]=useState(false)
   let [passwordlen,letpasswordlen]=useState(10)
   let [final,letfinal]=useState('')

   let createpassword=()=>
   {  let finalans=''
      let setchar=''
       if(uppercase || lowercase || symbol || number) {
             if(uppercase){ setchar+= UC}
             if(lowercase){ setchar+= LC}
             if(symbol){ setchar+= SC}
             if(number){ setchar+= NC}

             for(let i=0;i< passwordlen ;i++){
              finalans += setchar.charAt(Math.floor(Math.random()*setchar.length))
                 letfinal(finalans);
            }
  
       }
       else{
        alert("select atleast one checkbox...")
       }
   }
   let genuine=()=>{
    navigator.clipboard.writeText(final)
   }
  return (
    <>
  <div className='password'>
     <h2> generate password</h2>
 <div className='passbox'> 

  <input type='text' value={final} readOnly/> <button onClick={genuine}> copy</button>
  </div>
 <div className='cover'>
   <div className='pass1'> 
    <label> password length</label>
    <input type='number' max={20} min={10} value={passwordlen} onChange={(event)=>letpasswordlen(event.target.value)}/>
   </div>

   <div className='pass2'> 
    <label>include upperletter</label>
    <input type='checkbox' checked={uppercase} onChange={()=>letuppercase(!uppercase)}/>
   </div>
   <div className='pass3'> 
    <label> include lowerletter</label>
    <input type='checkbox' checked={lowercase} onChange={()=>letlowercase(!lowercase)}/>
   </div>

   <div className='pass4'> 
    <label> includes number</label>
    <input type='checkbox'checked={number} onChange={()=>letnumber(!number)}/>
   </div>

   <div className='pass5'> 
    <label>include symbols</label>
    <input type='checkbox' checked={symbol} onChange={()=>letsymbol(!symbol)}/>
   </div>

   <div className='pass6'> 
    <button onClick={createpassword}> generate password</button>
   </div>
   </div>
  </div>
    </>
  );
}

export default App;
