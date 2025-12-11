import React from 'react';
import { useStateContext } from "../contexts/ContextProviders";

export default function User() {
    const { user } = useStateContext();
    return (
        <div className="user-profile-container">
            <div className="profile-header-card">
                <div className="profile-cover"></div>
                <div className="profile-avatar-section" style={{ alignItems: 'flex-start' }}>
                    <div className="profile-avatar">
                        <img src="https://ui-avatars.com/api/?name=User+Name&background=random" alt="Avatar" />
                    </div>
                    <div className="profile-info" style={{ paddingTop: '55px' }}>
                        <h1>{user.name}</h1>
                        <p>Кофеман | ID: {user.id}</p>
                    </div>
                </div>
            </div>

            <div className="profile-stats-grid">
                <div className="stat-card">
                    <h3>12</h3>
                    <p>Заказов</p>
                </div>
                <div className="stat-card">
                    <h3>150</h3>
                    <p>Бонусных баллов</p>
                </div>
                <div className="stat-card">
                    <h3>5</h3>
                    <p>Отзывов</p>
                </div>
            </div>

            <div className="profile-details-section">
                <h2>Информация об аккаунте</h2>
                <div className="details-grid">
                    <div className="detail-item">
                        <label>E-mail</label>
                        <p>{user.email}</p>
                    </div>
                    <div className="detail-item">
                        <label>Телефон</label>
                        <p>Не указан</p>
                    </div>
                    <div className="detail-item">
                        <label>Дата регистрации</label>
                        <p>{user.created_at}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
