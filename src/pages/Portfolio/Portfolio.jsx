import React, { useState } from 'react';
import './styles.scss';
import Header from '../../modules/Header/Header';
import Button from '../../components/Button/Button';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([
    {
      id: 1,
      name: 'Консервативный портфель',
      description: 'Низкий риск, стабильный доход',
      totalValue: 50000,
      currency: 'USD',
      riskLevel: 'Низкий',
      createdAt: '2024-01-15',
      assets: [
        { id: 1, name: 'Государственные облигации', percentage: 40, value: 20000 },
        { id: 2, name: 'Корпоративные облигации', percentage: 30, value: 15000 },
        { id: 3, name: 'Денежные фонды', percentage: 30, value: 15000 },
      ],
    },
    {
      id: 2,
      name: 'Агрессивный портфель',
      description: 'Высокий риск, высокий потенциал роста',
      totalValue: 75000,
      currency: 'USD',
      riskLevel: 'Высокий',
      createdAt: '2024-02-20',
      assets: [
        { id: 4, name: 'Акции роста', percentage: 50, value: 37500 },
        { id: 5, name: 'Криптовалюты', percentage: 30, value: 22500 },
        { id: 6, name: 'Индексные фонды', percentage: 20, value: 15000 },
      ],
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    totalValue: '',
    currency: 'USD',
    riskLevel: 'Средний',
  });

  const openModal = (portfolio = null) => {
    if (portfolio) {
      setEditingPortfolio(portfolio);
      setFormData({
        name: portfolio.name,
        description: portfolio.description,
        totalValue: portfolio.totalValue.toString(),
        currency: portfolio.currency,
        riskLevel: portfolio.riskLevel,
      });
    } else {
      setEditingPortfolio(null);
      setFormData({
        name: '',
        description: '',
        totalValue: '',
        currency: 'USD',
        riskLevel: 'Средний',
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPortfolio(null);
    setFormData({
      name: '',
      description: '',
      totalValue: '',
      currency: 'USD',
      riskLevel: 'Средний',
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingPortfolio) {
      // Обновление существующего портфеля
      setPortfolios(portfolios.map((p) => (p.id === editingPortfolio.id ? { ...p, ...formData, totalValue: parseFloat(formData.totalValue) } : p)));
    } else {
      // Создание нового портфеля
      const newPortfolio = {
        id: Date.now(),
        ...formData,
        totalValue: parseFloat(formData.totalValue),
        createdAt: new Date().toISOString().split('T')[0],
        assets: [],
      };
      setPortfolios([...portfolios, newPortfolio]);
    }

    closeModal();
  };

  const handleDelete = (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот портфель?')) {
      setPortfolios(portfolios.filter((p) => p.id !== id));
    }
  };

  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Низкий':
        return 'low-risk';
      case 'Средний':
        return 'medium-risk';
      case 'Высокий':
        return 'high-risk';
      default:
        return 'medium-risk';
    }
  };

  return (
    <div className='portfolio-page'>
      <Header />

      <div className='portfolio-container'>
        <div className='portfolio-header'>
          <div className='portfolio-header__content'>
            <h1>Управление портфелями</h1>
            <p>Создавайте и управляйте своими инвестиционными портфелями</p>
          </div>
          <Button title='Создать портфель' className='portfolio-header__button' onClick={() => openModal()} />
        </div>

        <div className='portfolio-stats'>
          <div className='stat-card'>
            <div className='stat-card__number'>{portfolios.length}</div>
            <div className='stat-card__label'>Всего портфелей</div>
          </div>
          <div className='stat-card'>
            <div className='stat-card__number'>${portfolios.reduce((sum, p) => sum + p.totalValue, 0).toLocaleString()}</div>
            <div className='stat-card__label'>Общая стоимость</div>
          </div>
          <div className='stat-card'>
            <div className='stat-card__number'>{portfolios.filter((p) => p.riskLevel === 'Высокий').length}</div>
            <div className='stat-card__label'>Высокий риск</div>
          </div>
        </div>

        <div className='portfolios-grid'>
          {portfolios.map((portfolio) => (
            <div key={portfolio.id} className='portfolio-card'>
              <div className='portfolio-card__header'>
                <div className='portfolio-card__title-section'>
                  <h3 className='portfolio-card__title'>{portfolio.name}</h3>
                  <span className={`portfolio-card__risk ${getRiskLevelColor(portfolio.riskLevel)}`}>{portfolio.riskLevel}</span>
                </div>
                <div className='portfolio-card__actions'>
                  <Button title='Редактировать' className='portfolio-card__edit-btn' isSecondary onClick={() => openModal(portfolio)} />
                  <Button title='Удалить' className='portfolio-card__delete-btn' isDanger onClick={() => handleDelete(portfolio.id)} />
                </div>
              </div>

              <p className='portfolio-card__description'>{portfolio.description}</p>

              <div className='portfolio-card__value'>
                <span className='portfolio-card__amount'>${portfolio.totalValue.toLocaleString()}</span>
                <span className='portfolio-card__currency'>{portfolio.currency}</span>
              </div>

              <div className='portfolio-card__assets'>
                <h4>Активы:</h4>
                {portfolio.assets.length > 0 ? (
                  <div className='assets-list'>
                    {portfolio.assets.map((asset) => (
                      <div key={asset.id} className='asset-item'>
                        <span className='asset-name'>{asset.name}</span>
                        <span className='asset-percentage'>{asset.percentage}%</span>
                        <span className='asset-value'>${asset.value.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className='no-assets'>Активы не добавлены</p>
                )}
              </div>

              <div className='portfolio-card__footer'>
                <span className='portfolio-card__date'>Создан: {new Date(portfolio.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          ))}
        </div>

        {portfolios.length === 0 && (
          <div className='empty-state'>
            <div className='empty-state__icon'>📊</div>
            <h3>У вас пока нет портфелей</h3>
            <p>Создайте свой первый инвестиционный портфель для начала работы</p>
            <Button title='Создать первый портфель' onClick={() => openModal()} />
          </div>
        )}
      </div>

      {/* Модальное окно для создания/редактирования */}
      {isModalOpen && (
        <div className='modal-overlay' onClick={closeModal}>
          <div className='modal' onClick={(e) => e.stopPropagation()}>
            <div className='modal__header'>
              <h2>{editingPortfolio ? 'Редактировать портфель' : 'Создать новый портфель'}</h2>
              <button className='modal__close' onClick={closeModal}>
                ×
              </button>
            </div>

            <form className='modal__form' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='name'>Название портфеля</label>
                <input type='text' id='name' name='name' value={formData.name} onChange={handleInputChange} placeholder='Введите название портфеля' required />
              </div>

              <div className='form-group'>
                <label htmlFor='description'>Описание</label>
                <textarea
                  id='description'
                  name='description'
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder='Опишите стратегию портфеля'
                  rows='3'
                />
              </div>

              <div className='form-row'>
                <div className='form-group'>
                  <label htmlFor='totalValue'>Общая стоимость</label>
                  <input
                    type='number'
                    id='totalValue'
                    name='totalValue'
                    value={formData.totalValue}
                    onChange={handleInputChange}
                    placeholder='0'
                    min='0'
                    step='0.01'
                    required
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='currency'>Валюта</label>
                  <select id='currency' name='currency' value={formData.currency} onChange={handleInputChange}>
                    <option value='USD'>USD</option>
                    <option value='EUR'>EUR</option>
                    <option value='RUB'>RUB</option>
                  </select>
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor='riskLevel'>Уровень риска</label>
                <select id='riskLevel' name='riskLevel' value={formData.riskLevel} onChange={handleInputChange}>
                  <option value='Низкий'>Низкий</option>
                  <option value='Средний'>Средний</option>
                  <option value='Высокий'>Высокий</option>
                </select>
              </div>

              <div className='modal__actions'>
                <Button type='button' title='Отмена' className='modal__cancel-btn' isSecondary onClick={closeModal} />
                <Button type='submit' title={editingPortfolio ? 'Сохранить' : 'Создать'} className='modal__submit-btn' />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
