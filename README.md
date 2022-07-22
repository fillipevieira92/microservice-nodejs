# Sobre
Esse projeto contém dois micros serviços que se comunicam entre si e necessitam de um token para efetuar requisições.
O serviço **MOCK** é uma RestAPI conectada ao banco de dados postgreSQL contendo um CRUD simples. Já o serviço **FILE_SERVICE** serve para upload e processamento de arquivos CSV para cadastrar através da api **MOCK**.

<br>

# Tecnologias

- Docker
- Node.js
- Swagger
- Typescript
- PostgreSQL
- Docker-Compose

<br>

![My Skills](https://skillicons.dev/icons?i=nodejs,express,ts,jest,postgres,docker)

<br>

# Requisitos
- Docker
- Docker-Compose

<br>

# Endpoints

[ MOCK ] *Para acessar a documentação swagger:*
<br>
`http://localhost:3000/api-docs`
<br>

[ FILE_SERVICE ] *Para acessar a documentação swagger:*
<br>
`http://localhost:5000/api-docs`

*Para efetuar requisições você precisa cadastrar o token do tipo Bearer:*
<br>
>token: `GPTW`

<br>

# Build
1. Entrar na pasta raiz da aplicação
2. Rodar o comando $ `docker-compose up --build`
