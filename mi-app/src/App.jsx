
import GameHeader from './components/GameHeader';
import PlayerCard from './components/PlayerCard';
import MissionCard from './components/MissionCard';

function App() {
  return (
    <main
      style={{
        display: 'flex',
        gap: '20px',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '20px'
      }}
    >
      <GameHeader />

      <div
        style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          marginTop: '20px'
        }}
      >
        
<PlayerCard
  nombre="🧛 Vampiro"
  nivel={4}
  vidas="❤️❤️❤️"
/>

<PlayerCard
  nombre="🧚 Hada"
  nivel={2}
  vidas="❤️❤️"
/>

<PlayerCard
  nombre="🐉 Dragón"
  nivel={10}
  vidas="❤️❤️❤️❤️"
/>

<PlayerCard
  nombre="🧟 Zombie"
  nivel={3}
  vidas="❤️"
/>

      </div>

      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexWrap: 'wrap',
          justifyContent: 'center',
          width: '100%',
          marginTop: '20px'
        }}
      >
        <MissionCard
          nombre="La Fortaleza Negra"
          descripcion="Penetra en las ruinas malditas para recuperar las cenizas del rey caído antes de que los nigromantes completen el ritual."
          simbolo="🏰"
        />

        <MissionCard
          nombre="Misión del bosque"
          descripcion="Explora el bosque y encuentra el tesoro perdido."
          simbolo="🌳"
        />

        <MissionCard
          nombre="Misión de combate"
          descripcion="Derrota a los enemigos y gana experiencia."
          simbolo="⚔️"
        />

        <MissionCard
          nombre="Misión legendaria"
          descripcion="Encuentra el artefacto mágico."
          simbolo="🏆"
        />
      </div>
    </main>
  );
}

export default App;
