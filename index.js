'use strict';

const TelegramBot = require('node-telegram-bot-api');
const token = 'SEU_TOKEN';
var bot = new TelegramBot(token, { polling: true });
var chatId = 0;

// const carros = [
//     [{ text: 'Jeep Renegade', callback_data: '0' }, { text: 'Opala', callback_data: '1' }],
//     [{ text: 'Lamborghini Murciélago', callback_data: '2' }, { text: 'Aston Martin DB Mark III', callback_data: '3' }],
//     [{ text: 'Batmóvel', callback_data: '4' }]
// ];
// const optionsInlineKeyboardCarros = {
//     reply_markup: JSON.stringify({
//         inline_keyboard: carros
//     })
// };
// bot.on('callback_query', function(msg) {
//     let user = msg.from.id;
// 	var mensagens = [
//         `Ótima escolha patrão *${msg.from.first_name}*.`,
//         `Tem certeza patrão *${msg.from.first_name}*?`,
//         `Este está na mecânica patrão *${msg.from.first_name}*`,
//         `Este o senhor emprestou para o patrão Jason`
//     ][
//         Math.floor(Math.random() * 4)
//     ];
//     bot.sendMessage(user, mensagens,  { parse_mode: "Markdown"});
// });

const comida = [
    [{ text: 'Morcego À La Minuta', callback_data: '0' }, { text: 'Foie gras', callback_data: '1' }],
    [{ text: 'Canard À L’orange', callback_data: '2' }, { text: 'Parmentier de canard', callback_data: '3' }]
];
const optionsInlineKeyboardComidas = {
    reply_markup: JSON.stringify({
        inline_keyboard: comida
    })
};
bot.on('callback_query', function(msg) {
    let user = msg.from.id;
	var mensagens = [
        `Ótima escolha patrão *${msg.from.first_name}*.`,
        `Demorará um pouco para prepar patrão *${msg.from.first_name}*, mas será feito.`
    ][
        Math.floor(Math.random() * 2)
    ];
    bot.sendMessage(user, mensagens,  { parse_mode: "Markdown"});
});

bot.on('message', function (msg) {
    console.log('msg', msg);
    let start	= msg.text.toLowerCase().indexOf('/start');
    let echo 	= msg.text.toLowerCase().indexOf('/echo');
    let faq 	= msg.text.toLowerCase().indexOf('/faq');
    let fome_01	= msg.text.toLowerCase().indexOf('fome');
    let bom_dia 	= msg.text.toLowerCase().indexOf('bom dia');
    let boa_tarde 	= msg.text.toLowerCase().indexOf('boa tarde');
    let boa_noite 	= msg.text.toLowerCase().indexOf('boa noite');
    let que_horas 	= msg.text.toLowerCase().indexOf('que horas');
    let que_dia 	= msg.text.toLowerCase().indexOf('que dia');
    let melhor_bot 	= msg.text.toLowerCase().indexOf('melhor bot');
    let batman_01 	= msg.text.toLowerCase().indexOf('batman');
    let folga 		= msg.text.toLowerCase().indexOf('folga');
    let obrigado_01 = msg.text.toLowerCase().indexOf('obrigado');
    // let carro_01 	= msg.text.toLowerCase().indexOf('carro');
    let manda_nude 	= msg.text.toLowerCase().indexOf('manda nude');
    let sua_idade 	= msg.text.toLowerCase().indexOf('sua idade');
    let nacionalidade 	= msg.text.toLowerCase().indexOf('nacionalidade');
    let repositorio_01 	= msg.text.toLowerCase().indexOf('repositorio');//
    let repositorio_02 	= msg.text.toLowerCase().indexOf('repositório');//
    let engracado 		= msg.text.toLowerCase().indexOf('engraçado');
    let engracado_02 	= msg.text.toLowerCase().indexOf('engracado');
    let algo_para_comer = msg.text.toLowerCase().indexOf('algo para comer');
    let como_voce_esta 		= msg.text.toLowerCase().indexOf('como voce esta');
    let como_voce_esta_02 	= msg.text.toLowerCase().indexOf('como você está');
    let como_vc_esta 		= msg.text.toLowerCase().indexOf('como vc esta');
    let o_que_houve 		= msg.text.toLowerCase().indexOf('o que houve');
    let aconteceu_algo 		= msg.text.toLowerCase().indexOf('aconteceu algo');
    let quantos_anos_voce 		= msg.text.toLowerCase().indexOf('quantos anos você');
    let quantos_anos_voce_02 	= msg.text.toLowerCase().indexOf('quantos anos voce');


    if (bom_dia != -1) bomDia(msg);
    else if (boa_tarde != -1) boaTarde(msg);
    else if (boa_noite != -1) boaNoite(msg);
    else if (que_horas != -1) queHorasSao(msg);
    else if (que_dia != -1) queDiaEHoje(msg);
   	else if (melhor_bot != -1) melhorBot(msg);
    else if (batman_01 != -1) batman(msg);
    else if ((como_voce_esta != -1) || (como_voce_esta_02 != -1) || 
    	(como_vc_esta != -1)) comoVoceEsta(msg);
    else if ((o_que_houve != -1) || (aconteceu_algo != -1)) oQueHouve(msg);
    else if (folga != -1) tireDiaDeFolga(msg);
    else if (obrigado_01 != -1) obrigado(msg);
    //else if (carro_01 != -1) escolherCarros(msg);
    else if (manda_nude != -1) mandaNude(msg);
    else if ((sua_idade != -1) || (quantos_anos_voce != -1) || 
    	(quantos_anos_voce_02 != -1)) idadeAlfred(msg);
    else if (nacionalidade != -1) nacionalidadeAlfred(msg);
    else if ((repositorio_01 != -1) || (repositorio_02 != -1)) repositorio(msg);
    else if ((engracado != -1) || (engracado_02 != -1)) alfredEngracado(msg);
    else if (fome_01 != -1) fome(msg);
    else if (algo_para_comer != -1) tipoComida(msg);
    else if (start != -1);
    else if (echo != -1);
    else if (faq != -1);
    // else if (msg.text.toLowerCase().indexOf('bitcoin') != -1) bitcoin(msg);
	// else if (msg.text.toLowerCase().indexOf('alfred') != -1) alfred(msg);
    else naoEntendiPatrao(msg);
});

