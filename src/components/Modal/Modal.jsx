import './styles.scss';

const Modal = ({ toggleModal, open, className, children }) => {
  if (!open) return null;

  return (
    <div className="popup">
      <div className="popup__overlay" onClick={toggleModal}></div>
      <div className={`popup__content ${className}`}>{children}</div>
    </div>
  );
};

export default Modal;
