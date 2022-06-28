import './App.css';
import {useSelector, useDispatch} from "react-redux";
import {incNumber, decNumber} from "./actions/index";

function App() {

  const myState = useSelector((state)=> state.changeTheNumber);
  
  const dispatch = useDispatch();
  return (
    <>
    <div className="container center">
     
      <h1>Increment/Decrement Counter</h1>
      <h4>using React And Redux</h4>


      <div className="quantity mt-4">
        <a className="quantity_minus m-4" title="Decrement" onClick={()=> dispatch(decNumber())}><span>-</span></a>
        <input name="quantity" type="text" className="quantity_input mb-2" value={myState} readOnly></input>
        <a className="quantity_plus m-4" title="Increment" onClick={()=> dispatch(incNumber())}><span>+</span></a>
      </div>

    </div>
    </>
  );
}

export default App;
