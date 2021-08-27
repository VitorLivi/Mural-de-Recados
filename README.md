<h1 align="center"'> 
	Mural-de-Recados
</h1>
                   
<h2>Configurações de inicialização</h2>

<h3>Servidor</h3>
                   
 - Entrar na raiz da aplicação ./server
 - Rodar "npm install" 

#### Comandos

<pre>
  - npm start   // Inicia o back-end
</pre>
                  

<h4>Criar e configurar: ./server/env</h4>

<pre>
DATABASE=      // Banco de dados 
DB_HOST=       // Host do banco de dados
DB_USER=       // Usuário do banco de dados
DB_PASSWORD=   // Senha do banco de dados
JWT_SECRET=    // Senha JWT
PORT=          // Porta da aplicação
</pre>
                   
<h4> Link para o Swagger: urldaapi/api/documentation </h4>

                   
<h3>Client</h3>
                   
 - Entrar na raiz ./client
 - Rodar "npm install" 

#### Comandos

<pre>
  - npm start  // Inicia o front-end
</pre>

<h4>Criar e configurar: ./client/env</h4>

<pre>
API_URL=       // Url da aplicação
</pre>

### Features

- [x] Login/Logout
- [x] Cadastro de mensagem
- [x] Tipo de mensagem
- [x] Filtro de mensagens
- [x] Tela de carregamento
- [x] Rota privada
- [x] Mensagens em tempo real
- [x] Documentação da API


<h2>Login - Logout</h2>

![Login - Logout](https://user-images.githubusercontent.com/44207509/131040518-c2c45dd7-a75c-47e4-830d-c59dd0763ffc.gif)
                   
<h2>Mensagens - Socket</h2>

![Mensagens](https://user-images.githubusercontent.com/44207509/131043997-6ccae28d-5c5b-4e1d-9ae8-ae9ffadaeabf.gif)

<h2>Swagger</h2>
                   
![Swagger](https://user-images.githubusercontent.com/44207509/131054004-9409e53a-6058-4626-9765-03508cbd0e0e.gif)
    
                   
<h2>Estrutura de pastas</h2>
                   
![Estrutura de pastas](https://user-images.githubusercontent.com/44207509/131055204-26449d53-fbd5-47ac-9b3e-33d61092eeee.png)
                   
<h2>Relatos finais</h2>

### Como foi feito?
  
Tentei desacoplar o máximo de componentes para permitir a reutilização, utilizei o styled-components 
para estilizar de forma isolada, para as requisições de login, validação de token e armazenmento do 
estado do usuário foi utilizado o Redux e Socket.io para a comunicação das mensagens entre os usuários.

                   
### Dificuldades

 - Conciliação do trabalho com o desafio;
 - Desenvolver o código no padrão clean code dentro do prazo especificado;
 - Relembrar da utilização do socket.

### Possíveis melhorias
 
 - Utilizar um desing pattern mais elaborado com o crescimento do projeto;
 - Fazer benchmarks para considerar o uso de funções e classes memoizadas;
 - Adicionar mais validações de segurança na parte de servidor como regex para validar força da senha;
 - Guardar a data local do usuário em UTC e depois fazer o tratamento com offset;
 - Utilizar biblioteca ou criar documentação personalizada para componentes do front-end.
 - Fazer testes automatizados para o cíclo mais importante da aplicação, tanto no client como no servidor.
 - Criar tela de path não encontrado
 - Criar sistema de tokens caso precise traduções.
 - Criar sistema de notificações (Toaster) para erros e avisos.
 - Avaliar migração para o NextJS.
 - Utilizar TypeScript nos componentes de base.
 - Criar sistema de logs para auditar ações do usuário.
