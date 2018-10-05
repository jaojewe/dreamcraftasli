const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`DreamCraft`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});





const HeRo = new Discord.Client();
client.on('message', message => {
var prefix = "+";

    if (message.content === prefix + "date") {
        if (!message.channel.guild) return message.reply('** This command only for servers **');  
        var currentTime = new Date(),
            Year = currentTime.getFullYear(),
            Month = currentTime.getMonth() + 1,
            Day = currentTime.getDate();

            var Date15= new Discord.RichEmbed()
            .setTitle("**「  Date - التاريخ 」 **")
            .setColor('RANDOM')
            .setTimestamp()
            .setDescription( "「"+ Day + "-" + Month + "-" + Year + "」")
             message.channel.sendEmbed(Date15);
    }
});


  
function errormsg(message, err, cmd) {
    message.channel.send(errmsg) 
    client.channels.get("497757586477547521").send(`**:warning: Error**`, {embed: {
    description: `\`\`\`${err}\`\`\` `,
    fields: [
        {
        name: "**server**",
        value: message.guild.name,
        inline: true
        }, 
        {
        name: "**user**",
        value: message.author.username,
        inline: true
        }, 
        {
        name: "**command**",
        value: cmd,
        inline: true
        }
    ]}})
    return; 
}
  

client.on('message', function(message) {
  if (message.content.startsWith(prefix + 'info')) {
  message.delete;
  message.channel.send("", {
      embed: {
          color : 0xE15306,
  author :{name: message.author.name},
          description : "",
          title : "Server Info",
          fields : [
              {
   name : '**Server Name**',
   value : message.guild.name,
   inline : true
            },{
   name : '**Owner**',
   value : message.guild.owner.user.tag,
   inline : true
 },{
    name :'**Verification Level**',
    value : message.guild.verificationLevel,
    inline : true
 },{
    name : '**Region**',
    value : message.guild.region,
    inline : true
 },{
   name : '**Members Count**',
   value : message.guild.memberCount,
   inline : true
 },{
   name : '**Humans**',
   value : message.guild.members.filter(m => m.user).size,
   inline : true
 },{
   name : '**Bots**',
   value : message.guild.members.filter(m => m.user.bot).size,
   inline : true
 }],
},
footer : {
   text : 'RANDOM'
          }
    });
}

	  
	  

client.login(process.env.BOT_TOKEN);
