import React, { useEffect, useState } from 'react';
import './styles.scss';
import Button from '../../components/Button/Button';
import Modal from '../../components/Modal/Modal';
import PortfolioItem from '../../modules/Portfolio/Portfolio';
import { addPortfolio, deletePortfolio, fetchPortfolios, updatePortfolio } from '../../redux/Portfolio';
import { useDispatch, useSelector } from 'react-redux';
import { initialPortfolio } from '../../redux/Portfolio/utils';

const Portfolio = () => {
  const { portfolios } = useSelector((store) => store.portfolio);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPortfolio, setEditingPortfolio] = useState(null);
  const [formData, setFormData] = useState(initialPortfolio);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPortfolios());
  }, []);

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
      setFormData(initialPortfolio);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPortfolio(null);
    setFormData(initialPortfolio);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // TODO: разделить логику редактирования сущетсвующего и нового портфеля
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editingPortfolio) {
      // Обновление существующего портфеля
      const updatedPortfolio = {
        ...editingPortfolio,
        ...formData,
        totalValue: parseFloat(formData.totalValue),
      };

      dispatch(updatePortfolio(updatedPortfolio));
    } else {
      dispatch(addPortfolio(formData));
    }

    closeModal();
  };

  const handleDelete = async (id) => {
    if (window.confirm('Вы уверены, что хотите удалить этот портфель?')) {
      dispatch(deletePortfolio(id));
    }
  };

  return (
    <div className='portfolio-page'>
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
            <PortfolioItem key={portfolio.id} portfolio={portfolio} openModal={openModal} handleDelete={handleDelete} />
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
      <Modal open={isModalOpen} toggleModal={closeModal}>
        <>
          <div className='modal__header'>
            <h2>{editingPortfolio ? 'Редактировать портфель' : 'Создать новый портфель'}</h2>
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
        </>
      </Modal>
    </div>
  );
};

export default Portfolio;
