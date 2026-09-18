import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Sobre from "./pages/Sobre.jsx";
import Conteudos from "./pages/Conteudos.jsx";
import Contato from "./pages/Contato.jsx";

// Arquitetura SPA: HashRouter garante navegação entre "páginas" sem
// recarregar o documento e funciona em qualquer hospedagem estática
// (GitHub Pages, Netlify, Vercel) sem configuração extra de rotas.
export default function App() {
  return (
    <HashRouter>
      <a href="#conteudo-principal" className="skip-link">Pular para o conteúdo principal</a>
      <Navbar />
      <main id="conteudo-principal">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/conteudos" element={<Conteudos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  );
}
