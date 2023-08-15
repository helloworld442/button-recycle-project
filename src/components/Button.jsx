import "./Button.scss";
import classNames from "classnames";

const Button = ({ children, size, color, primary, fullWidth }) => {
  return (
    <button
      className={classNames("button", size, color, { primary, fullWidth })}
    >
      {children}
    </button>
  );
};

export default Button;
