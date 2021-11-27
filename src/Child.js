import React from 'react';

function Child(props) {
  return (
    <div>
      <span>{props.name}</span>
      <input
        value={props.name}
        onChange={(e) => {
          props.onChangeName(e.target.value);
        }}
      ></input>
    </div>
  );
}
export default Child;