function periodo(){
    let data = new Date();
    let hora = data.getHours();
    let min = hora * 60;
    let seg = min * 60;
    if(seg >= 0 && seg < 43200){
        return "manhã";
    } else if(seg >= 43200 && seg < 64800){
        return "tarde";
    } 
    return "noite";
}

function horas(){
    let data = new Date();
    let horas = data.toLocaleTimeString();
    return horas;
}

function diaN(){
    let data = new Date();
    let anoN = data.getUTCFullYear();
    let mesN = (data.getUTCMonth() + 1);
    let diaN = data.getUTCDate();
    let dataFormat = diaN + "/" + mesN + "/" + anoN;
    return dataFormat;
}

function dia(){
    let data = new Date();
    let dia = [
                'Domingo', 'Segunda-feira', 'Terça-feira',
                'Quarta-feira', 'Quinta-feira', 'Sexta-feira',
                'Sábado'
            ]
            [
                data.getUTCDay()
            ];
    let mes = [
                'Janeiro', 'Fevereiro', 'Março', 'Abril', 
                'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 
                'Outubro', 'Novembro', 'Dezembro'
                ]
                [
                    data.getUTCMonth()
            ];
    let ano = data.getUTCFullYear();
    let dataFormat = "Mais precisamente " + dia + " do mês de " + mes + " de " + ano;
    return dataFormat;
}


// Conversação
// function alfred(msg){
// 	chatId = msg.chat.id;
// 	var mensagens = [
//         `Pois não patrão ${msg.from.first_name}?`,
//         `Chamou patrão ${msg.from.first_name}?`,
//         `Ah! O que é agora?!`
//     ][
//         Math.floor(Math.random() * 3)
//     ];
//     bot.sendMessage(chatId, mensagens);
// }

function naoEntendiPatrao(msg){
	chatId = msg.chat.id;
	bot.sendMessage(chatId, `Não entendi patrão *${msg.from.first_name}*. Pode repetir o que disse?`, { parse_mode: "Markdown"});
}

