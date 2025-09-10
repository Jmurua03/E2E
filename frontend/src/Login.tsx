import React, { useState } from 'react';
import './styles.css';

interface LoginProps {
  onLogin: (user: string) => void;
  onShowRegister: () => void;
}

export default function Login({ onLogin, onShowRegister }: LoginProps) {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
    if (res.ok) {
      const data = await res.json();
      onLogin(data.username);
    } else {
      setError('Usuario o contraseña incorrecta');
    }
  };

  return (
    <>
      <h1>E2E Testing</h1>
      <div className="logInDiv">
        <form className="logInForm" onSubmit={handleSubmit}>
          <h2>LogIn</h2>
          <input
            placeholder="Usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <p></p>
          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p></p>
          <button type="submit">Ingresar</button>
          <button
            type="button"
            onClick={onShowRegister}
            style={{ marginTop: '10px' }}
          >
            Registrarse
          </button>
          {error && <p>{error}</p>}
        </form>
      </div>
    </>
  );
}
