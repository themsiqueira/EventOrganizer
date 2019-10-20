﻿# EventOrganizer
---------------------------------------------------------------------------------------------------------------------------------------
Este é um projeto de uma API REST com objetivo de gerenciar a programação de um evento.
Para rodar o projeto em sua maquina é necessário as ferramentas abaixo:

node: https://nodejs.org/en/
yarn: https://yarnpkg.com/lang/en/
npm:https://www.npmjs.com/get-npm
vscode:https://code.visualstudio.com/download

Antes de iniciar as especificações do projeto para podermos utilizar deve-se instalar as depêndencias,
utilizando o comando abaixo na pasta do projeto pelo cmd:

yarn install

Os outros scripts são:

yarn debug: para debugar o projeto localmente porém para utiliza-lo deve-se configurar o vs-code
na pasta .vs abrir a file launch.json e deixar conforme abaixo:

{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "attach",
      "name": "Launch Program",
      "protocol": "inspector"
    }
  ]
}

yarn build: Cria a build do projeto para deploy

yarn dev: Roda o projeto localmente

yarn test: Executar os testes com o jest.

----------------------------------------------------------------------------------------------------------------------

A chamada é HTTP do tipo POST deve ser feita para a url abaixo:

http://localhost:5000/api/organize/event

Obs: a porta pode ser configurada no arquivo server.js

Basicamente ela recebe um array de string, onde cada string deve conter como titulo da palestra, e tempo de duração abaixo:

{
 "data":[
   "Writing Fast Tests Against Enterprise Rails 60min",
   "Overdoing it in Python 45min",
   "Lua for the Masses 30min",
   "Ruby Errors from Mismatched Gem Versions 45min",
   "Common Ruby Errors 45min",
   "Rails for Python Developers lightning",
   "Communicating Over Distance 60min",
   "Accounting-Driven Development 45min",
   "Woah 30min",
   "Sit Down and Write 30min",
   "Pair Programming vs Noise 45min",
   "Rails Magic 60min",
   "Ruby on Rails: Why We Should Move On 60min",
   "Clojure Ate Scala (on my project) 45min",
   "Programming in the Boondocks of Seattle 30min",
   "Ruby vs. Clojure for Back-End Development 30min",
   "Ruby on Rails Legacy App Maintenance 60min",
   "A World Without HackerNews 30min",
   "User Interface CSS in Rails Apps 30min"
 ]
}

O retorno da chamada seria conforme o exemplo abaixo:

{
    "data": [
        {
            "title": "Track 1",
            "data": [
                "09:00AM Writing Fast Tests Against Enterprise Rails 60min",
                "10:00AM Overdoing it in Python 45min",
                "10:45AM Lua for the Masses 30min",
                "11:15AM Ruby Errors from Mismatched Gem Versions 45min",
                "12:00PM Lunch 60min",
                "01:00PM Common Ruby Errors 45min",
                "01:45PM Rails for Python Developers 5min",
                "01:50PM Communicating Over Distance 60min",
                "02:50PM Accounting-Driven Development 45min",
                "03:35PM Woah 30min",
                "04:05PM Sit Down and Write 30min",
                "04:35PM Networking Event 60min"
            ]
        }
    ]
}

O serviço pode criar varios tracks conforme a quantidade de itens para serem encaixados no evento.
o evento sempre começa as 09:00AM, parando as 12:00 para o almoço e terminando no maximo
as 05:00PM fechando sempre com o happy hour.


