import './styles.scss';

const Avatar = ({ name, image, size = 'medium' }) => {
  // Функция для получения инициалов из имени
  const getInitials = (fullName) => {
    if (!fullName) return '?';

    const names = fullName.trim().split(' ');
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }

    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  // Функция для получения цвета фона на основе имени
  const getBackgroundColor = (name) => {
    if (!name) return '#e0e0e0';

    const colors = [
      '#f44336',
      '#e91e63',
      '#9c27b0',
      '#673ab7',
      '#3f51b5',
      '#2196f3',
      '#03a9f4',
      '#00bcd4',
      '#009688',
      '#4caf50',
      '#8bc34a',
      '#cddc39',
      '#ffeb3b',
      '#ffc107',
      '#ff9800',
      '#ff5722',
    ];

    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className={`avatar avatar--${size}`}>
      {image ? (
        <img
          src={image}
          alt={name || 'User avatar'}
          className="avatar__image"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'flex';
          }}
        />
      ) : null}
      <div
        className="avatar__initials"
        style={{
          backgroundColor: getBackgroundColor(name),
          display: image ? 'none' : 'flex',
        }}
      >
        {getInitials(name)}
      </div>
    </div>
  );
};

export default Avatar;
