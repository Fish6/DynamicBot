
const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply('Pong!');
  }
});

client.on('message', msg => {
  if (msg.content === prefix + 'end_your_self') {
    msg.reply('why not u xdddddddd');
  }
});


client.on('ready', () => {
  console.log('I am ready!');
});


client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find('name', 'member-log');
    if (!channel) return member.guild.defaultChannel.send(`Welcome to the server, ${member}!`);
    channel.send(`Welcome to the server, ${member}!`)
});




client.login('ur bot token goes here')
