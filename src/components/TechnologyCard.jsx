import './TechnologyCard.css';

function TechnologyCard({ title, description, status }) {
  return (
    <div className={`technology-card status-${status}`}>
      <div className="tech-header">
        <h3>{title}</h3>
        <span className={`status-badge ${status}`}>
          {status === 'completed' && '✅'}
          {status === 'in-progress' && '🔄'}
          {status === 'not-started' && '⏳'}
        </span>
      </div>
      <p>{description}</p>
      <div className="tech-footer">
        <span className="status-text">
          {status === 'completed' && 'Изучено'}
          {status === 'in-progress' && 'В процессе'}
          {status === 'not-started' && 'Не начато'}
        </span>
      </div>
    </div>
  );
}

export default TechnologyCard;