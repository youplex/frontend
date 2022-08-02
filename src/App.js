
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Switch
} from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
