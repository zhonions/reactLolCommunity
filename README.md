# Mancos Gaming Community

Website da comunidade Mancos Gaming, desenvolvido com React, TypeScript e Vite. Inclui páginas de notícias, torneios, comunidade, apresentação e autenticação visual.

## Tecnologias

- React 18 e TypeScript
- Vite 5
- React Router
- Sass/SCSS
- Font Awesome
- ESLint

## Requisitos

- Node.js 18.17 ou superior
- npm

## Começar

```bash
npm ci
npm run dev
```

O servidor de desenvolvimento fica disponível, por defeito, em `http://localhost:5173`.

No Windows, caso o PowerShell bloqueie `npm.ps1`, usa:

```powershell
npm.cmd run dev
```

## Comandos

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento. |
| `npm run lint` | Executa as regras de qualidade do código. |
| `npm run build` | Valida TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Pré-visualiza o build de produção. |
| `npm run deploy` | Publica o conteúdo de `dist/` no GitHub Pages. |

## Estrutura

```text
src/
├── assets/       # Imagens e outros recursos estáticos
├── components/   # Componentes reutilizáveis, como Navbar e SlideShow
├── pages/        # Páginas da aplicação
├── routes/       # Configuração das rotas
├── index.scss    # Estilos globais
└── main.tsx      # Ponto de entrada
```

## Rotas atuais

- `/` — homepage com vídeo de apresentação
- `/account` — login e registo (interface visual)
- `/about` — apresentação
- `/news` — notícias
- `/tournament` — torneios, equipas e jogadores
- `/community` — comunidade, equipas e jogadores

## Qualidade e boas práticas

- Usar `Link` do React Router para navegação interna.
- Manter componentes pequenos e estilos SCSS junto à respetiva página ou componente.
- Importar recursos locais no TypeScript em vez de usar caminhos absolutos para `src/`.
- Incluir texto alternativo em imagens relevantes.
- Executar `npm run lint` e `npm run build` antes de criar um commit.
- Não versionar `node_modules`, `dist`, ficheiros de log ou configurações locais.

O GitHub Actions executa `npm ci`, lint e build em pull requests para `main`.

## Deploy

O projeto está preparado para GitHub Pages no repositório `reactLolCommunity`. A configuração de produção usa a base `/reactLolCommunity/`.

```bash
npm run deploy
```

## Contribuir

Consulta [CONTRIBUTING.md](CONTRIBUTING.md) para o fluxo de trabalho e convenções do projeto.
