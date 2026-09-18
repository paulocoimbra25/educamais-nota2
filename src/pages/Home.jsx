import { Link } from "react-router-dom";
import QuoteWidget from "../components/QuoteWidget.jsx";

export default function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-titulo">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="badge-ods">ODS 4 · Educação de Qualidade</span>
              <h1 id="hero-titulo">Aproximando escola, família e aprendizagem em Sítio Novo</h1>
              <p className="lead">
                O EducaMais reúne, em um só lugar, conteúdos de apoio pedagógico, avisos
                escolares e canais de comunicação para alunos, professores e famílias da
                rede pública municipal — agora em uma aplicação interativa.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "1.2rem" }}>
                <Link to="/conteudos" className="btn btn-primary">Explorar conteúdos</Link>
                <Link to="/sobre" className="btn btn-outline">Conhecer o projeto</Link>
              </div>
            </div>
            <QuoteWidget />
          </div>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="pilares-titulo">
        <div className="container">
          <p className="section-tag text-center">Como o projeto ajuda</p>
          <h2 id="pilares-titulo" className="text-center">Três pilares do EducaMais</h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <div className="card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                </svg>
              </div>
              <h3 className="h5">Acesso a conteúdos</h3>
              <p>Biblioteca digital organizada por disciplina e série, com busca e filtros funcionais.</p>
            </div>
            <div className="card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              </div>
              <h3 className="h5">Comunicação escola-família</h3>
              <p>Mural de avisos dinâmico e formulário de contato com validação em tempo real.</p>
            </div>
            <div className="card">
              <div className="icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M3 3v18h18" />
                  <path d="M7 15l4-4 3 3 5-6" />
                </svg>
              </div>
              <h3 className="h5">Dados abertos</h3>
              <p>Consumo de APIs públicas (frases e IBGE) para enriquecer a experiência com dados reais.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section text-center" aria-labelledby="cta-titulo">
        <div className="container">
          <h2 id="cta-titulo">Conheça a biblioteca de conteúdos</h2>
          <p style={{ maxWidth: "38rem", margin: "0 auto 1.5rem" }}>
            Agora com busca e filtros por disciplina funcionando de verdade, direto no navegador.
          </p>
          <Link to="/conteudos" className="btn btn-block-azul">Ver conteúdos</Link>
        </div>
      </section>
    </>
  );
}
