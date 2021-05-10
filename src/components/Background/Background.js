import classes from "./Background.module.scss";

const Background = () => {
  return (
    <div>
      <div className={classes.background}></div>
      <div className={classes.blur}></div>
    </div>
  );
};

export default Background;
