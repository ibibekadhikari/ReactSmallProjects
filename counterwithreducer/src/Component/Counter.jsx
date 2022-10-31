import React, {useEffect, useReducer} from 'react';
import "./Counter.css";

const Counter = () => {

  useEffect(()=>{
    document.title = `Count (${state})`;
  })
    const myStyle = {color: "#7ef218"};
    const reducer = (state, action) => {
      if(action.type === "incr"){
        return state + 1;
      }else if (action.type === "decr")
      {
        if(state !== 0){
          return state - 1;
        }else{
          alert("You can't use decrement after Zero.");
          return state = 0;
        }
      }
     }

  const initialState = 0;
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
        <div className = "container">
          <div className="container-card">
          <h2>Count:   <span style={myStyle}>{state}</span></h2>
          <div>
          <button className="btn" onClick={()=>dispatch({type: "incr"})}>Increment</button>
          <button className="btn" onClick={()=>dispatch({type: "decr"})}>Decrement</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Counter