import './App.css';
import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AddCreator from './pages/AddCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import { useState, useEffect } from "react";
import { supabase } from "./client.js";

function App() {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase
        .from('creators') 
        .select('*');

      if (error) {
        console.error('Error fetching creators:', error);
      } else {
        setCreators(data);
      }
    };
    fetchCreators();
  }, []);

  const handleAddCreator = async (newCreator) => {
    const { data, error } = await supabase
      .from('creators') 
      .insert([newCreator])
      .select();

    if (error) {
      console.error('Error adding creator:', error);
    } else if (data) {
     
      setCreators(prevCreators => [...prevCreators, data[0]]);
    }
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