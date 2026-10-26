
import './MissionCard.css';

function MissionCard({ nombre, descripcion, emoji }) {
  return (
    <div className="mission-card">
      <div className="mission-emoji">{emoji}</div>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
    </div>
  );
}

export default MissionCard;
