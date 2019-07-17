const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");


const activities_list = [
    "KGY >> ALL", 
    "Developer: Leozinho | Dark171CPS#2036",
    "Caso esteja com duvida /ajuda",
    "X1 NÃO TANKA LEK",
    "KGY >> É O TREEMM",
    "Developer: Leozinho | Dark171CPS#2036",
    "KGY >> ALL",
    ];
  client.on('ready', () => {
    console.log(`Bot foi iniciado, com ${client.users.size} usuários, em ${client.channels.size} canais, em ${client.guilds.size} servidores.`);
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
        client.user.setActivity(activities_list[index]); 
    }, 5000); 
  });

client.on("guildCreate", guild => {
    console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
    client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
    console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
    client.user.setActivity(`Serving ${client.guilds.size} servers`);
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.tyé === "dm") return


    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();


    if(comando === "ping") {
        const m = await message.channel.send("Ping?");
        let embed = new Discord.RichEmbed()
    
        .setTitle('Ping | Kaguya') 
        .setColor('#000000')
        .setDescription(`A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`)
        .setTimestamp()
        .setFooter("🔥 Kaguya - Copyright© ")
    
        m.edit(embed);
      }

      if(comando === "anuncio") {
        if(!message.member.roles.some(r=>["."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
     
      let mensagem_anuncio = args.join(" ");
           let member = message.author;
           if(!mensagem_anuncio) 
           return message.reply("Eae men, usa assim: /anuncio (texto)");
           let embed = new Discord.RichEmbed()
    
           .setTitle(":bell: Anúncio | Kaguya", client.user.avatarURL)
           .setDescription(`${mensagem_anuncio}`)
           .setColor("#000000")
           .setFooter(`Anúncio feito por: ${message.author.username}`, member.avatarURL)
           .setTimestamp()
    
           message.delete().catch();
           message.channel.send("||@everyone||");
           message.channel.send(embed);
    
       }
       
       if(comando === "changelog") {
        if(!message.member.roles.some(r=>["."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
     
      let mensagem_anuncio = args.join(" ");
           let member = message.author;
           if(!mensagem_anuncio) 
           return message.reply("Eae men, usa assim: /changelog (texto)");
           let embed = new Discord.RichEmbed()
    
           .setTitle("📆 Changelog | Kaguya", client.user.avatarURL)
           .setDescription(`${mensagem_anuncio}`)
           .setColor("#000000")
           .setFooter(`Changelog feito por: ${message.author.username}`, member.avatarURL)
           .setTimestamp()
    
           message.delete().catch();
           message.channel.send(embed);
    
       }

       if(comando === "expulsar") {
        if(!message.member.roles.some(r=>["."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
        let member = message.mentions.members.first() || message.guild.members.get(args[0]);
        if(!member)
          return message.reply("Por favor mencione um membro válido da facção");
        if(!member.kickable) 
          return message.reply("Eu não posso expulsar este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de expulsar?");
        
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Nenhuma razão fornecida";
        
        await member.kick(reason)
          .catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
        message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);
    
      }

      if(comando === "banir") {
        if(!message.member.roles.some(r=>["."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
        let member = message.mentions.members.first();
        if(!member)
          return message.reply("Por favor mencione um membro válido deste servidor");
        if(!member.bannable) 
          return message.reply("Eu não posso banir este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de banir?");
        let reason = args.slice(1).join(' ');
        if(!reason) reason = "Nenhuma razão fornecida";
        await member.ban(reason)
          .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o : ${error}`));
        message.reply(`${member.user.tag} foi banido por ${message.author.tag} Motivo: ${reason}`);
      }

      if(comando === "roster") {
        if(!message.member.roles.some(r=>["."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
     
      let mensagem_anuncio = args.join(" ");
           let member = message.author;
           if(!mensagem_anuncio) 
           return message.reply("Eae men, usa assim: /roster (texto)");
           let embed = new Discord.RichEmbed()
    
           .setTitle("📙 Roster | Kaguya", client.user.avatarURL)
           .setDescription(`${mensagem_anuncio}`)
           .setColor("#000000")
           .setFooter(`Roster feita por: ${message.author.username}`, member.avatarURL)
           .setTimestamp()
    
           message.delete().catch();
           message.channel.send("");
           message.channel.send(embed);
    
       }


       if(comando === "limpar") {
    if(!message.member.roles.some(r=>["."].includes(r.name)) )
    return message.reply("Desculpe, você não tem permissão para usar isto!");
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 1 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 1 e 100 para o número de mensagens a serem excluídas");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));
  
       }

       if(comando === "enquete") {
        if(!message.member.roles.some(r=>["👑 ❰❰ Owner ❱❱ 👑", "♕ ❰❰ General ❱❱ ♕", "✞ ❰❰ Admin ❱❱ ✞", "."].includes(r.name)) )
        return message.reply("Desculpe, você não tem permissão para usar isto!");
    
           let member = message.author;
           let mensagem = args.join(" ");
        let embed = new Discord.RichEmbed()
    
        .setTitle('🗞 Enquete | Kaguya')
        .setColor('#0000FF')
        .setThumbnail(message.guild.iconURL)
        .setDescription(`${mensagem}`)
        .setFooter('Enquete feita por ' + message.author.username, member.avatarURL)
        .setTimestamp()
    
    
        message.delete().catch();
        message.channel.send("||@everyone||").then(msg => {msg.delete(2000)});;
    
        message.channel.send(embed).then(async (msg) => {
          msg.react('✅')
          msg.react('❌')
        })
      }
    

       if(comando === "ajuda") {
        message.delete().catch();
    
        let IDs = ['589948678958088222']
        if (IDs.some(id => id == message.channel.id)) return message.reply("Você não pode utilizar comandos aqui!! Utilize o chat de <#590062852627365925>.").then( msg => {msg.delete(5000)})
        
        let member = message.author;
        let embed = new Discord.RichEmbed()
        
        .setDescription("**ADMINISTRAÇÃO** \n\n/banir `<usuário>`\n\n/expulsar `<usuário>`\n\n/anuncio `<texto>`\n\n/enquete `<texto>`\n\n\/roster `<texto>`")
        .setColor('#00BFFF')
        .setThumbnail(message.guild.iconURL)
    
        message.channel.send(`**A lista dos meus comandos está no seu privado**`).then(msg => {msg.delete(5000)});;
        member.send(embed);
    }
       


});

client.login(process.env.BOT_TOKEN);
