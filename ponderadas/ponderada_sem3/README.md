# Atividade 2

Esta atividade tem por objetivo desenvolver um projeto web que possibilite os usuários registrarem dados em um banco de dados. O deploy do banco, da API do backend e do frontend deve acontecer utilizando uma aplicação com multiplos containers. A aplicação não precisa utilizar frameworks, pode ser realizada utilizando os primitivos presentes na linguagem de programação escolhida.

#### Divisão do projeto em containers:
Para os projetos que vão trabalhar com 2 containers:
- Container da aplicação (interface e backend);
- Container do banco de dados.

Para os projetos que vão trabalhar com 3 containers:
- Container da interface com o usuário (frontend da aplicação);
- Container do sistema de API (backend da aplicação);
- Container do banco de dados.

A escolha de uma das estratégias está totalmente vinculada a experiência que o estudante deseja praticar. De qualquer forma, será encessário justificar a escolha da arquitetura utilizada para a solução. 

#### Espera-se encontrar na entrega do projeto:
1. Arquitetura da solução utilizada (no arquivo README do projeto) e a justificativa de sua escolha;
2. Um arquivo docker-compose para o lançamento da aplicação;
3. Instruções para lançar a aplicação;
4. Instruções para utilizar a aplicação;
5. Uma descrição da estrutura de dados utilizada para armazenar os dados no banco de dados;
6. Uma tela de login para entrar no sistema;
7. Uma tela para ver os dados cadastrados;
8. Uma tela para cadastrar novas entradas de dados.

O projeto consiste em um TODO List, onde o usuário deve se cadastrar no sistema (considerar o usuário teste, com a senha teste123) para ter acesso a suas notas e adicionar novas notas. NÃO É NECESSÁRIO REALIZAR A IMPLEMENTAÇÃO DE CADASTRO DE USUÁRIOS OU TELA/FUNCIONALIDADE DE RECUPERAÇÃO DE SENHA.

A imagem do banco de dados que será utilizada pode ser de qualquer banco de dados RELACIONAL. A aplicação pode ser desenvolvida em Python ou em JavaScript.

Exemplos de aplicação do tipo TODO List: todoist, Any.do, Google Keep

# Arquitetura
A arquitetura da aplicação envolve três contêineres customizados, que são construídos, executados e conectados usando o Docker Compose:

<img src='arquitetura-sem3.png'>

banco-db: Contêiner que utiliza a base de dados PostgreSQL, configura as variáveis de ambiente necessárias e expõe a porta 5432 para a comunicação com o banco de dados.

backend: Contêiner baseado na imagem Node Alpine, servindo como o backend da aplicação, desenvolvido em Node.js, ele expõe a porta 5000 para a comunicação com o frontend e o acesso às APIs da aplicação.

frontend: Contêiner é baseado na imagem Next.js Alpine, é o frontend da aplicação, desenvolvido em Next.js (baseado em React) e expõe a porta 3000 para que os usuários possam acessar a interface da aplicação.

<img src='docker-compose-up-sem3.png'>

**Funcionalidades da aplicação**
- Criação de usuário
- Login e Logout
- Criação de tarefas
- Marcar tarefas como concluídas ou não concluídas
- Exclusão de tarefas
- Atualização de tarefas

Todas essas operações são realizadas através de rotas protegidas que exigem autenticação. A autenticação é implementada usando JSON Web Tokens (JWT), com um tempo de expiração de 5 minutos.

Seguem abaixo algumas imagens da interface, considerando tela de login, feedback de login incorreto, tela de criação de conta e tela de tarefas com atualização.

<img src='login.png'>
<img src='loginIncorreto.png'>
<img src='criarConta.png'>
<img src='tarefas.png'>
<img src='alterandoTarefas.png'>


## Banco de dados
<img src='db.png'>

O banco de dados é composto por duas tabelas relacionadas:

users: Armazena informações dos usuários, incluindo um email, senha e timestamps de criação e atualização. Possui uma chave primária.

tasks: Armazena informações sobre as tarefas, incluindo título, estado de conclusão e referência ao usuário através do campo user_id. Também possui timestamps de criação e atualização.

## Estrutura de pastas

```
├───backend
│   ├───config
│   ├───controllers
│   ├───db
│   ├───middlewares
│   ├───models
│   ├───routes
│   └───services
└───frontend
    ├───.next
    ├───app
    │   ├───signUp
    │   └───tasks
    ├───components
    ├───context
    └───public
```

### Backend (MVC)

- **config**: Arquivos de configuração da aplicação, como da conexão com o banco de dados
- **controllers**: Controladores que preparam o input do usuário para os serviços
- **middlewares**: Middlewares da aplicação (autenticação, validação, erros, etc.).
- **models**: Definições dos modelos de dados.
- **routes**: Definições das rotas da aplicação.
- **services**: Regras de negócio com manipulação direta do banco de dados

Na pasta raiz, existem também os arquivos app.js e index.js. O index.js é o ponto de entrada, enquanto o app.js apenas cria o objeto de app no express e define as rotas. O index.js também inicializa o banco de dados através da importação dos arquivos de configuração.

### Frontend

- **.next**: Artefatos de construção do Next.js.
- **app**: Módulos ou seções do frontend (signUp, tasks, etc.).
- **components**: Componentes reutilizáveis.
- **context**: Gerenciamento de estado global da aplicação, principalmente de autenticação
- **public**: Ativos estáticos públicos (imagens, ícones, CSS não processados, etc.).

## Executando a aplicação
Para executar a aplicação, siga os seguintes passos:

- Certifique-se de ter o Docker e o Docker Compose instalados em sua máquina.
- Navegue até a pasta raiz do projeto no terminal.
- Execute o comando `docker-compose up``.
- Aguarde até que as imagens sejam baixadas do DockerHub e os contêineres sejam criados.
- Abra um navegador e acesse http://localhost:3000 para começar a usar a aplicação.
