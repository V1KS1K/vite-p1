import './App.css';
import Greeting from './Greeting';
import UserCard from './UserCard';
import TaskList from './TaskList';
import TechnologyCard from './components/TechnologyCard';
import ProgressHeader from './components/ProgressHeader';
import { useState } from 'react';

function App() {
  const [technologies, setTechnologies] = useState([
    { 
      id: 1, 
      title: 'React Components', 
      description: 'Unreal in fortenite', 
      status: 'completed' 
    },
    { 
      id: 2, 
      title: 'JSX Syntax', 
      description: '1m $', 
      status: 'in-progress' 
    },
    { 
      id: 3, 
      title: 'State Management', 
      description: 'Стать богаче илона маска', 
      status: 'not-started' 
    },
    { 
      id: 4, 
      title: 'Props System', 
      description: 'полететь в черную дыру', 
      status: 'not-started' 
    },
    { 
      id: 5, 
      title: 'Event Handling', 
      description: 'Посмотреть наруто и ванпис за 1 присед', 
      status: 'not-started' 
    }
  ]);

  return (
    <div className="App">
      <Greeting />
      
      <ProgressHeader technologies={technologies} />
      
      <div className="technologies-section">
        <h2>Дорожная карта изучения</h2>
        {technologies.map(tech => (
          <TechnologyCard
            key={tech.id}
            title={tech.title}
            description={tech.description}
            status={tech.status}
          />
        ))}
      </div>

      <UserCard
        name="Иван Иванов"
        role="Администратор"
        avatarUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
        isOnline={true}
      />

      <TaskList />
    </div>
  );
}

export default App;