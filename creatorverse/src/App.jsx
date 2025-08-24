import './App.css';
import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCreator from './pages/AddCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import { useState } from "react";

function App() {
  const [creators, setCreators] = useState([]);

  const handleAddCreator = (newCreator) => {
    setCreators(prevCreators => [...prevCreators, { ...newCreator, id: Date.now() }]);
  };

  return (
    <Router>
      <main className="container">
        <nav>
          <ul>
            <li><strong>Creatorverse</strong></li>
          </ul>
          <ul>
            <li><Link to="/">View All</Link></li>
            <li><Link to="/add">Add Creator</Link></li>
          </ul>
        </nav>

        <Routes>
        
          <Route path="/" element={<ShowCreators creators={creators} />} />
          
          <Route path="/add" element={<AddCreator onAddCreator={handleAddCreator} />} />

          <Route path="/view/:creatorId" element={<ViewCreator creators={creators} />} />
          <Route path="/edit/:creatorId" element={<EditCreator creators={creators} />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;