export const validateEmail = (formValues, formErrors, setFormErrors) => {
    let isError = false;
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formValues.email) {
        setFormErrors({ ...formErrors, email: 'Обязательное поле' });
        isError = true;
    }
    if (!re.test(formValues.email)) {
        setFormErrors({ ...formErrors, email: 'Неверный email' });
        isError = true;
    }
    if (formValues.email.length > 255) {
        setFormErrors({ ...formErrors, email: 'Максимум 255 символов' });
        isError = true;
    }

    return isError;
};

export const validatePassword = (formValues, formErrors, setFormErrors) => {
    let isError = false;

    if (!formValues.password) {
        setFormErrors({ ...formValues, password: 'Обязательное поле' });
        isError = true;
    }
    if (formValues.password.length < 8) {
        setFormErrors({ ...formErrors, password: 'Минимум 8 символов' });
        isError = true;
    }
    if (formValues.password.length > 255) {
        setFormErrors({ ...formErrors, password: 'Максимум 255 символов' });
        isError = true;
    }

    return isError;
};
