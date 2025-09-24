# Projeto n8n Custom Node: Random

Este repositório contém um **conector personalizado para o n8n**, chamado **Random**, que gera números verdadeiramente aleatórios utilizando a API do [Random.org](https://www.random.org/).

O projeto foi desenvolvido utilizando **TypeScript**, e configurado para rodar **localmente com Docker Compose** e banco **PostgreSQL**.

> Observação: possuo experiência prévia com PostgreSQL e TypeScript, mas nunca tinha utilizado o n8n ou Docker antes deste projeto.

---

## Estrutura do projeto

├─ docker-compose.yml # Configuração do n8n + PostgreSQL

├─ tsconfig.json # Configuração do TypeScript

├─ .n8n/

│ └─ custom/

│ ├─ Random.node.js # Node Random compilado

│ └─ random.svg # Ícone do node

└─ README.md

---


---

## Pré-requisitos

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- Node.js (para compilar caso queira alterar o node TypeScript)
- Banco de dados **PostgreSQL** criado previamente com nome `n8n`

> Antes de subir os containers, certifique-se de criar o banco de dados `n8n` no PostgreSQL. Por exemplo, usando `psql`:

CREATE DATABASE n8n;


## Instalação e execução

1. Clone o repositório:

git clone <URL_DO_REPOSITORIO>
cd <NOME_DO_REPOSITORIO>

2. Ajuste o caminho do volume no docker-compose.yml caso seu ambiente local seja diferente:
volumes:
  - C:/Users/seu_usuario/.n8n/custom:/home/node/.n8n/custom

3. Suba os containers:
docker compose up -d
Isso vai subir dois serviços:
PostgreSQL na porta 5432
n8n na porta 5678

4. Abra o n8n no navegador:
http://localhost:5678

---

## Configuração do ambiente

No docker-compose.yml já estão configuradas as variáveis de ambiente:
Banco de dados: PostgreSQL
Usuário: postgres
Senha: 123
Database: n8n
Timezone: America/Sao_Paulo
Volumes: .n8n/custom para os nodes personalizados
Caso queira alterar, edite as variáveis correspondentes no docker-compose.yml.

## Utilizando o node Random

Abra o n8n em http://localhost:5678
Crie um New Workflow → Add Node
Procure por Random (o ícone do node aparecerá se o random.svg estiver na mesma pasta do node)
Configure os parâmetros:
Mínimo: valor mínimo do número aleatório
Máximo: valor máximo do número aleatório
Execute o node → ele retornará um número aleatório utilizando a API do Random.org

## Observações importantes

O node Random só será carregado se o arquivo .js estiver diretamente na pasta .n8n/custom, não em subpastas.
Sempre que adicionar ou modificar nodes, é necessário reiniciar o container n8n:
docker compose restart n8n
A pasta de custom nodes deve conter apenas os arquivos JS e SVG necessários.

## Testes

Execute o node no n8n e verifique se retorna corretamente um número aleatório entre os valores configurados.
Verifique o log do container n8n caso haja erro:
docker compose logs n8n

## Informações adicionais

O projeto foi desenvolvido com atenção às melhores práticas do n8n e integração com a API externa.
O código está escrito em TypeScript, compilado para JavaScript compatível com n8n.
Experiência prévia com PostgreSQL e TypeScript, mas sem experiência anterior em n8n ou Docker.
