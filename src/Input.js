import React from 'react';
import "./App.css";

function Input() {
    return (
        <div>
        <h1>React Background Generator</h1>
      <input class="color1"  value="#0000ff" name="c1" type="color" />
      <input class="color2"  value="#00ff00" name="c2" type="color" />
      <h2>Current Css Color</h2>
      <h3></h3> 
        </div>
    )
}

export default Input;
