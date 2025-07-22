import './styles.scss';
const PopUp = ({ toggleModal }) => {
  return (
    <div className="popup">
      <div className="popup__overlay" onClick={toggleModal}></div>
      <div className="popup__content">
        <h3>Регистрация</h3>
        <input type="text" className="popup__input" />
        <input type="text" className="popup__input" />
        <button onClick={toggleModal} className="popup__close">
          Закрыть окно
        </button>
      </div>
    </div>
  );
};

export default PopUp;
