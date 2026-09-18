import { useMemo, useState } from "react";
import conteudosBase from "../data/conteudos.js";

const DISCIPLINAS = ["Todas", "Matemática", "Português", "Ciências", "História", "Geografia", "Inglês"];

export default function Conteudos() {
  const [busca, setBusca] = useState("");
  const [disciplina, setDisciplina] = useState("Todas");

  // Filtragem reativa: recalcula a lista exibida sempre que o texto da busca
  // ou a disciplina selecionada mudam — interatividade via JS + manipulação
  // do DOM feita pelo React a partir do estado.
  const resultados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return conteudosBase.filter((item) => {
      const bateDisciplina = disciplina === "Todas" || item.disciplina === disciplina;
      const bateTexto =
        termo === "" ||
        item.titulo.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo);
      return bateDisciplina && bateTexto;
    });
  }, [busca, disciplina]);

  function limparFiltros() {
    setBusca("");
    setDisciplina("Todas");
  }

  return (
    <>
      <section className="hero" style={{ padding: "3.5rem 0" }} aria-labelledby="titulo-conteudos">
        <div className="container">
          <span className="badge-ods">Biblioteca de conteúdos</span>
          <h1 id="titulo-conteudos">Materiais de apoio por disciplina</h1>
          <p className="lead">
            Agora com busca e filtro funcionando em tempo real: digite uma palavra-chave
            ou escolha uma disciplina para atualizar a lista instantaneamente.
          </p>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="titulo-busca">
        <div className="container">
          <h2 id="titulo-busca" className="visually-hidden">Busca e filtros de conteúdo</h2>

          <form className="filtros-form" role="search" aria-label="Buscar conteúdos" onSubmit={(e) => e.preventDefault()}>
            <div className="campo" style={{ flex: 2 }}>
              <label htmlFor="busca">Buscar por título ou palavra-chave</label>
              <input
                id="busca"
                className="input"
                type="search"
                placeholder="Ex.: frações, verbos, sistema solar…"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>
            <div className="campo">
              <label htmlFor="serie">Filtrar por disciplina</label>
              <select id="serie" value={disciplina} onChange={(e) => setDisciplina(e.target.value)}>
                {DISCIPLINAS.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <button type="button" className="btn btn-outline" onClick={limparFiltros}>
              Limpar filtros
            </button>
          </form>

          <div className="chips" role="group" aria-label="Filtrar por disciplina">
            {DISCIPLINAS.map((d) => (
              <button
                key={d}
                type="button"
                className={`chip ${disciplina === d ? "ativo" : ""}`}
                onClick={() => setDisciplina(d)}
                aria-pressed={disciplina === d}
              >
                {d}
              </button>
            ))}
          </div>

          <p className="small" style={{ marginBottom: "1rem" }}>
            {resultados.length} {resultados.length === 1 ? "resultado encontrado" : "resultados encontrados"}
          </p>

          {resultados.length === 0 ? (
            <div className="empty-state">
              <p><strong>Nenhum conteúdo encontrado.</strong></p>
              <p className="small">Tente outra palavra-chave ou escolha "Todas" nas disciplinas.</p>
            </div>
          ) : (
            <div className="conteudo-grid">
              {resultados.map((item) => (
                <article className="conteudo-card" key={item.id}>
                  <div className="conteudo-card-top" style={{ background: item.cor }}></div>
                  <div className="conteudo-card-body">
                    <span className="badge-serie">{item.serie}</span>
                    <h3 className="h6" style={{ fontSize: "1.05rem" }}>{item.titulo}</h3>
                    <p className="small">{item.descricao}</p>
                    <a href="#" className="link-acessar" onClick={(e) => e.preventDefault()}>
                      Acessar material →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
