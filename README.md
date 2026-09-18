# EducaMais Sítio Novo — Nota 2 (aplicação interativa em React)

Continuação da aplicação iniciada na Nota 1 (HTML5 + CSS3 + Bootstrap),
reorganizada em React com interatividade via JavaScript/DOM, consumo de
APIs externas (Fetch API + JSON) e arquitetura de página única (SPA).

## Como rodar localmente

```bash
npm install
npm run dev       # ambiente de desenvolvimento (http://localhost:5173)
npm run build     # gera a versão de produção na pasta dist/
npm run preview   # serve a build de produção localmente
```

## Estrutura do projeto

```
src/
  components/
    Navbar.jsx        -> menu responsivo com estado (abre/fecha no mobile)
    Footer.jsx
    QuoteWidget.jsx    -> consome API pública de frases (Fetch + JSON)
    MunicipioData.jsx  -> consome a API de Localidades do IBGE (Fetch + JSON)
  pages/
    Home.jsx
    Sobre.jsx          -> inclui o componente MunicipioData
    Conteudos.jsx      -> busca e filtro por disciplina em tempo real
    Contato.jsx        -> mural de avisos dinâmico + formulário validado
  data/
    conteudos.js
    mural.js
  App.jsx              -> rotas da SPA (react-router-dom, HashRouter)
  main.jsx             -> ponto de entrada da aplicação
```

## APIs consumidas

1. **Frases inspiradoras** — `https://raw.githubusercontent.com/kunatastic/quote-api/main/data.json`
   (arquivo JSON público no GitHub, sem necessidade de chave de API).
2. **Localidades do IBGE** — `https://servicodados.ibge.gov.br/api/v1/localidades/municipios/2111805`
   (API pública e oficial do governo brasileiro, código IBGE de Sítio Novo - MA).

## Publicação (deploy)

O projeto usa `HashRouter` e `base: './'` no `vite.config.js` justamente para
funcionar sem configuração extra em qualquer hospedagem estática:

- **Vercel / Netlify**: conectar o repositório, comando de build `npm run build`,
  diretório de publicação `dist`.
- **GitHub Pages**: `npm run build` e publicar o conteúdo de `dist/` na branch
  `gh-pages` (ex.: usando a extensão `gh-pages` do npm ou GitHub Actions).

## Equipe

- Kairo Brendo Rodrigues Marinho Lopes Silva
- Paulo Ricardo Coimbra Sousa
- Desenvolvimento Web · Prof. Me. Edilson Carlos Silva Lima
