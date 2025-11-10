import './ProgressHeader.css';

function ProgressHeader({ technologies }) {
  const total = technologies.length;
  const completed = technologies.filter(tech => tech.status === 'completed').length;
  const inProgress = technologies.filter(tech => tech.status === 'in-progress').length;
  const notStarted = technologies.filter(tech => tech.status === 'not-started').length;
  
  const progressPercent = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-header">
      <h2>Мой прогресс изучения</h2>
      
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progressPercent}%` }}
        >
          <span className="progress-text">{progressPercent}%</span>
        </div>
      </div>
      
      <div className="stats">
        <div className="stat-item">
          <span className="stat-number completed">{completed}</span>
          <span className="stat-label">Изучено</span>
        </div>
        <div className="stat-item">
          <span className="stat-number in-progress">{inProgress}</span>
          <span className="stat-label">В процессе</span>
        </div>
        <div className="stat-item">
          <span className="stat-number not-started">{notStarted}</span>
          <span className="stat-label">Не начато</span>
        </div>
        <div className="stat-item">
          <span className="stat-number total">{total}</span>
          <span className="stat-label">Всего</span>
        </div>
      </div>
    </div>
  );
}

export default ProgressHeader;