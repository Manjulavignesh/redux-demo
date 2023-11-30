import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decreament, increament } from './Store/counter';


function App() {
  const {value}=useSelector((state)=>state.counter);
  const dispatch=useDispatch();
  return (
    <div>
      <h1>The Counter Value is {value}</h1>
   <button onClick={()=>dispatch(increament())}>Increament</button>
   <button onClick={()=>dispatch(decreament())}>Decreamemt</button>
   </div>
  );
}

export default App;
