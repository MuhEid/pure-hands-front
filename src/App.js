import { Routes, Route } from 'react-router-dom';
import About from './components/routes/About';
import Home from './components/routes/Home';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
