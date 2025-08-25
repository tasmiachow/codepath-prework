import './App.css';
import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from './components/Hero.jsx';
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

  const handleUpdateCreator = async (creatorId, updatedCreator) => {
    const { error } = await supabase
      .from('creators')
      .update(updatedCreator)
      .eq('id', creatorId);

    if (error) {
      console.error('Error updating creator:', error);
    } else {
      setCreators(prevCreators => 
        prevCreators.map(c => (c.id === creatorId ? { ...c, ...updatedCreator } : c))
      );
    }
  };

  const handleDeleteCreator = async (creatorId) => {
    const { error } = await supabase
      .from('creators')
      .delete()
      .eq('id', creatorId);

    if (error) {
      console.error('Error deleting creator:', error);
    } else {
      setCreators(prevCreators => prevCreators.filter(c => c.id !== creatorId));
    }
  };

  return (
    <Router>
      <main className="container">
        <nav>
          <ul>
            <li><strong> <Link to="/"> Creatorverse </Link></strong></li>
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
          <Route 
            path="/edit/:creatorId" 
            element={<EditCreator creators={creators} onUpdateCreator={handleUpdateCreator} onDeleteCreator={handleDeleteCreator} />} 
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;