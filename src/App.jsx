import { useState } from 'react'
import './App.css'

function App() {

    const [color, setColor] = useState("white");
    const [warning, setWarning ] = useState("");
  
    const ChangeColor = (event) => {
      const input = event.target.previousElementSibling.value.toLowerCase();
      if(input != "green" && input != "red" && input != "blue") {
        setColor("white");
        setWarning(input + " is not a valid color. Please choose green, blue or red.");
        
      } else {
        setColor(input);
        setWarning("");
      }
    }

  return (
    <div>
      <div style={{
          backgroundColor: color,
          margin: "10px",
          height: "100px",
          width: "100px",
          border: "1px solid black",
        }}></div>

      <input type="text" id="color-input"/>
      <button onClick={ChangeColor}>Change color</button>
      <div id="warning-style">{warning}</div>
    </div>
  );

}

export default App