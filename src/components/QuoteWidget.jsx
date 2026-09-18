import { useEffect, useState } from "react";

const API_URL = "https://raw.githubusercontent.com/kunatastic/quote-api/main/data.json";

/**
 * Consome uma API pública via Fetch API, trata o JSON recebido (um array de
 * frases) e sorteia uma frase para exibir — usada como "frase inspiradora do
 * dia" na página inicial. Demonstra fetch + tratamento de JSON + estados de
 * carregamento/erro.
 */
export default function QuoteWidget() {
  const [frases, setFrases] = useState([]);
  const [atual, setAtual] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    let ativo = true;
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error("Falha na resposta da API de frases.");
        return res.json();
      })
      .then((dados) => {
        if (!ativo) return;
        setFrases(dados);
        setAtual(dados[Math.floor(Math.random() * dados.length)]);
        setErro(null);
      })
      .catch((e) => {
        if (ativo) setErro(e.message);
      })
      .finally(() => {
        if (ativo) setCarregando(false);
      });
    return () => {
      ativo = false;
    };
  }, []);

  function sortearOutra() {
    if (frases.length === 0) return;
    let nova = atual;
    while (frases.length > 1 && nova === atual) {
      nova = frases[Math.floor(Math.random() * frases.length)];
    }
    setAtual(nova);
  }

  return (
    <div className="quote-box" aria-live="polite">
      <p className="section-tag" style={{ color: "#F4A300", marginBottom: ".4rem" }}>
        Frase inspiradora do dia
      </p>

      {carregando && <p>Carregando frase da API…</p>}

      {erro && !carregando && (
        <p className="small" style={{ color: "#FFD3D3" }}>
          Não foi possível carregar a frase agora ({erro}). Tente novamente em instantes.
        </p>
      )}

      {!carregando && !erro && atual && (
        <>
          <p className="frase">“{atual.text}”</p>
          <p className="autor">— {atual.author}</p>
        </>
      )}

      <button type="button" onClick={sortearOutra} disabled={carregando || frases.length === 0}>
        Ver outra frase
      </button>
    </div>
  );
}
