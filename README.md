# iFood Frontend Test [![Build Status](https://travis-ci.org/matheusdc/ifood-frontend-test.svg?branch=master)](https://travis-ci.org/matheusdc/ifood-frontend-test) 

## Sobre o projeto

O projeto está hospedado no Github Pages, com o deploy automátizado através Travis CI e pode ser acessado [aqui](https://matheusdc.github.io/ifood-frontend-test).

## Ambiente de desenvolvimento

O projeto utiliza variáveis de ambiente com algumas configurações necessárias que são enviadas para a API de autenticação do Spotify. Crie um arquivo `.env.local` com as seguintes variáveis de ambiente:
```
REACT_APP_SPOTIFY_CLIENT_ID=
REACT_APP_REDIRECT_URL=
```

Em seguida execute os comandos abaixo, para instalar as dependências e rodar o projeto:
```
npm install
npm start
```

O projeto pode ser acessado pela seguinte URL:
```
http://localhost:3000
```

## Detalhes do projeto

O boilerplate inicial foi criado a partir do comando `create-react-app`. Abaixo um resumo das tecnologias utilizadas:

* Componentes React utilizando Hooks
* UI Framework: [Ant Design](https://ant.design/)
  * Biblioteca bem completa com diversos componentes, grid system, etc. 
* State Management: Redux/Redux-Saga
  * As playlists e filtros são salvas no Redux, e as chamadas asincronas são feitas pelo middleware Saga
* Testes unitários: Jest
* Chamadas para API: Axios
  * Permite a fácil criação de serviços e também suporta middlewares
* Continuous Integration: Travis CI
  * Se integra facilmente com Github Pages
* Coding Standard Javascript: Airbnb
* Coding Standard CSS: [BEM](http://getbem.com/introduction/)
  * Foi utilizado CSS puro (sem pré-processadores) por simplicidade, já que a maioria dos compoentes vem da biblioteca do Ant Design e são configurados via prop `style`.
* A aplicação utiliza as informações do Browser do usuário como default para carregar as primeiras playlists
  * O `locale` do browser é fornecido para a API de busca e a hora atual é fornecida como `timestamp`.

## Bugs/Problemas conhecidos
* O framework de UI Ant Desing apresenta alguns problemas com acessibilidade e acabou não sendo uma boa escolha, outras alternativas como *Bootstrap* ou *Lightning Design System* tem um suporte melhor a acessibilidade. Fonte: https://darekkay.com/blog/accessible-ui-frameworks/

* A aplicação não valida se os valores de `locale` extraidos do browser são válidos de acordo com a API de filtros. 

* A aplicação deveria possuir mais testes, apenas os reducers estão sendos testados atualmente por simplicidade.

* Skeleton UI poderia ser utilizada para melhorar a experiência do usuário e diminuir a sensação de tempo do carregamento da página.

* Um componente de páginação poderia ter sido utilizado para melhorar a experiência do usuário.
