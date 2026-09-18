export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid-3">
          <div>
            <h5>EducaMais Sítio Novo</h5>
            <p className="small" style={{ color: "#B9C2D9" }}>
              Plataforma web de apoio educacional desenvolvida como projeto acadêmico,
              relacionada ao ODS 4 — Educação de Qualidade.
            </p>
          </div>
          <div>
            <h5>Navegação</h5>
            <ul>
              <li><a href="/">Início</a></li>
              <li><a href="/sobre">Sobre o Projeto</a></li>
              <li><a href="/conteudos">Conteúdos</a></li>
              <li><a href="/contato">Contato</a></li>
            </ul>
          </div>
          <div className="equipe-badge">
            <h5>Equipe</h5>
            <p className="small">Kairo Brendo Rodrigues Marinho Lopes Silva</p>
            <p className="small">Paulo Ricardo Coimbra Sousa</p>
            <p className="small">Desenvolvimento Web · Prof. Me. Edilson Carlos Silva Lima</p>
          </div>
        </div>
        <hr />
        <p className="copy">
          © 2026 EducaMais Sítio Novo — Projeto acadêmico, UEMANET/UEMA. Nota 2 — versão interativa (React + Fetch API).
        </p>
      </div>
    </footer>
  );
}
