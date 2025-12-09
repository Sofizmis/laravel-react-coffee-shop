import { Link } from "react-router-dom";

export default function Signup() {
    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="auth-form-wrapper fadeInDown">
            <h1 className="auth-title">Создание аккаунта</h1>
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input type="text" placeholder="Имя" />
                </div>
                <div className="input-group">
                    <input type="email" placeholder="E-mail" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Пароль" />
                </div>
                <div className="input-group">
                    <input type="password" placeholder="Подтверждение пароля" />
                </div>
                <button className="btn btn-block">Зарегистрироваться</button>
                <p className="message">
                    Уже есть аккаунт? <Link to="/auth/login">Войти</Link>
                </p>
            </form>
        </div>
    )
}