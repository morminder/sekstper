const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');

module.exports = client => {
 setInterval(function() {
}, 8000);
  var msgArray = ["BAKIMDAYIM","BAKIMDAYIM","BAKIMDAYIM"];

 setInterval(() => {
  var rastgeleOyun = Math.floor(Math.random() * msgArray.length);
  client.user.setActivity(`${msgArray[rastgeleOyun]}`, { type: 'STREAMING' ,  url: 'https://www.twitch.tv/SAVXGE' })
}, 5000);
    console.log(`Bot Hazır `);
}