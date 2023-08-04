import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("سُبْحَانَ اللهِ");

  const handleClick = () => {
    setCount(count + 1);

    if (count === 33) {
      setText("الْحَمْدُ لِلَّهِ،");
    } else if (count === 66) {
      setText("لَا إِلَهَ إِلَّا اللَّهُ");
    } else if (count === 99) {
      setText("اللَّهُ أَكْبَرُ");
      setCount(0);
    }
  };

  return (
    <div className="App">
      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="parent">
        <button className="btn" onClick={handleClick}>
          سبِّح
        </button>
        <pre>{count} 📿❤️</pre>
        <h2>{text} </h2>
      </div>
    </div>
  );
}

export default App;
