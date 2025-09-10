import React from 'react';

interface DashboardProps {
  user: string;
}

export default function Dashboard({ user }: DashboardProps) {
  return <h1>Bienvenido, {user}</h1>;
}
