const get = require('@androz2091/insta.js');
const moment = require('moment-timezone');
const time = moment().format('HH:mm:ss');
const { color } = require('color.js');
const { performance } = require('perf_hooks');
const { getBuffer } = require('index.js');
const fs = require("fs");
const fetch = require('node-fetch');
const request = require('request');
const yts = require("yt-search");
const fresh = new get.Client();


fresh.on('connected', () => {
console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color('\nConectado na conta'), color(fresh.user.username+'\n'))
});
 
fresh.on('pendingRequest', fresh => {
fresh.approve();
});

fresh.on('messageCreate', async function(connect) {
connect.markSeen();
var text = connect.content;


if (RegExp('/teste',"i").exec(text)){
connect.chat.startTyping(5000, true) 
testeq = `
┏─━──━──━──━─
┃
┃「BOT BETA INSTAGRAM」
┃ BY: Fresh Programing ©
┗─━──━──━──━─`
 return await connect.reply(testeq)
 }
 
 
 
 if (RegExp('/cassino',"i").exec(text)){
 	connect.reply('\nRODANDO...')
 	connect.chat.startTyping(10000, true) 
const fruits = [
'🍊 : 🍒 : 🍐',
'🍒 : 🔔 : ??',
'🍇 : 🍇 : 🍇',
'🍊 : 🍋 : 🍒',
'🔔 : 🍒 : 🍐',
'🔔 : 🍒 : 🍊',
'🍊 : 🍋 : 🍒',
'🍐 : ?? : 🍋',
'🍐 : 🍐 : 🍐',
'🍊 : 🍒 : 🍒',
'🔔 : 🔔 : 🔔',
'🍌 : 🍒 : 🔔',
'🍐 : 🔔 : 🔔',
'🍊 : 🍋 : 🍒',
'🍋 : 🍋 : 🍌',
'🔔 : 🔔 : 🍇',
'🔔 : 🍐 : 🍇',
'🔔 : 🔔 : 🔔',
'🍒 : 🍒 : 🍒',
'🍌 : 🍌 : 🍌'
]		
const random = fruits[Math.floor(Math.random() * fruits.length)]
if ((random == '🥑 : 🥑 : 🥑') ||(random == '🍉 : 🍉 : 🍉') ||(random == '🍓 : 🍓 : 🍓') ||(random == '🍎 : 🍎 : 🍎') ||(random == '🍍 : 🍍 : 🍍') ||(random == '🥝 : 🥝 : 🥝') ||(random == '🍑 : 🍑 : 🍑') ||(random == '🥥 : 🥥 : 🥥') ||(random == '🍋 : 🍋 : 🍋') ||(random == '🍐 : 🍐 : 🍐') ||(random == '🍌 : 🍌 : 🍌') ||(random == '🍒 : 🍒 : 🍒') ||(random == '🔔 : 🔔 : 🔔') ||(random == '🍊 : 🍊 : 🍊') ||(random == '?? : 🍇 : 🍇')) {
var Vitória = "\nVocê ganhou!!"
} else {
var Vitória = "\nVocê perdeu!"
};

let fresh =
`
┏━━━━❪🎰❫━━━━
┣►${random}◄┛
┗━━━━❪★❫━━━━

${Vitória}`
return await connect.reply(fresh)
}


 if (RegExp('/ping',"i").exec(text)){
        connect.reply('!pong');
    }

});


//Obs no lugar de 'nome da conta' coloque o arroba do perfil do Instagram que você quer que o bot seja conectado, e logo do lado coloque a senha. 
fresh.login('Nome da conta', 'senha');

