This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Bix - Finance

Projeto desenvolvido para teste de dev front end

## Instalação

A aplicação tem o objetivo de ler o json com os dados necessarios de transações e exibir através de uma interface intuitiva.

A aplicação segue o conceito de Atomic Design, priorizando componentes reutilizáveis e bem definidos.

## Configuração

Para instalar as dependencias utilize:

`npm install`

Para iniciar o projeto utilize:

`npm run dev`

A aplicação deve iniciar na porta 3000

## Utilização

Existem duas rotas disponiveis

Home em (Redirect para Dashboard):

`/`

Dashboard em:

`/dashboard`

No Dashboard é possivel acessar os dados de transações, resumos e listagem das transações, juntamente com filtros e seleção de espaço de datas.

Dashboard em:

`/dashboard/stats`

Em Stats é possivel visualizar diverssos graficos que cooperam para a interface objetiva, onde os graficos também seguem o padrão de espaço de datas

## Autenticação

### Login

* **Rota** : `/auth/login`
* **Descrição** : Na página de Login, os usuários podem inserir suas credenciais (e-mail e senha) para acessar sua conta. O formulário de login inclui validação em tempo real para garantir que os dados sejam preenchidos corretamente. Ao efetuar login com sucesso, os usuários são redirecionados para a página principal do Dashboard.

### Registro

* **Rota** : `/auth/register`
* **Descrição** : Na página de Registro, novos usuários podem criar uma conta fornecendo informações necessárias, como nome, e-mail e senha. O formulário de registro também inclui validação para garantir que todos os campos sejam preenchidos corretamente e que a senha atenda aos critérios de segurança. Após o registro bem-sucedido, os usuários serão redirecionados para a página de Login, onde poderão acessar sua nova conta.

## Testes

Testes unitarios para utilizar as formulas matematicas empregadas para garantir um retorno de dados preciso, além de garantir o funcionamento correto da aplicação.

Utilize:

`npm run test`

## Tecnologias Utilizadas

* **Next.js** : Framework React para aplicações web, com renderização do lado do servidor e geração de sites estáticos.
* **React** : Biblioteca para construção da interface do usuário.
* **MUI (Material-UI)** : Biblioteca de componentes React que implementa o Material Design.
* **Formik** : Gerenciamento de formulários em React, facilitando validação e manipulação de estados.
* **Yup** : Biblioteca para validação de esquemas de dados, frequentemente usada com Formik.
* **Chart.js** : Biblioteca para visualização de dados com gráficos interativos.
* **TypeScript** : Superset de JavaScript que adiciona tipagem estática, melhorando a robustez do código.
* **Redux Toolkit** : Ferramenta para gerenciamento de estado global em aplicações React.
* **Jest** : Framework de testes para JavaScript, usado para testes unitários e de integração.
