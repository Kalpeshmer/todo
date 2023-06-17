import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.click} type="text" value={props.inputtext} />
      <button onClick={props.additem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