function obrigado(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Não tem de quê patrão *${msg.from.first_name}*.`,
        `O meu trabalho é lhe servir patrão *${msg.from.first_name}*`,
        `Não tem por onde...`
    ][
        Math.floor(Math.random() * 3)
    ];
    bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}
    
function bomDia(msg) {
    chatId = msg.chat.id;
    var mensagem = `Mas é de ` + periodo() + `, patrão *${msg.from.first_name}*!`;
    if(periodo() == 'manhã'){
        var mensagem = `Bom dia patrão *${msg.from.first_name}*.`;
    }
    bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function boaTarde(msg) {
    chatId = msg.chat.id;
    var mensagem = `Mas é de ` + periodo() + `, patrão *${msg.from.first_name}*!`;
    if(periodo() == 'tarde'){
        var mensagem = `Boa tarde patrão *${msg.from.first_name}*.`;
    }
    bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function boaNoite(msg) {
    chatId = msg.chat.id;
    var mensagem = `Mas é de ` + periodo() + `, patrão *${msg.from.first_name}*!`;
    if(periodo() == 'noite'){
        var mensagem = `Boa noite patrão *${msg.from.first_name}*.`;
    }
    bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function comoVoceEsta(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Estou muito bem patrão *${msg.from.first_name}*.`,
        `Hoje não estou me sentindo muito bem patrão *${msg.from.first_name}*`
    ][
        Math.floor(Math.random() * 2)
    ];
    bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}

function oQueHouve(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Fui mordido por um morcego, hoje pela manhã.`,
        `Estou com uma batgripe patrão *${msg.from.first_name}*!`
    ][
        Math.floor(Math.random() * 2)
    ];
    bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}

function tireDiaDeFolga(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Muito obrigado patrão *${msg.from.first_name}*.`,
        `O senhor é muito generoso, patrão *${msg.from.first_name}*. Obrigado`,
        `Quem me dera patrão *${msg.from.first_name}*. É uma casa muito grande para um só mordomo apenas!`
    ][
        Math.floor(Math.random() * 3)
    ];
    bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}

