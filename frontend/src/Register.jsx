import React, { useState } from 'react';

export default function Register({ onRegister }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError('Las contraseñas no coinciden');
      return;
    }
    onRegister(username);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input
        placeholder="Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirmar Contraseña"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <button type="submit">Registrarse</button>
      {error && <p>{error}</p>}
    </form>
  );
}
