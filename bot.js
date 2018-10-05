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

const adminprefix = "+";
const devs = ['428890200735875073'];
    client.on('message', message => {
        if (message.author.bot) return;
        if (!message.content.startsWith(prefix)) return;
      
        let command = message.content.split(" ")[0];
        command = command.slice(prefix.length);
      
      
      let args = message.content.split(" ").slice(1);
      let x = args.join(" ")
        if(message.content.startsWith(adminprefix + 'say')) {
            message.channel.send(''+x);
                message.delete(999)
        }
        
       
      });


client.on('message' , message => {
    var prefix = "+";
    let user = message.mentions.users.first()|| client.users.get(message.content.split(' ')[1])
    if(message.content.startsWith(prefix + 'unban')) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('❌|**\`ADMINISTRATOR\`لا توجد لديك رتبة`**');
        if(!user) return  message.channel.send(`Do this ${prefix} <@ID user> \n or \n ${prefix}unban ID user`);
        message.guild.unban(user);
        message.guild.owner.send(`لقد تم فك الباند عن الشخص \n ${user} \n By : <@${message.author.id}>`)
        var embed = new Discord.RichEmbed()
        .setThumbnail(message.author.avatarURl)
        .setColor("RANDOM")
        .setTitle('**●Unban** !')
        .addField('**●User Unban :** ', `${user}` , true)
        .addField('**●By :**' ,       ` <@${message.author.id}> ` , true)
        .setAuthor(message.guild.name)
        message.channel.sendEmbed(embed)
    }
});

  
  client.on('message', message => {

    if (message.content === "+mc") {
                        if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات ✅ ")
           });
             }
if (message.content === "+umc") {
    if(!message.channel.guild) return message.reply(' هذا الامر فقط للسيرفرات !!');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات✅")
           });
             }



});

 client.on('message', message => {
if(message.content.startsWith("+slots")) {
  let slot1 = ['🍏', '🍇', '🍒', '🍍', '🍅', '🍆', '🍑', '🍓'];
  let slots1 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots2 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let slots3 = `${slot1[Math.floor(Math.random() * slot1.length)]}`;
  let we;
  if(slots1 === slots2 && slots2 === slots3) {
    we = "Win!"
  } else {
    we = "Lose!"
  }
  message.channel.send(`${slots1} | ${slots2} | ${slots3} - ${we}`)
}
});


client.on ('message',async Sal => { //By Salto7#4595
    let embed = new Discord.RichEmbed()
    if (Sal.content === "+id4") {
      let embed = new Discord.RichEmbed()
     .setColor("RANDOM")
     .setThumbnail(Sal.author.avatarURL)
     .setImage(Sal.author.avatarURL)
     .addField("اسمك:",`${Sal.author.username}`, true)
     .addField('ايديك:',"" +  Sal.author.id, true)
     .addField('تاقك', Sal.author.discriminator, true)
     .addField('تم الانشاء في', Sal.author.createdAt, true)
     Sal.channel.sendEmbed(embed);
    }
  });

client.on('message', function(message) {
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        var stewart = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTimestamp()
            .setTitle('``رساله جديده في خاص البوت``')
            .setThumbnail(`${message.author.avatarURL}`)
            .setDescription(`\n\n\`\`\`${message.content}\`\`\``)
            .setFooter(`من (@${message.author.tag})  |  (${message.author.id})`)
        client.channels.get("467173507613065237").send({ embed: stewart });
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '+support') {
      message.author.send(' https://discord.gg/ySnVHNd لـ أي استفسار').catch(e => console.log(e.stack));

    }
   } 
  });
  
client.on("message", message => {
    var prefix = "+";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("+clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});

	
    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='+members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| الاونلاين ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



client.on('message', message => {
    if (message.content === "+server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
         .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: الدوله',message.guild.region)
         .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
         .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


client.on('message', message => {
    if (message.content.startsWith("+avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});




var cats = [
 
"https://cdn.discordapp.com/attachments/477840502583066624/489925349480595471/c8458dcb83ef3f51eb67871656460acda8008de1_hq.jpg",
"https://cdn.discordapp.com/attachments/471048168734326784/489926293945843722/D986D983D8AA-D8B9D986-D8A7D984D8A8D986D8A7D8AA-4.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926344956837918/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-130.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926377219555328/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926396878127114/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926441497001984/75e9de50bbe56adfa2dd0d79765618f3_400x400.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926523143585793/maxresdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926558975262721/D986D983D8AAD8A9-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926561441513482/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926572699025408/83efa282386a3c97b55b554e12034f09.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489926573823361037/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927028988968970/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927039474991117/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927054238679052/hqdefault.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927075751395338/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927100300525568/screen-16.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927135952240666/D986D983D8AAD987.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927196056748032/1462535501-kololk.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927216474357771/52ec73eb7867b5d69fe2573c695ddec0ef59aaae_00.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927223055220736/10352280_326716524148020_473570926368633860_n.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927225953615872/84.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927310246674432/D8B5D988D8B1-D986D983D8AA-D985D8B6D8ADD983D8A9-D8ACD8AFD8A7-500x380.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927542812180493/D8B5D988D8B1-D986D983D8AA-2.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927575783735316/750a293b4222503c2c82ea351795d82d94d394bd_hq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927587653615626/joke.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927610260914178/D8B5D988D8B1-D986D983D8AA-32.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927618972352547/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927638794764288/3dlat.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927661502857226/images.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927734458581002/665.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927737738526721/D986D983D8AA-D985D8B6D8ADD983D8A9-5.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927741555343405/5L756426.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489927775168233493/27-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928045449314356/D986D983D8AA.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928124188852226/C_0g73iVYAARXkq.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928134347587604/almastba.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928135379517440/e3b1c8571e56805fc07e776eb5fd46df-best-funny-images-arabic-jokes.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928158141743112/PIC-724-1452961611-1.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928201116581888/do.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928210126077955/21581874-v2_xlarge.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928236390940698/D986D983D8AA-D985D8B6D8ADD983D8A9-3.png",
"https://cdn.discordapp.com/attachments/471048168734326784/489928244293009408/D986D983D8AA-D986D983D8A7D8AA-D986D983D8AA-D985D8B6D8ADD983D8A9-128.png"
]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + " نكت" )) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});



client.login(process.env.BOT_TOKEN);
