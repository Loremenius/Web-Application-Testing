import React, {useState} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"

function App() {
  const [balls, setBalls] = useState(0);
  const [strikes, setStrikes] = useState(0);
  
  const hit = () =>{
    setBalls(0);
    setStrikes(0);
  }

  const ball = () =>{
    if(balls === 4){
      setBalls(0);
      setStrikes(0);
    }else{
      setBalls(balls+1);
    }
  }

  const foul = () =>{
    if(strikes < 2){
      setStrikes(strikes+1);
    }
  }

  const stike = () =>{
    if(strikes === 3){
      setBalls(0);
      setStrikes(0);
    }else{
      setStrikes(strikes+1);
    }
  }


  return (
    <div className="App">
      
    </div>
  );
}

export default App;
