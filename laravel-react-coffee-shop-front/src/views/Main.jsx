import { useEffect, useState } from "react";
import axiosClient from "../axios-client";

export default function Main() {
    const [coffee, setCoffee] = useState([]);
    const [loading, setLoading] = useState(false);

    const getCoffee = () => {
        setLoading(true);
        axiosClient.get('/coffees')
            .then(({ data }) => {
                setLoading(false);
                setCoffee(data.data);
                console.log(data);
            })
            .catch((error) => {
                setLoading(false);
                console.error('Ошибка загрузки кофе:', error);
            })
    }

    useEffect(() => {
        getCoffee();
    }, [])

    return (
        <div className="coffee-menu-container">
            <div className="menu-header">
                <h1>Наше Меню</h1>
                <p className="menu-subtitle">Выберите свой идеальный кофе</p>
            </div>

            {loading && (
                <div className="loading-container">
                    <div className="loading-spinner"></div>
                    <p>Загрузка меню...</p>
                </div>
            )}

            {!loading && (
                <div className="coffee-grid">
                    {coffee.map(c => (
                        <div key={c.id} className="coffee-card">
                            <div className="coffee-card-image">
                                {c.image ? (
                                    <img
                                        src={c.image.startsWith('data:image') ? c.image : `data:image/jpeg;base64,${c.image}`}
                                        alt={c.name}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.parentElement.innerHTML = '<div class="image-placeholder"><span>☕</span></div>';
                                        }}
                                    />
                                ) : (
                                    <div className="image-placeholder">
                                        <span>☕</span>
                                    </div>
                                )}
                                {c.available !== undefined && (
                                    <span className={`badge-availability ${c.available ? 'available' : 'unavailable'}`}>
                                        {c.available ? 'Доступно' : 'Недоступно'}
                                    </span>
                                )}
                            </div>

                            <div className="coffee-card-content">
                                <h3 className="coffee-name">{c.name}</h3>
                                <p className="coffee-description">{c.description}</p>

                                <div className="coffee-details">
                                    {c.size && c.size.name && (
                                        <div className="coffee-size">
                                            <span className="detail-icon">📏</span>
                                            <span>{c.size.name} ({c.size.ml} мл)</span>
                                        </div>
                                    )}

                                    <div className="coffee-price">
                                        <span className="price-value">{c.price}</span>
                                        <span className="price-currency"> ₽</span>
                                    </div>
                                </div>

                                <button className="btn-add-to-cart" disabled={!c.available}>
                                    {c.available ? 'Добавить в корзину' : 'Недоступно'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {!loading && coffee.length === 0 && (
                <div className="empty-menu">
                    <p>Меню пока пусто. Скоро здесь появятся вкусные напитки!</p>
                </div>
            )}
        </div>
    )
}