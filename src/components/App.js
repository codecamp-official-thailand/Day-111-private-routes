import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './private-routes/PrivateRoutes';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      {/* <PrivateRoutes role="admin" /> */}
      <Register />
    </div>
  );
}

export default App;
