# 📚 ArtigosNews

Artigos ficticios para fixar o aprendizado com **Next.js** e **TypeScript**, aqui conseguimos visualizar e explorar artigos criados manualmente no projeto.  
O objetivo é servir como um portal simples de notícias/artigos, com interface responsiva e organizada em **cards**.



## 🧱 Estrutura do Projeto

src/
├── app/
│ ├── artigos/ # Rotas dinâmicas para cada artigo
│ │ └── [slug]/page.tsx # Página de detalhes do artigo
│ ├── components/ # Componentes reutilizáveis (Header, Footer, Grid, Card, Title)
│ ├── types/ # Tipos (TypeScript)
│ ├── globals.css # Estilos globais
│ └── layout.tsx # Layout raiz (com Header e Footer)
├── public/ # Imagens usadas nos artigos

markdown
Copiar código

---

## ✨ Funcionalidades

✅ **Listagem de artigos** em grade  
✅ **Página de detalhes** com título, imagem, resumo e conteúdo  
✅ **Roteamento dinâmico** usando App Router do Next.js  
✅ **Botão de voltar** para retornar à lista principal  
✅ **Responsividade** para desktop, tablet e mobile  
✅ **Componentização** (Card, Grid, Title, Header, Footer)  
✅ **Estilização com CSS Modules**

---

## 🛠 Tecnologias Utilizadas

- [Next.js 15](https://nextjs.org/) — App Router + rotas dinâmicas
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [Google Fonts](https://fonts.google.com/) (Fjalla One)
- **Static Site Generation** com `generateStaticParams` e `generateMetadata`

---

## 🚀 Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/jonatasmirand/artigosnews
   cd artigosnews
Instale as dependências

bash
Copiar código
npm install
# ou
yarn
Rode o servidor de desenvolvimento

bash
Copiar código
npm run dev
Acesse no navegador

arduino
Copiar código
http://localhost:3000


## 📦 Scripts Disponíveis

Script	Descrição
dev	Inicia o servidor de desenvolvimento
build	Gera a versão de produção
start	Inicia o app em modo produção
lint	Executa o linter (se configurado)

##  📸 Componentes Principais

Card → Renderiza cada artigo (imagem, título, autor, data, resumo)

Grid → Layout em grid para listar os artigos

Title → Título centralizado das seções

Header / Footer → Cabeçalho e rodapé fixos

DetailsArtigo → Página de detalhe de cada artigo, com generateMetadata para SEO



## 📄 Licença

Distribuído sob a licença MIT.
Sinta-se livre para usar, modificar e compartilhar.

## 👤 Autor

### Jonatas Miranda

🔗 LinkedIn | www.linkedin.com/in/jonatasmirand
💻 GitHub | https://github.com/jonatasmirand
