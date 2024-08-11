import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Cuevana3</h1>
      <ul>
        <li>Inicio</li>
        <li>Géneros</li>
        <li>Películas</li>
        <li>Series</li>
      </ul>
      <div>
        <input type="text" placeholder="Buscar películas..." />
        <button>Entrar</button>
        <button>Registro</button>
      </div>
    </nav>
  );
};

export default Navbar;