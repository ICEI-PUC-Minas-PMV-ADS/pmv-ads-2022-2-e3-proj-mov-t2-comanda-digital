
Instalar os seguintes pacotes necessários antes de executar o projeto

1. Baixar e instalar o pacote do json-server
sudo npm install -g json-server

2. Baixar e instalar o pacote do local Tunnel
sudo npm install -g localtunnel



##################### Executar o JSON-SERVER antes de executar a aplicação #####################
1. Inicia Json-server (deve estar no mesmo diretório do arquivo db.json)
json-server --watch db.json

##################### Com o Json-server rodando, executar o localtunnel #####################
lt --port 3000

########## 1. Clicar na URL fornecida e abrir no navegados. Selecionar "Click to continue" ##########
########## 2. Utilizar a url fornecida no projeto - /components/PromotionsList/index.js ##########


