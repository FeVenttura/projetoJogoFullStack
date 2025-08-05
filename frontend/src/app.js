import React, { useState, useEffect } from 'react';
import Login from './pages/login';
import Game from './pages/game';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('usuario');
    if (user) setIsLoggedIn(true);
  }, []);

  const handleLogin = () => setIsLoggedIn(true);

  return (
    <div className="App">
      {isLoggedIn ? <Game /> : <Login onLogin={handleLogin} />}
    </div>
  );
}

export default App;
