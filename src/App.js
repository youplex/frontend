
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <div className="App">
      <Home />
      
    </div>
  );
}

export default App;
