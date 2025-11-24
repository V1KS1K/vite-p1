import { Link } from 'react-router-dom';

function TechnologyCard({ technology }) {
  const { id, title, description, status } = technology;

  const statusColors = {
    'completed': 'var(--success)',
    'in-progress': 'var(--warning)',
    'not-started': 'var(--danger)'
  };

  const statusLabels = {
    'completed': '✅ Изучено',
    'in-progress': '🔄 В процессе',
    'not-started': '⏳ Не начато'
  };

  return (
    <div style={{
      borderLeft: `4px solid ${statusColors[status] || 'gray'}`,
      paddingLeft: '15px',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <h3 style={{ margin: '0 0 10px 0', color: 'var(--text-main)' }}>{title}</h3>
      </div>
      
      <p style={{ color: 'var(--text-muted)', flex: 1 }}>{description}</p>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '15px' }}>
        <span style={{ color: statusColors[status], fontSize: '0.9rem', fontWeight: 'bold' }}>
          {statusLabels[status]}
        </span>
        <Link to={`/technology/${id}`}>
          <button style={{ padding: '5px 10px', fontSize: '0.9rem' }}>Info →</button>
        </Link>
      </div>
    </div>
  );
}

export default TechnologyCard;