botMordomo Alfred
===============================================

--------------------
- Há duas maneiras de você testar esse Chatterbot:
	
	- Seguindo este passo-a-passo.
	- No aplicativo Telegram, busque pelo bot com o *username* **@AlfredMordomoBot**. Porém, ele não vai funcionar desta forma (ao menos por enquanto), pois é necessário ter a implementação do bot hospedado em um servidor, o que ainda não foi feito.

- Para desenvolver um Chatterbot similar, pode seguir os mesmos passos.

--------------------

## Criando o Chatterbot (ou chatbot) no Telegram

1. Seguindo com base de que você já tenha uma conta no Telegram, vá no campo *pesquisar* e procure pelo **BotFather** (sim uma referência ao filme The Godfather):
	
	> @BotFather

	- O BotFather é o bot do Telegram que governa todos os bots criados. A partir dele que são criados e configurados todos os *chatbots*.

2. Iniciando uma conversa com o BotFather, digite o comando a baixo para dar inicio a criação do novo bot:

	> /newbot

3. O BotFather vai lher perguntar o **nome** que você deve dar ao bot.

4. Depois o BotFather vai lhe perguntar o **username (deve ser único)** do seu bot. O **username** dos bots deve sempre terminar com a palavra *bot* no final. Por exemplo *TetrisBot* ou *tetris_bot*. 

5. Criado o bot com sucesso, o BotFather vai gerar um **token** para o seu bot. Esse **token é único** e serve como uma "senha" para seu bot, portanto deve ser mantido em sigilo. Exemplo de token **(esse token já foi revogado)**: 

	> 110201543:AAHdqTcvCH1vGWJxfSeofSAs0K5PALDsaw

**- Obs:** Para obter uma lista de comandos para configurar o seu bot, como por exemplo, inserir uma descrição ou uma foto, digite o comando a baixo:
	
> /help

--------------------

## Baixando e instalando o botMordomo Alfred

- Para criar esse Chatterbot, foi utilizado a linguagem de programação **JavaScript**, a plataforma **Node.js** e a API **node-telegram-bot-api**.

1. É preciso ter instalado em seu computador o **Node.js**. Caso não tenha, instale por esse **[tutorial](https://github.com/CristianAmbrosi/tutoriais/blob/master/Instalar%20Node.js%20no%20Ubuntu.md)**.

2. Você pode clonar esse repositório em sua máquina utilizando uma ferramenta de versionamento (Git por exemplo) ou simplemente fazer o download.

3. Acesse o diretório do botMordomo pelo seu terminal e rode o seguinte comando para instalar as dependências:

	> npm install

4. Abra o arquivo **index.js** e insira o token gerado do seu bot criado anteriormente, na variável **token**. Exemplo: <br />
	
	![](https://github.com/CristianAmbrosi/botMordomo/blob/master/images/token-bot.png)

5. Agora para testar o botMordomo Alfred, rode o comando a baixo e inicie uma conversa com seu bot no Telegram.

	> node index.js

--------------------

## Referências

https://core.telegram.org/bots

https://core.telegram.org/api

https://blog.mbeck.com.br/como-criar-um-chatbot-para-telegram-81a556cc0e52

http://www.clancobra.com.br/2015/11/como-fazer-bots-no-telegram/
