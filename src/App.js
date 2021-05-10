import { useEffect, useState } from "react";

import Background from "./components/Background/Background";

import classes from "./App.module.scss";

function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");
  const [error, setError] = useState(false);
  const [isBinary, setIsBinary] = useState(true);

  const messages = {
    input: <p className={classes.waiting}>Waiting for Input...</p>,
    convBinary: <p className={classes.value}>{decimal}</p>,
    convDecimal: <p className={classes.value}>{binary}</p>,
    invalid: <p className={classes.error}>Invalid Binary Number</p>,
  };

  const clickHandler = () => {
    setIsBinary(!isBinary);
    setBinary("");
    setDecimal("");
    setError(false);
  };

  // *** BINARY CONVERSTION HANDLERS ***
  const binaryHandler = (event) => {
    const stringNumber = event.target.value;
    const pattern = new RegExp("[2-9]");
    if (pattern.test(stringNumber)) {
      setError(true);
    } else {
      setError(false);
    }

    setBinary(event.target.value);
  };

  const convertBinary = () => {
    const digit = parseInt(binary, 2);
    setDecimal(digit.toString());
  };

  useEffect(() => {
    if (!error && isBinary) {
      convertBinary();
    } else if (!error && !isBinary) {
      convertDecimal();
    }
  }, [binary, decimal]);

  // *** DECIMAL CONVERSTION HANDLERS ***
  const decimalHandler = (event) => {
    setDecimal(event.target.value);
  };

  const convertDecimal = () => {
    const number = parseInt(decimal);
    const result = number.toString(2);
    setBinary(result);
  };

  const inputs = {
    binary: (
      <input
        type="number"
        value={binary}
        onChange={binaryHandler}
        className={classes.input}
      ></input>
    ),
    decimal: (
      <input
        type="number"
        value={decimal}
        onChange={decimalHandler}
        className={classes.input}
      ></input>
    ),
  };

  return (
    <div>
      <Background />
      <div className={classes.content}>
        <header>
          <h1 className={classes.title}>
            {isBinary ? "Bin\\2/Dec" : "Dec\\2/Bin"}
          </h1>
          <p className={classes.description}>
            Enter a {isBinary ? "Binary" : "Decimal"} number, converts into
            {isBinary ? " Binary" : " Decimal"}
          </p>
        </header>
        <section className={classes.main}>
          {isBinary && inputs.binary}
          {!isBinary && inputs.decimal}
          {error && messages.invalid}
          {decimal > -1 && isBinary && messages.convBinary}
          {binary > -1 && !isBinary && messages.convDecimal}
          {binary === "" && messages.input}
          {decimal === "" && messages.input}
        </section>
        <footer>
          <p className={classes.stamp}>
            Made with <span style={{ color: `rgb(116, 50, 163)` }}>❤</span> -
            John Phillips
          </p>
          <button onClick={clickHandler} className={classes.btn}>
            {isBinary ? "DECIMAL" : "BINARY"}
          </button>
        </footer>
      </div>
    </div>
  );
}

export default App;
