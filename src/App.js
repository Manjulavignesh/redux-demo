import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import {INCREMENTBY2,DECREMENTBY2 } from './Store/counter';


function App() {
  const {value}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>The Counter Value is {value}</h1>
   <button onClick={()=>dispatch(INCREMENTBY2())}>Increament</button>
   <button onClick={()=>dispatch(DECREMENTBY2())}>Decreamemt</button>
   </div>
  );
}

export default App;
