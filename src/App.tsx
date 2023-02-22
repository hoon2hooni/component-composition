import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Switch from "./Switch";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Switch>
      <Switch.On>
        <div style={{ display: "flex", flexDirection: "column" }}>
          켜저버렸즁!
        </div>
      </Switch.On>
      <Switch.On>
        <Switch.Trigger>
          <button style={{ background: "pink" }}>눌르면꺼짐</button>
        </Switch.Trigger>
      </Switch.On>
      <Switch.Off>
        <Switch.Trigger>
          <button style={{ background: "blue", height: 100 }}>
            눌르면켜짐
          </button>
        </Switch.Trigger>
      </Switch.Off>
      <Switch.Off>
        <div style={{ display: "flex", flexDirection: "column" }}>
          꺼져버렸즁!
        </div>
      </Switch.Off>
    </Switch>
  );
}

export default App;
