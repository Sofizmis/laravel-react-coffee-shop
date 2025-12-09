import { Link } from "react-router-dom";

export default function Login() {
    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="auth-form-wrapper fadeInDown">
            <h1 className="auth-title">Вход в систему</h1>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="email" placeholder="E-mail" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Пароль" />
                </div>
                <button className="btn btn-block">Войти</button>
                <p className="message">
                    Нет аккаунта? <Link to="/auth/signup">Создать аккаунт</Link>
                </p>
            </form>
        </div>
    )
}