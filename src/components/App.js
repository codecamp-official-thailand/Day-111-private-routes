import React, { useState } from 'react';
import './App.css';
import PrivateRoutes from './private-routes/PrivateRoutes';

function App() {
  return (
    <div className="App">
      <PrivateRoutes role="admin" />
    </div>
  );
}

export default App;
