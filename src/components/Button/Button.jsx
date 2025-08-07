import "./styles.scss";

const Button = ({ title, className, isSecondary, isDanger, ...rest }) => {
  return (
    <button
      className={`button ${className} ${isSecondary ? "secondary" : ""} ${
        isDanger ? "danger" : ""
      }`}
      {...rest}
    >
      {title}
    </button>
  );
};

export default Button;
