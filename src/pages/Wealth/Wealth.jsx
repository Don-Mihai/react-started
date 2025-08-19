import React from 'react';
import './styles.scss';

const Wealth = () => {
  return (
    <div className='wealth-page'>
      <div className='wealth-container'>
        <div className='hero-section'>
          <h1>Управление богатством</h1>
          <p className='hero-subtitle'>Создайте и приумножьте свой капитал с помощью грамотного финансового планирования</p>
        </div>

        <div className='wealth-content'>
          <div className='section'>
            <h2>📊 Финансовое планирование</h2>
            <div className='cards-grid'>
              <div className='card'>
                <h3>Личный бюджет</h3>
                <p>Планирование доходов и расходов для достижения финансовых целей</p>
                <ul>
                  <li>Анализ текущих доходов</li>
                  <li>Категоризация расходов</li>
                  <li>Создание резервного фонда</li>
                </ul>
              </div>
              <div className='card'>
                <h3>Долгосрочные цели</h3>
                <p>Планирование крупных покупок и жизненных этапов</p>
                <ul>
                  <li>Покупка недвижимости</li>
                  <li>Образование детей</li>
                  <li>Пенсионные накопления</li>
                </ul>
              </div>
            </div>
          </div>

          <div className='section'>
            <h2>💰 Инвестиционные стратегии</h2>
            <div className='investment-types'>
              <div className='investment-card low-risk'>
                <h3>Низкий риск</h3>
                <p>Консервативные инструменты для сохранения капитала</p>
                <div className='instruments'>
                  <span>Банковские вклады</span>
                  <span>Государственные облигации</span>
                  <span>Денежные фонды</span>
                </div>
                <div className='expected-return'>Доходность: 3-6%</div>
              </div>
              <div className='investment-card medium-risk'>
                <h3>Средний риск</h3>
                <p>Сбалансированный портфель для роста капитала</p>
                <div className='instruments'>
                  <span>Корпоративные облигации</span>
                  <span>Индексные фонды</span>
                  <span>Смешанные ETF</span>
                </div>
                <div className='expected-return'>Доходность: 6-12%</div>
              </div>
              <div className='investment-card high-risk'>
                <h3>Высокий риск</h3>
                <p>Агрессивные стратегии для максимального роста</p>
                <div className='instruments'>
                  <span>Акции роста</span>
                  <span>Криптовалюты</span>
                  <span>Стартапы</span>
                </div>
                <div className='expected-return'>Доходность: 12%+</div>
              </div>
            </div>
          </div>

          <div className='section'>
            <h2>🏆 Принципы успешного инвестирования</h2>
            <div className='principles'>
              <div className='principle'>
                <div className='principle-icon'>⏰</div>
                <h3>Время</h3>
                <p>Начинайте инвестировать как можно раньше. Сила сложного процента работает в долгосрочной перспективе.</p>
              </div>
              <div className='principle'>
                <div className='principle-icon'>📈</div>
                <h3>Диверсификация</h3>
                <p>Не кладите все яйца в одну корзину. Распределяйте риски между разными активами.</p>
              </div>
              <div className='principle'>
                <div className='principle-icon'>🎯</div>
                <h3>Регулярность</h3>
                <p>Инвестируйте регулярно, используя стратегию усреднения долларовой стоимости.</p>
              </div>
              <div className='principle'>
                <div className='principle-icon'>📚</div>
                <h3>Образование</h3>
                <p>Постоянно изучайте рынки и новые инвестиционные возможности.</p>
              </div>
            </div>
          </div>

          <div className='section'>
            <h2>📋 Шаги к финансовой независимости</h2>
            <div className='steps'>
              <div className='step'>
                <div className='step-number'>1</div>
                <div className='step-content'>
                  <h3>Оцените текущее положение</h3>
                  <p>Подсчитайте активы и обязательства, определите чистую стоимость</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>2</div>
                <div className='step-content'>
                  <h3>Создайте экстренный фонд</h3>
                  <p>Накопите 3-6 месячных расходов на непредвиденные ситуации</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>3</div>
                <div className='step-content'>
                  <h3>Погасите долги</h3>
                  <p>Избавьтесь от высокопроцентных долгов, особенно по кредитным картам</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>4</div>
                <div className='step-content'>
                  <h3>Начните инвестировать</h3>
                  <p>Откройте инвестиционные счета и начните регулярные инвестиции</p>
                </div>
              </div>
              <div className='step'>
                <div className='step-number'>5</div>
                <div className='step-content'>
                  <h3>Увеличивайте доходы</h3>
                  <p>Развивайте навыки, ищите дополнительные источники дохода</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wealth;
