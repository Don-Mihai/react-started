import styles from './Portfolio.module.scss';
import Button from '../../components/Button/Button';

const Portfolio = ({ portfolio, openModal, handleDelete }) => {
  const getRiskLevelColor = (riskLevel) => {
    switch (riskLevel) {
      case 'Низкий':
        return styles.lowRisk;
      case 'Средний':
        return styles.mediumRisk;
      case 'Высокий':
        return styles.highRisk;
      default:
        return styles.mediumRisk;
    }
  };
  return (
    <div key={portfolio.id} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <h3 className={styles.title}>{portfolio.name}</h3>
          <span className={`${styles.risk} ${getRiskLevelColor(portfolio.riskLevel)}`}>{portfolio.riskLevel}</span>
        </div>
        <div className={styles.actions}>
          <Button title='Редактировать' className={styles.editBtn} isSecondary onClick={() => openModal(portfolio)} />
          <Button title='Удалить' className={styles.deleteBtn} isDanger onClick={() => handleDelete(portfolio.id)} />
        </div>
      </div>

      <p className={styles.description}>{portfolio.description}</p>

      <div className={styles.value}>
        <span className={styles.amount}>${portfolio.totalValue.toLocaleString()}</span>
        <span className={styles.currency}>{portfolio.currency}</span>
      </div>

      <div className={styles.assets}>
        <h4>Активы:</h4>
        {portfolio?.assets?.length > 0 ? (
          <div className={styles.assetsList}>
            {portfolio.assets.map((asset) => (
              <div key={asset.id} className={styles.assetItem}>
                <span className={styles.assetName}>{asset.name}</span>
                <span className={styles.assetPercentage}>{asset.percentage}%</span>
                <span className={styles.assetValue}>${asset.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noAssets}>Активы не добавлены</p>
        )}
      </div>

      <div className={styles.footer}>
        <span className={styles.date}>Создан: {new Date(portfolio.createdAt).toLocaleDateString()}</span>
      </div>
    </div>
  );
};

export default Portfolio;
