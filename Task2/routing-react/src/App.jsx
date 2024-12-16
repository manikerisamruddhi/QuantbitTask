import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';


const App = () => {
  return (
<Router>
      <Routes>
       
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;
