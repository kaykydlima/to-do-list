import { ToDoProvider } from './contexts/toDoContext';
import ToDoRoutes from './routes/ToDoRoutes';
import Menu from './components/Menu';

function App() {
  return (
    <ToDoProvider>
      <div>
        <Menu />
        <ToDoRoutes />
      </div>
    </ToDoProvider>
  );
}

export default App;
