import classes from "./styles/App.module.scss";

function App() {
  const convertToDecimal = () => {
    console.log("decimal");
  };

  const convertToBinary = () => {
    console.log("binary");
  };

  return (
    <div>
      <div className={classes.background}></div>
      <div className={classes.blur}></div>
      <div className={classes.flex}>
        <input onChange={convertToDecimal}></input>
        <input onChange={convertToDecimal}></input>
      </div>
    </div>
  );
}

export default App;

// Create an input that can only take 1/0's for the binary conversion.
// Convert on every keystroke update

// reverse the input so if digits are inputed in the other box then return binary
