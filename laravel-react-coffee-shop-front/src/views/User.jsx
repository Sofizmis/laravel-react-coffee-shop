import React from 'react';

export default function User() {
    return (
        <div className="user-profile-container">
            <div className="profile-header-card">
                <div className="profile-cover"></div>
                <div className="profile-avatar-section">
                    <div className="profile-avatar">
                        <img src="https://ui-avatars.com/api/?name=User+Name&background=random" alt="Avatar" />
                    </div>
                    <div className="profile-info">
                        <h1>София Алексеева</h1>
                        <p>Кофеман | ID: 994221</p>
                    </div>
                    <div className="profile-actions">
                        <button className="btn-edit">Редактировать</button>
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
                        <p>sofiya@example.com</p>
                    </div>
                    <div className="detail-item">
                        <label>Телефон</label>
                        <p>+1 234 567 890</p>
                    </div>
                    <div className="detail-item">
                        <label>Дата регистрации</label>
                        <p>Январь 2024</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
