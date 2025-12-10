import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProviders";
import axiosClient from "../axios-client";

export default function Login() {
    const { setUser, setToken } = useStateContext();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errors, setErrors] = useState(null);

    const onSubmit = (ev) => {
        ev.preventDefault();
        const payload = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }
        setErrors(null);
        axiosClient.post('/login', payload)
            .then(({ data }) => {
                setUser(data.user)
                setToken(data.token)
            })
            .catch(err => {
                const response = err.response;
                if (response && response.status === 422) {
                    if (response.data.errors) {
                        setErrors(response.data.errors);
                    } else {
                        setErrors({
                            email: [response.data.message]
                        });
                    }
                }
            })
    }

    return (
        <div className="auth-form-wrapper fadeInDown">
            <h1 className="auth-title">Вход в систему</h1>
            {errors && <div className="alert">
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>}
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input ref={emailRef} type="email" placeholder="E-mail" />
                </div>
                <div className="input-group">
                    <input ref={passwordRef} type="password" placeholder="Пароль" />
                </div>
                <button className="btn btn-block">Войти</button>
                <p className="message">
                    Нет аккаунта? <Link to="/auth/signup">Создать аккаунт</Link>
                </p>
            </form>
        </div>
    )
}