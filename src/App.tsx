import { TaskProvider } from './context/TaskContext';
import { Routes, Route } from 'react-router-dom';
import { Dashboard } from './components/Dashboard';
import { CompletedTasks } from './components/CompletedTasks';
import { Navigation } from './routes/Navigation';

function App() {
  return (
    <TaskProvider>
      <Navigation />
      <Routes>
      <Route path="/" element={<Dashboard />} />
        <Route path="/completed" element={<CompletedTasks />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;