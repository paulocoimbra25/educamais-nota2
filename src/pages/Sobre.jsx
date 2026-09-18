import MunicipioData from "../components/MunicipioData.jsx";

export default function Sobre() {
  return (
    <>
      <section className="hero" style={{ padding: "3.5rem 0" }} aria-labelledby="titulo-sobre">
        <div className="container">
          <span className="badge-ods">Sobre o projeto</span>
          <h1 id="titulo-sobre">Situação-problema, público-alvo e objetivos</h1>
          <p className="lead">
            Entenda a necessidade que motivou o EducaMais e o que a plataforma oferece à
            comunidade escolar de Sítio Novo — MA.
          </p>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="titulo-problema">
        <div className="container grid-2">
          <div>
            <p className="section-tag">Situação-problema</p>
            <h2 id="titulo-problema">O desafio observado</h2>
            <p>
              A rede pública municipal de ensino de Sítio Novo — MA, especialmente em escolas
              de zonas rurais e periféricas, enfrenta dificuldades relacionadas ao acesso a
              materiais de apoio pedagógico complementares às aulas presenciais.
            </p>
            <p>
              Soma-se a isso a falta de um canal digital único de comunicação entre escola e
              família, o que gera perda de informação e dificulta o acompanhamento do
              desempenho escolar pelos responsáveis.
            </p>
            <p>
              Esse cenário contribui para o risco de evasão escolar, problema relacionado
              diretamente às metas do <strong>ODS 4 — Educação de Qualidade</strong>.
            </p>
          </div>
          <div id="ods4" className="card">
            <span className="badge-ods" style={{ alignSelf: "flex-start" }}>ODS 4</span>
            <h3 className="h5">Educação de Qualidade</h3>
            <p className="small">
              "Assegurar a educação inclusiva, equitativa e de qualidade, e promover
              oportunidades de aprendizagem ao longo da vida para todos." Um dos 17 Objetivos
              de Desenvolvimento Sustentável da Agenda 2030 da ONU e eixo central do EducaMais.
            </p>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titulo-municipio">
        <div className="container">
          <p className="section-tag text-center">Consumo de API</p>
          <h2 id="titulo-municipio" className="text-center">Dados reais do município</h2>
          <div style={{ maxWidth: "760px", margin: "1.5rem auto 0" }}>
            <MunicipioData />
          </div>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="titulo-publico">
        <div className="container">
          <p className="section-tag text-center">Para quem é</p>
          <h2 id="titulo-publico" className="text-center">Público-alvo</h2>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            <div className="card text-center">
              <h3 className="h6">Alunos</h3>
              <p className="small">Estudantes do ensino fundamental e médio da rede pública municipal.</p>
            </div>
            <div className="card text-center">
              <h3 className="h6">Professores</h3>
              <p className="small">Educadores que organizam conteúdos, comunicados e calendário de atividades.</p>
            </div>
            <div className="card text-center">
              <h3 className="h6">Pais e responsáveis</h3>
              <p className="small">Famílias que acompanham o desempenho escolar e recebem avisos.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="titulo-objetivo">
        <div className="container grid-2">
          <div>
            <p className="section-tag">Propósito</p>
            <h2 id="titulo-objetivo">Objetivo da aplicação</h2>
            <p>
              Disponibilizar uma plataforma web centralizada, acessível, responsiva e agora
              interativa, que reúna conteúdos de apoio pedagógico, informações escolares e
              canais de comunicação entre escola e família — em consonância com o ODS 4.
            </p>
          </div>
          <div>
            <div className="timeline-item">
              <span className="badge-time">Concluída</span>
              <h3 className="h6" style={{ marginTop: ".4rem" }}>Nota 1 — estrutura inicial</h3>
              <p className="small">HTML5, CSS3 e Bootstrap: estrutura, identidade visual e responsividade.</p>
            </div>
            <div className="timeline-item" style={{ borderColor: "var(--laranja)" }}>
              <span className="badge-time" style={{ background: "#FFF2DB", color: "var(--laranja-escuro)" }}>Atual</span>
              <h3 className="h6" style={{ marginTop: ".4rem" }}>Nota 2 — interatividade (React)</h3>
              <p className="small">JavaScript, DOM, eventos, Fetch API + JSON e organização em componentes React (SPA).</p>
            </div>
            <div className="timeline-item" style={{ borderColor: "var(--verde-sucesso)" }}>
              <h3 className="h6">Nota 3 — apresentação</h3>
              <p className="small">Publicação em serviço de hospedagem e apresentação presencial no polo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="titulo-func">
        <div className="container">
          <p className="section-tag text-center">Planejamento</p>
          <h2 id="titulo-func" className="text-center">Funcionalidades da aplicação</h2>
          <div style={{ overflowX: "auto" }}>
            <table className="tabela-func">
              <caption>Status das funcionalidades planejadas para o projeto.</caption>
              <thead>
                <tr>
                  <th scope="col">Funcionalidade</th>
                  <th scope="col">Descrição</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Biblioteca de conteúdos</td>
                  <td>Cards de materiais organizados por disciplina e série, com busca e filtros.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
                <tr>
                  <td>Busca e filtros</td>
                  <td>Campo de busca e chips de filtro por disciplina, reativos em tempo real.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
                <tr>
                  <td>Mural de avisos</td>
                  <td>Lista de comunicados escolares, com opção de adicionar novos avisos.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
                <tr>
                  <td>Formulário de contato</td>
                  <td>Campos para nome, e-mail e mensagem, com validação client-side.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
                <tr>
                  <td>Consumo de dados externos</td>
                  <td>Frases (GitHub raw JSON) e dados do município via API do IBGE.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
                <tr>
                  <td>Componentização e SPA</td>
                  <td>Aplicação em React, com React Router e componentes reutilizáveis.</td>
                  <td><span className="badge-time" style={{ background: "#E7F6EC", color: "#1E5B29" }}>Funcional (Nota 2)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
