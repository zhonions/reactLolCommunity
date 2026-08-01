# Contribuir

## Antes de começar

1. Instala as dependências com `npm ci`.
2. Cria um branch a partir de `main`.
3. Mantém cada alteração focada numa tarefa.

## Convenções

- Usa TypeScript e evita `any`.
- Cria componentes reutilizáveis em `src/components`.
- Mantém cada página em `src/pages/<PageName>` com o respetivo SCSS.
- Usa `Link` ou `NavLink` para rotas internas; evita `<a href>` para navegação da aplicação.
- Usa nomes claros em inglês para ficheiros, componentes e variáveis de código.
- Adiciona `alt` descritivo a imagens de conteúdo.
- Não coloques segredos, ficheiros gerados, `node_modules` ou `dist` no Git.

## Validação obrigatória

Antes de abrir uma pull request ou criar um commit, executa:

```bash
npm run lint
npm run build
```

## Pull requests

- Descreve a alteração e como a testaste.
- Inclui imagens quando houver alterações visuais.
- Mantém o pull request pequeno e direcionado.
- Aguarda a execução bem-sucedida do workflow de CI.
