import { useState } from "react";
import Background from "./components/Background/Background";
import classes from "./App.module.scss";

function App() {
  const [binary, setBinary] = useState(0);
  const [decimal, setDecimal] = useState(0);

  // CONVERTS BINARY INTO DECIMAL AND SETS STATE
  const binaryHandler = (event) => {
    setBinary(event.target.value);
    const digit = parseInt(event.target.value, 2);
    setDecimal(digit);
  };

  // CONVERTS DECIMAL INTO BINARY AND SETS STATE
  const decimalHandler = (event) => {
    setDecimal(event.target.value);
    const number = parseInt(event.target.value);
    const result = number.toString(2);
    setBinary(result);
  };

  return (
    <div>
      <Background />
      <div className={classes.content}>
        <header>
          <h1 className={classes.title}>{`Bin\\2/Dec`}</h1>
          <p className={classes.description}>
            Enter a Binary number, converts into Decimal
          </p>
        </header>
        <section className={classes.main}>
          <input className={classes.input}></input>
          <p className={classes.value}>Waiting for Input...</p>
        </section>
        <footer>
          <p className={classes.stamp}>
            Made with <span style={{ color: `rgb(116, 50, 163)` }}>❤</span> -
            John Phillips
          </p>
          <button className={classes.btn}>DECIMAL</button>
        </footer>
      </div>
    </div>
  );
}

export default App;
