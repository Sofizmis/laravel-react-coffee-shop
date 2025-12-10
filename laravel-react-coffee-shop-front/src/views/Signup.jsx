import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProviders";
import axiosClient from "../axios-client";

export default function Signup() {
    const { setUser, setToken } = useStateContext();
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();

    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmRef.current.value,
        }
        console.log(payload);
        axiosClient.post('/signup', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    setErrors(response.data.errors);
                }
            })
    }

    return (
        <div className="auth-form-wrapper fadeInDown">
            <h1 className="auth-title">Создание аккаунта</h1>
            {errors && <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>}
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input ref={nameRef} type="text" placeholder="Имя" />
                </div>
                <div className="input-group">
                    <input ref={emailRef} type="email" placeholder="E-mail" />
                </div>
                <div className="input-group">
                    <input ref={passwordRef} type="password" placeholder="Пароль" />
                </div>
                <div className="input-group">
                    <input ref={passwordConfirmRef} type="password" placeholder="Подтверждение пароля" />
                </div>
                <button className="btn btn-block">Зарегистрироваться</button>
                <p className="message">
                    Уже есть аккаунт? <Link to="/auth/login">Войти</Link>
                </p>
            </form>
        </div>
    )
}