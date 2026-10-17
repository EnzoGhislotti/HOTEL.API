# API REST - Hotel (hospede)

API em Node.js + Express + MySQL/MariaDB com CRUD completo do recurso `hospede` (id, nome, documento, telefone).

## Como executar
1. Inicie o MySQL (XAMPP) e execute o script `database.sql` (phpMyAdmin > aba SQL).
2. `npm install`
3. `npm start` (servidor em http://localhost:3000)

Se seu MySQL tiver senha, edite `db.js` (campo `password`).

## Rotas
| Método | URL | Body (JSON) |
|---|---|---|
| GET | /hospede | - |
| GET | /hospede/:id | - |
| POST | /hospede | `{"nome":"João Silva","documento":"123.456.789-00","telefone":"62999999999"}` |
| PUT | /hospede/:id | `{"nome":"João S.","documento":"123.456.789-00","telefone":"62988888888"}` |
| DELETE | /hospede/:id | - |
