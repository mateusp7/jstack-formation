# Express My Contacts

Uma API REST para gerenciamento de contatos desenvolvida com Express.js e PostgreSQL.

## 🚀 Tecnologias

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Docker](https://www.docker.com/)

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- Docker e Docker Compose
- Yarn, npm ou pnpm (gerenciador de pacotes)

## 🛠️ Configuração do Ambiente

### 1. Clonando o repositório

```bash
git clone <https://github.com/mateusp7/jstack-formation>
cd express-my-contacts
```

### 2. Instalando dependências

```bash
yarn
or
npm install
or
pnpm install
```

### 3. Configurando o Banco de Dados com Docker

1. Crie um container PostgreSQL:

```bash
docker run --name pg-my-contacts -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
```

2. Acesse o container:

```bash
docker exec -it pg-my-contacts bash
```

3. Acesse o PostgreSQL:

```bash
psql -U root
```

4. Execute os comandos SQL para criar o banco de dados e as tabelas:

```sql
CREATE DATABASE mycontacts;

\c mycontacts

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS categories (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL
);

CREATE TABLE IF NOT EXISTS contacts (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE,
  phone VARCHAR,
  category_id UUID,
  FOREIGN KEY(category_id) REFERENCES categories(id)
);

ALTER TABLE contacts
DROP CONSTRAINT contacts_category_id_fkey,
ADD CONSTRAINT contacts_category_id_fkey FOREIGN KEY (category_id) REFERENCES categories(id) ON DELETE CASCADE;
```

## 🚀 Executando o projeto

Para iniciar o servidor em modo de desenvolvimento:

```bash
yarn dev
or
npm run dev
or
pnpm dev
```

O servidor estará rodando em `http://localhost:3000`

## 📝 Endpoints da API

### Categorias

- `GET /categories` - Lista todas as categorias
- `POST /categories` - Cria uma nova categoria
- `GET /categories/:id` - Busca uma categoria específica
- `PUT /categories/:id` - Atualiza uma categoria
- `DELETE /categories/:id` - Remove uma categoria

### Contatos

- `GET /contacts` - Lista todos os contatos
- `POST /contacts` - Cria um novo contato
- `GET /contacts/:id` - Busca um contato específico
- `PUT /contacts/:id` - Atualiza um contato
- `DELETE /contacts/:id` - Remove um contato

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
