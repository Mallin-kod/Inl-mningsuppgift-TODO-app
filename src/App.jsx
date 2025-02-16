import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ToDoList from './ToDoList';
import About from './Pages/About'; 
import Navbar from './Pages/Navbar'; 

function App() {
  return (
    <Router>
      <div>

        {}
        <div className="header-container">
          <h1>ToDo</h1>
          <Navbar />
        </div>

        {}
        <div className="card">
          <Routes>
            <Route path="/" element={<ToDoList />} /> {}
            <Route path="/about" element={<About />} /> {}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
