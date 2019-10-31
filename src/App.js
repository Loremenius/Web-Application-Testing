import React, {useState} from 'react';
import './App.css';
import Dashboard from "./Components/Dashboard"
import Display from "./Components/Display"

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

  const strike = () =>{
    if(strikes === 3){
      setBalls(0);
      setStrikes(0);
    }else{
      setStrikes(strikes+1);
    }
  }


  return (
    <div className="App">
      <Display balls={balls} strikes={strikes}/>
      <Dashboard hit={hit} ball={ball} foul={foul} strike={strike}/>
    </div>
  );
}

export default App;
