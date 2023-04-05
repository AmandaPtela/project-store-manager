  <strong> Store Manager </strong><br />

Projeto de `backend` que consiste na construção de uma aplicação de cadastro de vendas e produtos, onde é possível fazer a criação, escrita, atualização e exclusão (CRUD) de cada um.

Foi desenvolvido utilizando _Docker, NodeJs, Express_ e Arquitetura _MSC_.

  <summary><strong>Rodando o projeto localmente‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-store-manager.git`
    
  2. Instale as dependências e inicialize o projeto
  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm start` (uma nova página deve abrir no seu navegador com o projeto)
  
  <summary><strong>Rodando o projeto no Docker‼️ </strong></summary><br />
  
  1. Clone o repositório
   - `git clone git@github.com:AmandaPtela/project-store-manager.git`
  
  2. Acesse a raíz do projeto e inicialize/suba o container do projeto - usando o arquivo docker-compose.yml -
   - `docker-compose up -d`
     
  3. Acesse o bash do container
   - `docker exec -it store_manager bash`
  4. Instale as dependências através do terminal do container:
   - `npm install`
  5. Inicialize o projeto:
   - `npm run dev`
  
*A pasta _thunder-tests_, e arquivos _docker-compose_, _migration e seed_ é de autoria da **Trybe**.*