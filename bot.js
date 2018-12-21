const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(client.user.tag + ' Ready! (' + client.user.id + ')');
    client.user.setActivity("www.Flix-Host.com", "https://www.twitch.tv/unkown");
});

var cooldown = new Set();
var sugCd = new Set();
var points = {};

client.on('message', async message => {
	if(message.channel.type !== 'text') return;
	
	var prefix = '$';
	var command = message.content.toLowerCase().split(" ")[0];
	var args = message.content.toLowerCase().split(" ");
	var userM = message.guild.member(message.mentions.users.first() || message.guild.members.find(m => m.id == args[1]));
	
	if(command == prefix + 'verify') {
		var flixRole = message.guild.roles.get('437720161936736256');
		if(message.channel.id !== '495499134669684746') return;
		if(message.member.roles.has(flixRole.id)) return message.delete();
		message.delete();
		message.member.addRole(flixRole.id);
	}
	
	if(message.channel.id == '495499134669684746') {
		if(command == prefix + 'verify') return;
		message.delete();
	}
	
	if(message.author.bot) return;
	
	if(message.channel.id == '509643348525711370' || message.channel.id == '525309739639504917' || message.channel.id == '525299537166991370' || message.channel.id == '525299459832414238') {
		message.channel.send({
			file: "https://cdn.discordapp.com/attachments/525299537166991370/525640447930925056/1212.png"
		});
	}
	
	if(command == prefix + 'help') {
		if(!args[1]) {
			const help = new Discord.RichEmbed()
			.setAuthor(client.user.username, client.user.avatarURL)
			.setColor('GREEN')
			.addField(`(1) ${prefix}bc`, '`The sender must have administrator permission to use broad cast command.`')
			.addField(`(2) ${prefix}ban`, '`The role of the bot must be higher than the person to be banned and must have permission to ban members.`')
			.addField(`(3) ${prefix}kick`, '`The role of the bot must be higher than the person to be kicked and must have permission to kick members.`')
			.addField(`(4) ${prefix}clear`, '`The member must have manage messages permission.`')
			.addField(`(5) ${prefix}role`, '`The role of bot must be higher than the role mentioned and must have permission to give the roles.`')
			.addField(`(6) ${prefix}points`, '`The member must have Manage Server to use this command.`')
			.addField(`(6) ${prefix}sug`, '`Send suggestion to suggestions room.`')
			.addField(`(7) ${prefix}mute`, '`The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.`')
			.addField(`(8) ${prefix}unmute`, '`The mentioned member must have muted to unmute him.`')
			.setTimestamp()
			.setFooter(`Use ${prefix}help <command> for more informations.`, "https://media1.picsearch.com/is?6-_gwqS1fu7CGInI2gbrjFizd6p1YVcMfLWzrF66i2Y&height=289");
			message.channel.send({
				embed: help
			});
		}else if(args[1] == 'role') {
			const role = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Role Command.')
			.setColor('GREEN')
			.setDescription('The role of bot must be higher than the role mentioned and must have permission to give the roles.\n')
			.addField(`${prefix}role <member> <role>`, 'if the member has the role, the bot will be remove it, but if haven\'t the role, the bot will give him.')
			.addField(`${prefix}role humans add <role>`, 'Give all human(s) the role.')
			.addField(`${prefix}role humans remove <role>`, 'Remove the role from all human(s).')
			.addField(`${prefix}role bot add <role>`, 'Give all bot(s) the role.')
			.addField(`${prefix}role bot remove <role>`, 'Remove from all bot(s) the role.')
			.addField(`${prefix}role all add <role>`, 'Give all member(s) the role.')
			.addField(`${prefix}role all remove <role>`, 'Remove from all member(s) the role.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: role
			});
		}else if(args[1] == 'points') {
			var points = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Points Command.')
			.setColor('GREEN')
			.setDescription('The member must have Manage Server to use this command.')
			.addField(`${prefix}points`, 'Show top 10 points.')
			.addField(`${prefix}points reset`, 'Reset all points.')
			.addField(`${prefix}points @User +1`, 'Add to user points, you can add more.')
			.addField(`${prefix}points @User -1`, 'Remove from user points, you can remove more.')
			.addField(`${prefix}points @User 1`, 'Sets points for user.')
			.addField(`${prefix}points @User reset`, 'Reset user points.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: points
			});
		}else if(args[1] == 'ban') {
			const ban = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Ban Command.')
			.setColor('GREEN')
			.setDescription('The role of the bot must be higher than the person to be banned and must have permission to ban members.\n')
			.addField(`-ban <member> <reason>`, 'Banned the member by id or mention and you dont need to type the reason.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: ban
			});
		}else if(args[1] == 'kick') {
			const kick = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Kick Command.')
			.setColor('GREEN')
			.setDescription('The role of the bot must be higher than the person to be kicked and must have permission to kick members.\n')
			.addField(`-kick <member>`, 'Kicked the member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: kick
			});
		}else if(args[1] == 'mute') {
			const mute = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Mute Command.')
			.setColor('GREEN')
			.setDescription('The mentioned member must not have the administrator\'s permission and must not be a bot and must not have already been mute.\n')
			.addField(`-mute <member>`, 'Muted member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: mute
			});
		}else if(args[1] == 'unmute') {
			const unmute = new Discord.RichEmbed()
			.setTitle(':white_check_mark: Unmute Command.')
			.setColor('GREEN')
			.setDescription('The mentioned member must have muted to unmute him.\n')
			.addField(`-unmute <member>`, 'Unmuted member by id or mention.')
			.setTimestamp()
			.setFooter(message.author.tag, message.author.avatarURL);
			message.channel.send({
				embed: unmute
			});
		}else {
			err(message, "Unkown command.");
		}
	}
	
	if(command == prefix + 'role') {
		if(!message.member.hasPermission('MANAGE_ROLES')) return;
        	if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
    		if(!args[1]) return err(message, `Use ${prefix}help for more inforamtions.`);
		if(!userM && args[1] !== 'humans' && args[1] !== 'bots' && args[1] !== 'all') return err(message, `Use ${prefix}help role for more inforamtions.`);
		if(userM) {
			var argsRole = message.content.toLowerCase().split(' ').slice(2);
		}else if(args[1] === 'humans' || args[1] === 'bots' || args[1] === 'all') {
			var argsRole = message.content.toLowerCase().split(' ').slice(3);
		}
		var getRole = message.mentions.roles.first() || message.guild.roles.find(r => r.id === argsRole) || message.guild.roles.find(r => r.name.toLowerCase().includes(argsRole));
		if(userM) {
			if(!getRole) return err(message, "Unkown role.");
			if(getRole.name === '@everyone') return err(message, "Unkown role.");
			if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
			if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
			if(!message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).addRole(getRole.id);
				suc(message, `Successfully give ${userM.user.username} role ${getRole.name}`);
			}else if(message.guild.member(userM.user).roles.has(getRole.id)) {
				message.guild.member(userM.user).removeRole(getRole.id);
				suc(message, `Successfully remove from ${userM.user.username} role ${getRole.name}`);
			}
		}else if(args[1] == 'humans') {
			if(!args[2]) return err(message, `Use ${prefix}help role for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return err(message, `No one haven't ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var membersRole = message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
						message.guild.member(m).addRole(getRole.id);
					});
					setTimeout(() => {
						message1.edit({
							embed: new Discord.RichEmbed().setAuthor(`Successfully give ${membersRole} human(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
						});
					}, 15000);
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size == 0) return err(message, `No one have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var membersRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).forEach(m => {
						message.guild.member(m).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from ${membersRole} human(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 15000)
					});
				});
			}else err(message, `Use ${prefix}help role for more informations.`);
		}else if(args[1] === 'bots') {
			if(!args[2]) return err(message, `Use ${prefix}help for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return err(message, `No bot haven't ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var botsRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(b => !message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
						message.guild.member(b).addRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully give ${botsRole} bot(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 10000);
					});
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).size == 0) return err(message, `No bot have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					var botsRole = message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id) && !m.user.bot).size;
					message.guild.members.filter(b => message.guild.member(b).roles.has(getRole.id) && b.user.bot).forEach(b => {
						message.guild.member(b).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from ${botsRole} bot(s) role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 10000)
					});
				});
			}else err(message, `Use ${prefix}help role for more informations.`);
		}else if(args[1] === 'all') {
			if(!args[2]) return err(message, `Use ${prefix}help for more inforamtions.`);
			if(args[2] === 'add') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).size == 0) return err(message, `No one haven\'t ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					message.guild.members.filter(m => !message.guild.member(m).roles.has(getRole.id)).forEach(m => {
						message.guild.member(m).addRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully give all role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 20000);
					});
				});
			}else if(args[2] === 'remove') {
				if(!args[3]) return err(message, "Unkown role.");
				if(!getRole) return err(message, "Unkown role.");
				if(getRole.name == '@everyone') return err(message, "Unkown role.");
				if(getRole.position >= message.guild.member(message.author).highestRole.position && message.author.id !== message.guild.owner.id) return err(message, `${getRole.name} role highest than your role.`);
				if(getRole.position >= message.guild.member(client.user).highestRole.position) return err(message, `${getRole.name} role highest than my role.`);
				if(message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).size == 0) return err(message, `No one have ${getRole.name} role.`);
				let timer = new Discord.RichEmbed()
				.setTitle(`:timer: Please wait a few seconds ..`)
				.setColor('#d3c325');
				message.channel.send({
					embed: timer
				}).then(message1 => {
					message.guild.members.filter(m => message.guild.member(m).roles.has(getRole.id)).forEach(m => {
						message.guild.member(m).removeRole(getRole.id);
						setTimeout(() => {
							message1.edit({
								embed: new Discord.RichEmbed().setAuthor(`Successfully remove from all role ${getRole.name}`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
							});
						}, 20000)
					});
				});
			}else err(message, `Use ${prefix}help role for more informations.`);
		}
	}
	
	if(command == prefix + 'customer') {
		var sellerRole = message.guild.roles.get('524848329604202496');
		var customerRole = message.guild.roles.get('525638239512559616');
		if(!message.member.roles.has(sellerRole)) return;
		if(!userM) return err(message, "Mention some one to add role.");
		if(userM.user.bot) return err(message, "You cant add role 'S.Customer to bots.");
		if(message.guild.member(userM.user).roles.has(customerRole)) return err(message, `${userM.user.username} already have role 'S.Customer.`);
		if(userM.user.id == message.author.id) return err(message, "You cant add role 'S.Customer to yourself.");
		message.guild.member(userM.user).addRole(customerRole.id);
		suc(message, `Successfully give ${userM.user.username} role 'S.Customer`);
	}
    
	if(command == prefix + 'sug') {
      		args = message.content.split(' ').slice(1).join(' ');
		if(!message.guild.channels.get('485880203827085322')) return err(message, 'The suggestions room is not defind.');
		if(sugCd.has(message.author.id)) return err(message, "You must wait 5min to use this command again.");
		if(!args) return err(message, `Use ${prefix}sug <sug>`);
		if(args.length > 1500) return err(message, 'The suggestion must be less than 1500 characters.');
		sugCd.add(message.author.id);
		message.delete();
		let sugMsg = new Discord.RichEmbed()
		.setTitle('**:bell: اقــــــتـــراح جـــــديــــــد :bell:**')
		.setColor('GREEN')
		.setThumbnail(message.author.avatarURL)
		.setDescription(`**➥ From:** ${message.author}\n\n**➥ Suggestion:**\n${args}`)
		.setTimestamp()
		.setFooter(message.author.tag, message.author.avatarURL)
		message.guild.channels.get('485880203827085322').send(sugMsg);
		suc(message, `${message.author.username} The sug was send to suggestions room.`);
		setTimeout(() => sugCd.delete(message.author.id), 300000);
	}
	
	if(command == prefix + 'bc') {
		var argsBC = message.content.split(' ').slice(1).join(' ');
		var x = 0;
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(cooldown.has(message.guild.id)) return err(message, "You must wait half hour to use this command again.");
		cooldown.add(message.guild.id);
		if(!argsBC) return err(message, "Type the message to send it.");
		message.delete();
		
		let timer = new Discord.RichEmbed()
		.setTitle(`:timer: Please wait a few seconds ..`)
		.setColor('#d3c325');
		message.channel.send({
			embed: timer
		}).then(message1 => {
			message.guild.members.filter(m => !m.user.bot).forEach(m => {
				m.send(argsBC).catch(err => x++);
			});
			setTimeout(() => {
				message1.edit({
					embed: new Discord.RichEmbed().setAuthor(`Successfully send the message to ${message.guild.members.filter(m => !m.user.bot).size} member(s)`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
				});
			}, 20000);
		});
		setTimeout(() => cooldown.delete(message.guild.id), 1800000);
	}
	
	if(command == prefix + 'points') {
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!args[1]) {
			if(!points) return err(message, "Added some points.");
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return err(message, "Added some points.");
			var x = 1;
			let pointsTop = new Discord.RichEmbed()
			.setAuthor(message.guild.name, message.guild.iconURL)
			.setColor('GREEN')
			.setDescription(memb.sort((second, first) => first.points > second.points).slice(0, 10).map(m => `**${x++}.** <@${m.id}> | ${m.points}`).join('\n'))
			.setTimestamp()
			.setFooter(`By request of ${message.author.username}`, message.author.avatarURL);
			message.channel.send({
				embed: pointsTop
			});
		}else if(args[1] == 'reset') {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points) return err(message, "No points to reset it.");
			var members = Object.values(points);
			var memb = members.filter(m => m.points >= 1);
			if(memb.length == 0) return err(message, "No points to reset it.");
			points = {};
			suc(message, "Successfully reset all points.");
		}else if(userM) {
			if(!message.member.hasPermission('MANAGE_GUILD')) return err(message, "You dont have Manage Server permission.");
			if(!points[userM.user.id]) points[userM.user.id] = {
				points: 0,
				id: userM.user.id
			};
			if(!args[2]) {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} Not have any points.`);
				var userPoints = new Discord.RichEmbed()
				.setColor('#d3c325')
				.setAuthor(`${userM.user.username} have ${points[userM.user.id].points} points.`);
				message.channel.send({
					embed: userPoints
				});
			}else if(args[2] == 'reset') {
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.userbane} not have any points to reset it.`);
				points[userM.user.id].points = 0;
				suc(message, `Successfully reset ${userM.user.username} points.`);
			}else if(args[2].startsWith('+')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 1000000) return err(message, `${userM.user.username} has reach the maximum of points.`);
				if(!args[2]) return err(message, "Please type the number.");
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The maximum for add points 1million.");
				if(args[2] < 1) return err(message, "The minimum for add points 1.");
				if((points[userM.user.id].points + args[2]) > 1000000) args[2] = 1000000 - points[userM.user.id].points;
				points[userM.user.id].points += args[2];
				suc(message, `Successfully added ${args[2]} to ${userM.user.username} (${points[userM.user.id].points} Total).`);
			}else if(args[2].startsWith('-')) {
				args[2] = args[2].slice(1);
				args[2] = parseInt(Math.floor(args[2]));
				if(points[userM.user.id].points == 0) return err(message, `${userM.user.username} not have any points to remove.`);
				if(!args[2]) return err(message, "Please type the number.");
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The maximum for remove points 1million.");
				if(args[2] < 1) return err(message, "The minimum for remove points 1.");
				if((points[userM.user.id].points - args[2]) < 0) args[2] = points[userM.user.id].points;
				points[userM.user.id].points -= args[2];
				suc(message, `Successfully remove ${args[2]} from ${userM.user.username} (${points[userM.user.id].points} Total).`);
			}else if(!args[2].startsWith('+') || !args[2].startsWith('-')) {
				args[2] = parseInt(Math.floor(args[2]));
				if(isNaN(args[2])) return err(message, "The points must be a number.");
				if(args[2] > 1000000) return err(message, "The miximum of points 1million.");
				if(args[2] < 1) return err(message, "The minimum of points 1.");
				if(points[userM.user.id].points == args[2]) return err(message, `${userM.user.username} points is already ${args[2]}.`);
				points[userM.user.id].points = args[2];
				suc(message, `Successfully set the points for ${userM.user.username} to ${args[2]}`);
			}else err(message, `Use ${prefix}help for more informations.`);
		}else err(message, `Use ${prefix}help for more informations.`);
	}
	
	if(command == prefix + 'ban') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return err(message, "I dont have Ban Members permission.");
		if(!args[1]) return err(message, "Mention the member to give him ban.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give ban to yourself.");
		if(message.guild.member(client.user).highestRole.position <= message.guild.member(userM.user).highestRole.position) return err(message, `I cant banned ${userM.user.username}.`);
		var reason = message.content.split(' ').slice(2).join(' ');
		if(!reason) reason = 'No reason given.';
		message.guild.member(userM.user).ban({
			reason: reason
		});
		suc(message, `Successfully banned ${userM.user.username}.`);
	}
	
	if(command == prefix + 'unbanall') {
		if(!message.member.hasPermission('ADMINISTRATOR')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('BAN_MEMBERS')) return err(message, "I dont have Ban Members permission.");
		message.guild.fetchBans().then(bans => {
			if(bans.size < 1) return err(message, "No bans found.");
			var x = 0;
			var sendMessage = true;
			message.channel.send(`Are you sure to unban ${bans.size} ban(s)? You have 10sec.`).then(msg => {
				msg.react('✅');
				var collected = msg.createReactionCollector((reaction, user) => reaction.emoji.name == '✅' && user.id == message.author.id, {
					time: 10000
				});
				collected.on('collect', r => {
					msg.delete();
					x = bans.size;
					sendMessage = false;
					let timer = new Discord.RichEmbed()
					.setTitle(`:timer: Please wait a few seconds ..`)
					.setColor('#d3c325');
					message.channel.send({
						embed: timer
					}).then(msg => {
						bans.forEach(ban => message.guild.unban(ban));
						setTimeout(() => msg.edit({
							embed: new Discord.RichEmbed().setAuthor(`Successfully unbanned ${x} ban(s).`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340").setColor('GREEN')
						}).then(msg => msg.delete(5000)), 20000)
					});
				});
				collected.on('end', collected => {
					if(sendMessage == 'false') return;
					msg.delete();
					message.channel.send({
						embed: new Discord.RichEmbed().setAuthor('Time was ended, try again.', "https://tse1.mm.bing.net/th?id=OIP.J-y_zWr6CiYBywhxuhKOVAHaHa&pid=15.1&P=0&w=300&h=300").setColor('RED')
					}).then(msg => msg.delete(2000))
				});
			});
		});
	}
	
	if(command == prefix + 'mute') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
		if(!args[1]) return err(message, "Mention the member to give him mute.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give mute to yourself.");
		if(userM.user.bot) return err(message, "You cant give mute to bot.");
		if(message.guild.member(userM.user).hasPermission('ADMINISTRATOR')) return err(message, `I cant give to ${userM.user.username} mute.`);
		var muteRole = message.guild.roles.find(r => r.name == 'Muted');
		if(!muteRole) return err(message, "I cant find role with name Muted.");
		if(message.guild.member(userM.user).roles.has(muteRole.id)) return err(message, `${userM.user.username} already muted.`);
		message.guild.member(userM.user).addRole(muteRole.id);
		suc(message, `Successfully give ${userM.user.username} Muted.`);
	}
	
	if(command == prefix + 'unmute') {
		if(!message.member.hasPermission('BAN_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_ROLES')) return err(message, "I dont have Manage Roles permission.");
		if(!args[1]) return err(message, "Mention the member to unmute him.");
		if(!userM) return err(message, "I cant find the member.");
		var muteRole = message.guild.roles.find(r => r.name == 'Muted');
		if(!message.guild.member(userM.user).roles.has(muteRole.id)) return err(message, `${userM.user.username} is not muted.`);
		message.guild.member(userM.user).removeRole(muteRole.id);
		suc(message, `Successfully remove muted from ${userM.user.username}.`);
	}
	
	if(command == prefix + 'kick') {
		if(!message.member.hasPermission('KICK_MEMBERS')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('KICK_MEMBERS')) return err(message, "I dont have Kick Members permission.");
		if(!args[1]) return err(message, "Mention the member to give him kick.");
		if(!userM) return err(message, "I cant find the member.");
		if(userM.id == message.author.id) return err(message, "You cant give kick to yourself.");
		if(message.guild.member(client.user).highestRole.position <= message.guild.member(userM.user).highestRole.position) return err(message, `I cant kicked ${userM.user.username}.`);
		message.guild.member(userM.user).kick();
		suc(message, `Successfully kicked ${userM.user.username}.`);
	}
	
	if(command == prefix + 'avatar') {
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(userM) {
			var avatarUr = userM.user.avatarURL;
			var nameMe = userM.user.username;
			var colorRole = userM.highestRole.hexColor;
		}else {
			var avatarUr = message.author.avatarURL;
			var nameMe = message.author.username;
			var colorRole = message.member.highestRole.hexColor;
		}
		var avatar = new Discord.RichEmbed()
		.setAuthor(`${nameMe}'s Avatar`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
		.setColor(colorRole)
		.setImage(avatarUr);
		message.channel.send({
			embed: avatar
		});
	}
	
	if(command == prefix + 'say') {
		if(message.author.id !== '346629187504832513') return;
		if(!args[1]) return message.delete();
		args = message.content.split(' ').slice(1).join(' ');
		message.delete();
		message.channel.send(args);
	}
	
	if(command == prefix + 'clear') {
		if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
		if(!message.guild.member(client.user).hasPermission('EMBED_LINKS')) return message.channel.send(':no_entry: | I dont have Embed Links permission.');
		if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return err(message, "I dont have Manage Messages permission.");
		if(!args[1]) args[1] = 100;
		if(args[1] && isNaN(args[1])) return err(message, "Must be a number.");
		if(args[1] > 100 || args[1] < 2) return err(message, "Choose number from 2 to 100.");
		if(message.channel.messages.size < 2) return err(message, "I cant find any message in this channel.");
		message.delete()
		await message.channel.bulkDelete(args[1]).then(messages => {
			var suc = new Discord.RichEmbed()
    			.setAuthor(`Successfully delete ${messages.size} message.`, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
			.setColor('GREEN');
			message.channel.send({
        			embed: suc
    			}).then(msg => msg.delete(2000));
		});
	}
	
	if(command == prefix + 'k') {
		if(message.author.id !== '325165115131428864') return err(message, "This command is only for кнαιí∂ αιεnαzí ♛.");
		let info = new Discord.RichEmbed()
		.setAuthor(message.author.username, message.author.avatarURL)
		.setThumbnail(message.author.avatarURL)
		.setColor('RED')
		.setDescription('**- Programmer\n- Player\n- Designer\n- Producer\n- Served FlintPvP server for 4 consecutive years\n- Served Flix-Host for 6 months Continuous\n- Retired on 22 August 2018\n**')
		.addField('Name', 'Khalid Alenazi.', true)
		.addField('Age', '20.', true)
		.addField('Rank', 'F5M.', true)
		.addField('From', 'Saudi Arabia.', true)
		.setFooter('He is a respectable and gentle man.');
		message.channel.send({
			embed: info
		});
	}
});

