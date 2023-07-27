import React, { useReducer } from "react";

const Test = () => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "SET_NAME":
          return { ...state, name: action.payload };

        case "ADD_NAME":
          return {...state.name, names: [...state.names, state.name], name: ""}
      };
    },
    {
      names: [],
      name: "",
    }
  );
  return (
    <div>
<div>
    {state.names.map((name, index)=>{
       return <div key= {index}> {name} </div>
    })}
</div>

      <input
        type="text"
        value={state.name}
        onChange={(e) =>
          dispatch({ type: "SET_NAME", payload: e.target.value })
        }
      />

      <button 
      onClick={()=> dispatch({type:"ADD_NAME"})}
      > ADD NaMe</button>
    </div>
  );
};

export default Test;
