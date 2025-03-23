# Docker

## Containers

-> Aplicações rodam de forma isolada (sem interferir uma na outra)
=> Usam o mesmo Kernel da máquina base, tornando-se leve e eficiente
-> Portabilidade (sem problema de: "Na minha máquina funciona")

## Docker Hub

-> Packages
-> Images
-> Push Images

## Docker Commands

-> docker pull (nome da imagem)
-> docker run --name (pg) -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 -d postgres
  => -e (variáveis de ambiente)
  => -p (configuração de porta)
  => -d (rodar em modo detach)
  => 5432:5432 (mapear a porta do host - minha máquina - para a porta do postgres que é a 5432)
  => postgres (nome da imagem que baixamos)
-> docker ps (listar containers em execução)
-> docker ps -a (listas todos os containers, até mesmo os que não estão executando)
-> docker start (nome do container): Inicia um container ja criado
-> docker stop (nome do container): Faz o container parar
-> docker rm (nome do container): Derruba todo o container
-> docker rmi (nome da imagem): Apagar a imagem, contudo, antes de fazer isso precisamos parar o container e excluir ele
