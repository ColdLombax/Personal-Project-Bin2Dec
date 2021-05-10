import { useState } from "react";
import Background from "./components/Background/Background";
import classes from "./App.module.scss";

function App() {
  const [binary, setBinary] = useState("");
  // const [decimal, setDecimal] = useState(0);

  // CONVERTS BINARY INTO DECIMAL AND SETS STATE
  // const binaryHandler = (event) => {
  //   setBinary(event.target.value);
  //   const digit = parseInt(event.target.value, 2);
  //   setDecimal(digit);
  // };

  // CONVERTS DECIMAL INTO BINARY AND SETS STATE
  // const decimalHandler = (event) => {
  //   setDecimal(event.target.value);
  //   const number = parseInt(event.target.value);
  //   const result = number.toString(2);
  //   setBinary(result);
  // };

  const [error, setError] = useState(false);

  const binaryHandler = (event) => {
    const stringNumber = event.target.value;
    const pattern = new RegExp("[2-9]");
    if (pattern.test(stringNumber)) {
      setError(true);
      console.log("has a number greater than 1");
    } else {
      setError(false);
    }
    setBinary(event.target.value);
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
          <input
            type="number"
            pattern="1(0∗1)∗ "
            value={binary}
            onChange={binaryHandler}
            className={classes.input}
          ></input>
          {error ? (
            <p className={classes.error}>Invalid Binary Number</p>
          ) : (
            <p className={classes.value}>{binary}</p>
          )}

          {binary === "" && (
            <p className={classes.waiting}>Waiting for Input...</p>
          )}
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
