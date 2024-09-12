import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Resetpass from './Components/Resetpass';
import Welcome from './Components/Welcome';
import Dashboard from './Components/Dashboard';
import Cameradrones from './Pages/Cameradrones';
import Handheld from './Pages/Handheld';
import Power from './Pages/Power';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpass" element={<Resetpass />} />
          <Route path="/welcome" element={<Welcome />} />

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="cameradrones" element={<Cameradrones />} />
            <Route path="handheld" element={<Handheld />} />
            <Route path="power" element={<Power />} />
          </Route>

          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