client.on('guildMemberUpdate', (om, nm) => {
        if(nm.roles.size > om.roles.size) {
                let role = nm.roles.filter(r => !om.roles.has(r.id)).first();
                if(role.id == om.guild.roles.find(r => r.name == 'Special Client').id || role.id == om.guild.roles.find(r => r.name == 'Client').id) {
                        let thx = new Discord.RichEmbed()
                        .setAuthor(om.guild.name, om.guild.iconURL)
                        .setColor('GREEN')
                        .setThumbnail(om.guild.iconURL)
                        .setDescription(`مرحبا ${om} ..
نشكرك لوثوقك باستضافتنا والشراء منها!
اذا كان عندك مشكله بمنتجك الرجاء التوجه الى الدعم الفني .

لا تنسى ان تقيمنا بروم
<#462816384083034114>
لنرفع من مستوى الاستضافه .. وشكرا :heart:`)
                        .setTimestamp()
                        .setFooter(om.user.tag, om.user.avatarURL);
                        om.send({
                                embed: thx
                        }).catch(err => om.guild.owner.send(`${om} مقفل خاصة`));
                }
        }
});

function suc(message, args) {
    var suc = new Discord.RichEmbed()
    .setAuthor(args, "https://media3.picsearch.com/is?yYyH6QeF4vRyybuH60KCypFS9-Hs1BdhfebbWj6OhyI&height=340")
    .setColor('GREEN');
    message.channel.send({
        embed: suc
    });
}
function err(message, args) {
    var err = new Discord.RichEmbed()
    .setAuthor(args, "https://tse1.mm.bing.net/th?id=OIP.J-y_zWr6CiYBywhxuhKOVAHaHa&pid=15.1&P=0&w=300&h=300")
    .setColor('RED');
    message.channel.send({
        embed: err
    });
}

client.login(process.env.TOKEN);
