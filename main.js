const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");

bot_registry_registerGroup('music', 'Music');

client.on("ready", () => {
    console.log("Estoy listo!");
 });
 var prefix = config.prefix;

 client.on("message", (message) => {
  if (message.content.startsWith("!s5m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 5 MINUTOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s4m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 4 MINUTOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s3m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 3 MINUTOS. Suban a la sala Sincronización!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s2m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 2 MINUTOS. Suban a la sala Sincronización!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s1m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 1 MINUTO. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s30s")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 30 SEGUNDOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s20s")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 20 SEGUNDOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s15s")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 15 SEGUNDOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!s10s")) {
    let modrole = message.guild.roles.find("name", "Organizadores")
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 10 SEGUNDOS. Suban a la sala Sincronización!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!live")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **Live all/ todas las lobbys se juegan!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!rmk")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **Remake todos!, hay demasiadas lobbys!**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!livrmk")) {
     let modrole = message.guild.roles.find("name", "Organizadores" );
      if(message.member.roles.has(modrole.id)) {
         message.channel.send(`@here **LOBBYS QUE SE JUEGAN:** ${message.content.split(" ").splice(1).join(",")} ,  **EL RESTO REMAKE!**`);
     }
  }
});

client.on('message', message => {
  var sender = message.member;
  var prefix = '>'
  if (message.channel.id === '513827541430304816') {
    if(message.content.length != 4) {
      message.delete()
      message.member.send('Solamente se puede escribir el codigo de tu lobby, si quieres decir algo por favor usa el chat scrims, gracias!')
    }
  }
});

 client.on("message", (message) => {
  if (message.content.startsWith("!s30s")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 30 SEGUNDOS!. Suban a la sala Sincronización**.");
    }
  }
});    
        
 client.on("message", (message) => {
  if (message.content.startsWith("!s15s")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __SOLO SCRIMS__ comienza en 15 SEGUNDOS!. Suban a la sala Sincronización**.");
    }
  }
});

 client.on("message", (message) => {
  if (message.content.startsWith("!d5m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 5 MINUTOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d4m")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 4 MINUTOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d3m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 3 MINUTOS. Suban a la sala Sincronización!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d2m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 2 MINUTOS. Suban a la sala Sincronización!.**");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d1m")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 1 MINUTO. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d20s")) {
    let modrole = message.guild.roles.find("name", "Organizadores" );
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 20 SEGUNDOS. Suban a la sala Sincronización!**.");
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("!d10s")) {
    let modrole = message.guild.roles.find("name", "Organizadores")
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 10 SEGUNDOS. Suban a la sala Sincronización!**");
    }
  }
});
     
 client.on("message", (message) => {
  if (message.content.startsWith("!d30s")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 30 SEGUNDOS!. Suban a la sala Sincronización**.");
    }
  }
});
        
 client.on("message", (message) => {
  if (message.content.startsWith("!d15s")) {
    let modrole = message.guild.roles.find("name", "Organizadores");
    if(message.member.roles.has(modrole.id)) {
    message.channel.send("@here **La próxima partida de __DUO SCRIMS__ comienza en 15 SEGUNDOS!. Suban a la sala Sincronización**.");
    }
  }
});        
  
