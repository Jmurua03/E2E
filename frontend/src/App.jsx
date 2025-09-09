import React, { useState } from 'react';
import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';
import "./styles.css"

function App() {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);

  if (user) return <Dashboard user={user} />;

  return register ? (
    <Register onRegister={setUser} />
  ) : (
    <Login onLogin={setUser} onShowRegister={() => setRegister(true)} />
  );
}

export default App;