function queHorasSao(msg){
    chatId = msg.chat.id;
    var mensagem = `Agora são ` + horas() + ` da ` + periodo() + `, patrão *${msg.from.first_name}*.`;
    bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function queDiaEHoje(msg){
    chatId = msg.chat.id;
    var mensagem = `Hoje é dia ` + diaN() + `. ` + dia() + `, patrão *${msg.from.first_name}*.`;
    bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function escolherCarros(msg){
	chatId = msg.chat.id;
    var mensagem = `Quais dos seus carros patrão ${msg.from.first_name}?`;
    optionsInlineKeyboardCarros.reply_to_message = msg.message_id;
    bot.sendMessage(chatId, mensagem, optionsInlineKeyboardCarros, { parse_mode: "Markdown"});
}

function melhorBot(msg){
    chatId = msg.chat.id;
    var mensagens = [
        'Sou eu! Você conhece outro?',
        'BotMordomo!',
        'Quem você acha, seu órfão infeliz?! Eu é claro'
    ][
        Math.floor(Math.random() * 3)
    ];
    bot.sendMessage(chatId, mensagens);
}

function batman(msg){
    chatId = msg.chat.id;
    var mensagens = [
        `Sou eu, óbviamente! rsrsrs`,
        `Não sei, trabalho somente para o patrão *${msg.from.first_name}*`,
        `É o Julius`
    ][
        Math.floor(Math.random() * 3)
    ];
    if(mensagens == `É o Julius`){
        bot.sendPhoto(chatId, './images/julius.jpg', { caption: 'É o Julius, patrão! rsrsrs' });
    } else {
        bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
    }
}

function fome(msg){
	chatId = msg.chat.id;
	var mensagem = `Você quer que eu prepare algo patrão *${msg.from.first_name}*?`;
	bot.sendMessage(chatId, mensagem, { parse_mode: "Markdown"});
}

function tipoComida(msg){
	chatId = msg.chat.id;
    var mensagem = `Posso fazer 4 pratos para o senhor:`;
    optionsInlineKeyboardComidas.reply_to_message = msg.message_id;
    bot.sendMessage(chatId, mensagem, optionsInlineKeyboardComidas);
}
// Essa
// function sugestaoComer(msg){

// }

// // Essa
// function localComerFora(msg){
// 	chatId = msg.chat.id;
// }

function idadeAlfred(msg){
	chatId = msg.chat.id;
	var mensagem = `Tenho 74 anos patrão *${msg.from.first_name}*. Surgi no gibi Batman #16 em Abril ou Maio de 1943`;
	bot.sendMessage(chatId, mensagem,  { parse_mode: "Markdown"});
}

function nacionalidadeAlfred(msg){
	chatId = msg.chat.id;
	var mensagem = `Sou britânico`;
	bot.sendMessage(chatId, mensagem);
}

function repositorio(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Patrão *${msg.from.first_name}*, o senhor pode me programar aqui: https://github.com/CristianAmbrosi/botMordomo`,
        `Aqui o senhor encontra meu código patrão *${msg.from.first_name}*: https://github.com/CristianAmbrosi/botMordomo`
    ][
        Math.floor(Math.random() * 2)
    ];
	bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}

function mandaNude(msg){
	chatId = msg.chat.id;
	var mensagens = [
        './images/sexy_dog_nude.jpg',
        './images/nude.jpg',
        './images/nao_nudes.jpg',
        './images/dog_nude.jpg'
    ][
        Math.floor(Math.random() * 4)
    ];
    bot.sendPhoto(chatId, mensagens, { caption: 'Aqui está, patrão! rsrsrs' });
}

function alfredEngracado(msg){
	chatId = msg.chat.id;
	var mensagens = [
        `Não acha que eu poderia trabalhar na Praça é Nossa patrão *${msg.from.first_name}*?`,
        `Eu sei patrão *${msg.from.first_name}*, eu sei.`,
        `Eu tento patrão.`
    ][
        Math.floor(Math.random() * 3)
    ];
    bot.sendMessage(chatId, mensagens,  { parse_mode: "Markdown"});
}

// function bitcoin(msg){
//     chatId = msg.chat.id;
//     var bitcoin = JSON.parse('https://blockchain.info/pt/ticker');
//     var mensagens = bitcoin.BRL.symbol + ' ' + $bitcoin.BRL.sell;
//     bot.sendMessage(chatId, mensagens);
// }


// Comandos úteis
bot.onText(/\/start/, (msg) => {
	chatId = msg.chat.id;
	var mensagem = `Olá patrão *${msg.from.first_name}*.
	Sou o seu botMordomo e estou aqui para lhe ajudar no que estiver ao alcance.
	Digite os comandos a baixo para saber mais sobre em que posso fazer.
	*/start =>* Abre essa mesma conversa com o senhor, patrão *${msg.from.first_name}*.
	*/echo => * Ecoa a última mensagem que o senhor me enviou.
	*/faq =>* Lista tudo o que posso fazer pelo senhor, até o momento.`;
	bot.sendMessage(chatId, mensagem, { parse_mode: "Markdown"});
});

// bot.onText(/\/echo/, (msg) => {
// 	chatId = msg.chat.id;
// 	bot.sendMessage(chatId, match[1])
//       .then( logSuccessEcho(msg, match))
//       .catch( logErrorEcho('Error: '));
// });

// bot.onText(/\/echo/, (msg, match) => {
// 	chatId = msg.chat.id;
// 	var mensagem = msg;https://github.com/Webschool-io/Bot-Telegram-BeMEAN/blob/master/modules/commands/echo.js
// 	bot.sendMessage(msg.chat.id, msg.text.replace('/echo ', ''));
// });

bot.onText(/\/faq/, (msg) => {
	chatId = msg.chat.id;
	var mensagem = `Isso é o que posso te ajudar até o momento patrão *${msg.from.first_name}*:
	*1-Bom dia Alfred*
	*2-Boa tarde*
	*2-Boa noite*
	*3-Que horas?*
	*4-Que dia?*
	*5-Melhor bot?*
	*6-Que é o Batman?*
	*7-Como você está?*
	*8-O que houve? ou Aconteceu algo?*
	*9-Tire uma folga*
	*10-Obrigado*
	*11-Vou usar um carro*
	*12-Qual sua idade? ou Quantos anos você tem?*
	*13-Qual sua nacionalidade?*
	*14-Qual o seu repositório?*
	*15-Você está muito engraçado*
	*16-Estou com fome*
	*17-Faça algo para comer?*
	*18-*
	*19-*
	*20-*
	*21-Manda nude?*`;
	bot.sendMessage(chatId, mensagem, { parse_mode: "Markdown"});
});

