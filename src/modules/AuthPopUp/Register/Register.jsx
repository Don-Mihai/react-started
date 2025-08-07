import React, { useState } from "react";
import axios from "axios";
import { API_URL } from "../../../services/api";

const Register = ({ toggleModal, toggleLogin }) => {
  const [registerValues, setRegisterValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const onChangeRegister = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    setRegisterValues({ ...registerValues, [key]: value });
  };

  const handleRegister = async () => {
    await axios.post(`${API_URL}/users`, registerValues);
  };
  return (
    <>
      <h3>Регистрация</h3>
      <input
        onChange={onChangeRegister}
        value={registerValues.firstName}
        name="firstName"
        type="text"
        placeholder="Имя"
        className="auth-popup__input"
      />
      <input
        onChange={onChangeRegister}
        value={registerValues.email}
        name="email"
        type="text"
        placeholder="Email"
        className="auth-popup__input"
      />
      <input
        onChange={onChangeRegister}
        value={registerValues.password}
        name="password"
        type="text"
        placeholder="Password"
        className="auth-popup__input"
      />
      <div className="auth-popup__link" onClick={toggleLogin}>
        Уже есть аккаунт? Войти
      </div>
      <button onClick={handleRegister}>Регистрация</button>
    </>
  );
};

export default Register;
