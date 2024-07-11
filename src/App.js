"use Client"
import {useState,useEffect} from 'react';
import {counterContext} from './context.js';
import Navbar from './Navbar.js';

function App() {

    const[count, setCount] = useState(0);
//    function handleClick(){
//        setCount(prev=>prev+1);
//    }

  return (
    <>

    <counterContext.Provider value={count}>
    <Navbar/>
    <h1>{count}</h1>
    <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
    </counterContext.Provider>
    </>
  );
}

export default App;
