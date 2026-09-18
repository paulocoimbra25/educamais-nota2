import { useEffect, useState } from "react";

const API_URL = "https://servicodados.ibge.gov.br/api/v1/localidades/municipios/2111805";

/**
 * Consome a API pública de Localidades do IBGE (dados abertos governamentais)
 * para exibir informações reais do município de Sítio Novo - MA, reforçando
 * o vínculo da aplicação com o contexto real da situação-problema.
 */
export default function MunicipioData() {
  const [dados, setDados] = useState(null);
  const [status, setStatus] = useState("carregando"); // carregando | ok | erro

  useEffect(() => {
    let ativo = true;
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("resposta não OK");
        return res.json();
      })
      .then((json) => {
        if (!ativo) return;
        setDados(json);
        setStatus("ok");
      })
      .catch(() => {
        if (ativo) setStatus("erro");
      });
    return () => {
      ativo = false;
    };
  }, []);

  const microrregiao = dados?.microrregiao?.nome;
  const mesorregiao = dados?.microrregiao?.mesorregiao?.nome;
  const uf = dados?.microrregiao?.mesorregiao?.UF?.sigla;
  const regiao = dados?.microrregiao?.mesorregiao?.UF?.regiao?.nome;

  return (
    <div className="card">
      <h3 className="h5">Dados abertos do município (API do IBGE)</h3>
      <p className="small">
        Consulta em tempo real à API de Localidades do IBGE, confirmando a divisão
        territorial de Sítio Novo — MA, citada na situação-problema deste projeto.
      </p>

      {status === "carregando" && <p className="status-linha">Consultando servicodados.ibge.gov.br…</p>}
      {status === "erro" && (
        <p className="status-linha">
          Não foi possível consultar a API do IBGE neste momento. Verifique sua conexão e tente recarregar a página.
        </p>
      )}

      {status === "ok" && dados && (
        <div className="municipio-grid">
          <div className="municipio-item">
            <div className="rotulo">Município</div>
            <div className="valor">{dados.nome}</div>
          </div>
          <div className="municipio-item">
            <div className="rotulo">UF</div>
            <div className="valor">{uf}</div>
          </div>
          <div className="municipio-item">
            <div className="rotulo">Microrregião</div>
            <div className="valor">{microrregiao}</div>
          </div>
          <div className="municipio-item">
            <div className="rotulo">Região</div>
            <div className="valor">{regiao}</div>
          </div>
        </div>
      )}
      {status === "ok" && (
        <p className="status-linha">Mesorregião: {mesorregiao} · Fonte: IBGE — servicodados.ibge.gov.br</p>
      )}
    </div>
  );
}
