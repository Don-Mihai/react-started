import './styles.scss';

const Button = ({ title, className, isSecondary, ...rest }) => {
  return (
    <button className={`button ${className} ${isSecondary ? 'secondary' : ''} `} {...rest}>
      {title}
    </button>
  );
};

export default Button;
