import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from "./components/Card.jsx";
import AddCreator from './pages/AddCreator.jsx';
import ShowCreators from './pages/ShowCreators.jsx';
import ViewCreator from './pages/ViewCreator.jsx';
import EditCreator from './pages/EditCreator.jsx';
import { useState } from "react";

function App() {
  const [creators, setCreators] = useState([]);

  const handleAddCreator = (newCreator) => {
    // Add the new creator to the existing list in state
    setCreators(prevCreators => [...prevCreators, { ...newCreator, id: Date.now() }]);
  };
   

  return (
    <>
    <Router>
      <div>
        <Card 
        name= "Tasmia chowdhury"
        description="Cute little kitty." 
        imageUrl="https://placekitten.com/200/300" />
      </div>


        <Routes>
          <Route path="/" element={<ShowCreators />} /> 
          <Route path="/view" element={<ViewCreator />} />
          <Route path="/edit" element={<EditCreator />} />
        </Routes>

      </Router>
    </>
  )
}

export default App
