const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.user.tag + ' Ready! (' + client.user.id + ')');
    client.user.setActivity("https://www.flix-host.com", {
        type: "WATCHING"
    });
    var flixRole = client.guilds.get('428690920246870016').roles.find(r => r.id == '');
    setInterval(() => {
        client.guilds.get('428690920246870016').members.filter(m => !m.user.bot && !m.roles.has(flixRole) && m.user.username.startsWith('!- Flix |')).forEach(m => {
            m.removeRole(flixRole);
        });
        client.guilds.get('428690920246870016').members.filter(m => !m.user.bot && m.roles.has(flixRole) && !m.user.username.startsWith('!- Flix |')).forEach(m => {
            m.addRole(flixRole);
        });
    }, 10000);
});

client.on('message', message => {
    
});

function suc(message, args) {
    const suc = new Discord.RichEmbed()
    .setAuthor(args, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
    .setColor('GREEN');
    message.channel.send({
        embed: suc
    });
}

function err(message, args) {
    const err = new Discord.RichEmbed()
    .setAuthor(args, "https://tse1.mm.bing.net/th?id=OIP.J-y_zWr6CiYBywhxuhKOVAHaHa&pid=15.1&P=0&w=300&h=300")
    .setColor('RED');
    message.channel.send({
        embed: err
    });
}

client.login(process.env.TOKEN);
