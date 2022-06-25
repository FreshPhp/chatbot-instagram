const get = require('@androz2091/insta.js');
const moment = require('moment-timezone')
const time = moment().format('HH:mm:ss')
const { color } = require('./lib/color')
const { performance } = require('perf_hooks')
const { getBuffer } = require('./lib/¿');
const fs = require("fs");
const fetch = require('node-fetch');
const request = require('request');
const yts = require("yt-search");
const fresh = new get.Client();

//========== [ //Conexão\\ ] ==========\\

fresh.on('connected', () => {
console.log('\x1b[1;34m~\x1b[1;37m>>', '[\x1b[1;33mINF\x1b[1;37m]', time, color(`\nConectado na conta`), color(`${fresh.user.username}\n`))
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
 
 if (RegExp('/menu',"i").exec(text)){
connect.chat.startTyping(5000, true) 
test = `
┏─━──━──━──━─
┃「BOT BETA INSTAGRAM」
┃「MEU CRIADOR: Wa.me/+5515988171796」
┃「BOT DO WPP: Wa.me/+5515988306514」
┃「MEU SITE: https://fresh-php.herokuapp.com」
┃ BY: Fresh Programing ©
┗─━──━──━──━─
=> /cassino`
 return await connect.reply(test)
 }
 
 
 if (RegExp('/cassino',"i").exec(text)){
 	connect.reply('\nRODANDO...')
 	connect.chat.startTyping(10000, true) 
const soto = [
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
const somtoy2 = soto[Math.floor(Math.random() * soto.length)]
if ((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '?? : 🍇 : 🍇')) {
var Vitória = "\nVocê ganhou!!"
} else {
var Vitória = "\nVocê perdeu!"
};

let fresh =
`
┏━━━━❪🎰❫━━━━
┣►${somtoy2}◄┛
┗━━━━❪★❫━━━━

${Vitória}`
return await connect.reply(fresh)
}


 if (RegExp('/ping',"i").exec(text)){
        connect.reply('!pong');
    }

});


//Obs no lugar de 'nome da conta' coloque o arroba do perfil do Instagram que você quer que o bot seja conectado, e logo do lado a senha da mesma conta 
fresh.login('fresh_bot.js', 'fresh789811');

