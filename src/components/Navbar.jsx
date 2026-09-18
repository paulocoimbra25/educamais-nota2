import { useState } from "react";
import { NavLink } from "react-router-dom";

// Componente de navegação: controla estado de aberto/fechado do menu
// mobile (manipulação de DOM/eventos via React) e destaca o link ativo.
export default function Navbar() {
  const [aberto, setAberto] = useState(false);

  const linkClass = ({ isActive }) => (isActive ? "active" : "");

  function fecharMenu() {
    setAberto(false);
  }

  return (
    <header>
      <nav className="navbar" aria-label="Navegação principal">
        <div className="container navbar-inner">
          <NavLink to="/" className="brand" onClick={fecharMenu}>
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Logotipo EducaMais">
              <circle cx="24" cy="24" r="23" fill="#F4A300" />
              <path d="M12 20L24 14L36 20L24 26L12 20Z" fill="#14274E" />
              <path d="M18 23V30C18 30 20.5 33 24 33C27.5 33 30 30 30 30V23" stroke="#14274E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            EducaMais <span>Sítio Novo</span>
          </NavLink>

          <button
            className="nav-toggle"
            type="button"
            aria-expanded={aberto}
            aria-controls="nav-menu"
            aria-label="Abrir menu de navegação"
            onClick={() => setAberto((v) => !v)}
          >
            <span></span>
          </button>

          <ul id="nav-menu" className={`nav-links ${aberto ? "open" : ""}`}>
            <li><NavLink to="/" end className={linkClass} onClick={fecharMenu}>Início</NavLink></li>
            <li><NavLink to="/sobre" className={linkClass} onClick={fecharMenu}>Sobre o Projeto</NavLink></li>
            <li><NavLink to="/conteudos" className={linkClass} onClick={fecharMenu}>Conteúdos</NavLink></li>
            <li><NavLink to="/contato" className={linkClass} onClick={fecharMenu}>Contato</NavLink></li>
            <li><NavLink to="/sobre#ods4" className="btn-ods" onClick={fecharMenu}>ODS 4</NavLink></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
