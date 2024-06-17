import React from 'react';
import RouterCustom from './router';
import HomePage from './pages/user/homepage';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
          <RouterCustom/>
      </div>
    </Router>
  );
}

export default App;
