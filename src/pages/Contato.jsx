import { useState } from "react";
import muralInicial from "../data/mural.js";

const PERFIS = ["Aluno(a)", "Professor(a)", "Pai/Responsável", "Outro"];

export default function Contato() {
  // --- Mural de avisos: estado dinâmico, adicionar novo aviso via evento ---
  const [avisos, setAvisos] = useState(muralInicial);
  const [novoAviso, setNovoAviso] = useState("");

  function adicionarAviso(e) {
    e.preventDefault();
    const texto = novoAviso.trim();
    if (!texto) return;
    const novo = {
      id: Date.now(),
      categoria: "Comunicado",
      titulo: texto,
      texto: "Publicado agora pela equipe da escola.",
    };
    setAvisos((lista) => [novo, ...lista]);
    setNovoAviso("");
  }

  function removerAviso(id) {
    setAvisos((lista) => lista.filter((a) => a.id !== id));
  }

  // --- Formulário de contato: validação client-side com eventos ---
  const [form, setForm] = useState({ nome: "", email: "", perfil: PERFIS[0], mensagem: "" });
  const [erros, setErros] = useState({});
  const [enviado, setEnviado] = useState(false);

  function validar(valores) {
    const novosErros = {};
    if (valores.nome.trim().length < 3) {
      novosErros.nome = "Informe seu nome completo (mínimo 3 caracteres).";
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.email);
    if (!emailValido) {
      novosErros.email = "Informe um e-mail válido.";
    }
    if (valores.mensagem.trim().length < 10) {
      novosErros.mensagem = "Escreva uma mensagem com pelo menos 10 caracteres.";
    }
    return novosErros;
  }

  function atualizarCampo(campo, valor) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function enviarFormulario(e) {
    e.preventDefault();
    const novosErros = validar(form);
    setErros(novosErros);
    if (Object.keys(novosErros).length === 0) {
      setEnviado(true);
      setForm({ nome: "", email: "", perfil: PERFIS[0], mensagem: "" });
      setTimeout(() => setEnviado(false), 6000);
    }
  }

  return (
    <>
      <section className="hero" style={{ padding: "3.5rem 0" }} aria-labelledby="titulo-contato">
        <div className="container">
          <span className="badge-ods">Fale com a gente</span>
          <h1 id="titulo-contato">Mural de avisos e contato</h1>
          <p className="lead">
            Acompanhe os comunicados da escola e envie sua mensagem. Nesta versão, o mural e o
            formulário já funcionam com JavaScript, sem precisar recarregar a página.
          </p>
        </div>
      </section>

      <section className="section section-clara" aria-labelledby="titulo-mural-form">
        <div className="container">
          <h2 id="titulo-mural-form" className="visually-hidden">Mural de avisos e formulário de contato</h2>
          <div className="grid-2" style={{ alignItems: "start" }}>
            {/* MURAL */}
            <div>
              <p className="section-tag">Comunicados</p>
              <h3 className="h5" style={{ marginBottom: "1rem" }}>Mural de avisos</h3>

              {avisos.length === 0 && (
                <p className="small">Nenhum aviso publicado no momento.</p>
              )}

              {avisos.map((a) => (
                <div className="mural-item" key={a.id}>
                  <span className="badge-serie">{a.categoria}</span>
                  <p style={{ marginBottom: ".2rem", fontWeight: 600 }}>{a.titulo}</p>
                  <p className="small" style={{ marginBottom: ".4rem" }}>{a.texto}</p>
                  <button
                    type="button"
                    onClick={() => removerAviso(a.id)}
                    className="small"
                    style={{ background: "none", border: "none", color: "#C0392B", padding: 0, textDecoration: "underline" }}
                  >
                    Remover
                  </button>
                </div>
              ))}

              <form className="form-add-aviso" onSubmit={adicionarAviso} aria-label="Adicionar novo aviso">
                <input
                  className="input"
                  type="text"
                  placeholder="Escrever novo aviso rápido…"
                  value={novoAviso}
                  onChange={(e) => setNovoAviso(e.target.value)}
                  aria-label="Texto do novo aviso"
                />
                <button type="submit" className="btn btn-block-azul">Publicar</button>
              </form>

              <div className="card" style={{ marginTop: "1.5rem" }}>
                <h4 className="h6 section-tag">Secretaria Municipal de Educação</h4>
                <p className="small" style={{ marginBottom: ".2rem" }}>Sítio Novo — MA</p>
                <p className="small" style={{ marginBottom: ".2rem" }}>Atendimento: segunda a sexta, 8h às 14h</p>
                <p className="small" style={{ marginBottom: 0 }}>E-mail institucional: contato@educamais.exemplo.br</p>
              </div>
            </div>

            {/* FORMULÁRIO DE CONTATO */}
            <div>
              <p className="section-tag">Envie sua mensagem</p>
              <h3 className="h5" style={{ marginBottom: "1rem" }}>Canal de contato</h3>

              {enviado && (
                <div className="feedback-sucesso" role="status">
                  Mensagem enviada com sucesso! Em breve entraremos em contato.
                </div>
              )}

              <form className="card form-contato" onSubmit={enviarFormulario} aria-label="Formulário de contato" noValidate>
                <div className="campo">
                  <label htmlFor="nome">Nome completo</label>
                  <input
                    id="nome"
                    className="input"
                    type="text"
                    value={form.nome}
                    onChange={(e) => atualizarCampo("nome", e.target.value)}
                    aria-invalid={!!erros.nome}
                    aria-describedby={erros.nome ? "erro-nome" : undefined}
                  />
                  {erros.nome && <span id="erro-nome" className="erro-campo">{erros.nome}</span>}
                </div>

                <div className="campo">
                  <label htmlFor="email">E-mail</label>
                  <input
                    id="email"
                    className="input"
                    type="email"
                    value={form.email}
                    onChange={(e) => atualizarCampo("email", e.target.value)}
                    aria-invalid={!!erros.email}
                    aria-describedby={erros.email ? "erro-email" : undefined}
                  />
                  {erros.email && <span id="erro-email" className="erro-campo">{erros.email}</span>}
                </div>

                <div className="campo">
                  <label htmlFor="perfil">Você é...</label>
                  <select id="perfil" value={form.perfil} onChange={(e) => atualizarCampo("perfil", e.target.value)}>
                    {PERFIS.map((p) => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="campo">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    className="input"
                    rows={4}
                    value={form.mensagem}
                    onChange={(e) => atualizarCampo("mensagem", e.target.value)}
                    aria-invalid={!!erros.mensagem}
                    aria-describedby={erros.mensagem ? "erro-mensagem" : undefined}
                  />
                  {erros.mensagem && <span id="erro-mensagem" className="erro-campo">{erros.mensagem}</span>}
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
                  Enviar mensagem
                </button>
                <p className="small" style={{ marginTop: ".8rem", marginBottom: 0 }}>
                  A validação ocorre no navegador (client-side). O envio real para um
                  servidor poderá ser integrado nas próximas etapas do projeto.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
