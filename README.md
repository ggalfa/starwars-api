# Projeto StarWars Api

Este projeto tem como intuito aprender um pouco mais react e para isso decide construir uma app web  
que consome a api do [starwars](https://swapi.co/) um serviço bem legal criado por  Paul Hallett.  

Nesta app o objetivo é de trazer as espécies com algumas de suas características como:  
- Nome
- Classificação
- Designação
- Altura Média
- Língua materna  

## Setup do Projeto

Vamos usar o **react** neste projeto para consumirmos os recursos da api.  
Usamos o **npm** como nosso gerenciador de pacotes principal.  
Para o arquivo de rotas usamos o **react-router-dom**.  
Para fazermos as requisições via ajax da api utilizamos a biblioteca **axios**.  

## Simplificando Tudo

O endpoint da api que usamos foi o seguinte **https://swapi.co/api** depois no arquivo **App.js**  
implementamos a lógica de requisições assíncronicas usando **async awiat** que recebe uma response  
retornado da api por uma requisição do tipo get do nosso recurso **/especies** que recebe um parâmetro  
do **?page** para que possamos acessar todos os recursos fornecido.
