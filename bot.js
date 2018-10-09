const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '+'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
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




client.on('message', message => {
     if (message.content === "+ping") {
      const embed = new Discord.RichEmbed()
 
  .setColor("#FF0000")
  .addField('``سرعة أتصال الــبوت`` ' , `${Date.now() - message.createdTimestamp}` + ' ms`')
                 .setFooter(` ♕ Dream . Bot ♕
 .`, 'file:///C:/Users/win/Desktop/0580559d62b2bbb5aa1990641d4f6f20.png')

  message.channel.sendEmbed(embed);
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

client.on('message', message => {
    if(message.content === "+server-bot") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
        .setDescription(`**Servers**🌐 **__${client.guilds.size}__**
**Users**👥 **__${client.users.size}__**
**Channels**📚 **__${client.channels.size}__** `)
               message.channel.sendEmbed(embed);
           }
});



client.on('message', message => {
    if (message.content == "+اسألني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})


 
 

 
client.on('message', function(msg) {
    const prefix = '+'
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });



client.on('message', message => {

    if (message.content.startsWith("+link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});




client.on('message', message => {

    if (message.content.startsWith("+رابط")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});



client.on('message', msg => { 
      if (msg.content.startsWith(`+اقتراح`)) {
         let args = msg.content.split(" ").slice(1);
        if (!args[1]) return msg.reply(`يجب كتابه الاقتراح`)
        if (msg.guild.channels.find('name', 'suggestions')) {
          msg.guild.channels.find('name', 'suggestions').send(`
        الاقتراح من : ${msg.member}
        الاقتراح : **${args.join(" ").split(msg.mentions.members.first()).slice(' ')}**
        `)
        }
      }
      })



client.on('message', message => {
            if (message.content.startsWith("+rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    var prefix = "+"
    if (message.content === prefix + "date") {
        var currentTime = new Date(),
            السنة = currentTime.getFullYear(),
            الشهر = currentTime.getMonth() + 1,
            اليوم = currentTime.getDate();
        message.channel.sendMessage( "التاريخ : " + اليوم + "-" + الشهر + "-" +السنة)
    }
});



client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:${member}:crown:
https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
});





  client.on('message', message => {
    if (message.content === "+rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});






client.on("message", (message) => {
if (message.content.startsWith("+ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
client.on("message", (message) => {
if (message.content.startsWith("+cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')
    
}
});
 


client.on('message', message => {
 if (message.content.startsWith("ترحيب 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ترحيب 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
  .setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 



const secre = [
  "**لو خيروك بين العيش وحدك في جزيرة كبيرة منعزلة مع أكبر درجات الرفاهية وبين العيش في مكان قديم ولكن مع أصدقائك المقربين**.",
  "**لو خيروك بين فقدان ذاكرتك والعيش مع أصدقائك وأقربائك أو بقاء ذاكرتك ولكن العيش وحيد**.",
  "**للو خيروك بين تناول الخضار والفاكهة طوال حياتك أو تناول اللحوم**.",
  "**لو خيروك بين رؤية الأشباح فقط أو سماع صوتها فقط**.",
  "**لو خيروك بين القدرة على سماع أفكار الناس أو القدرة على العودة في الزمن للخلف**.", 
  "**لو خيروك بين القدرة على الاختفاء أو القدرة على الطيران**.", 
  "**لو خيروك بين أن تعيش 5 دقائق في الماضي أو أن تعيشها في المستقبل**.", 
  "**لو خيروك بين 5 ملايين دولار أو 5 ملايين لحظة سعادة حقيقيةا**.", 
  "**لو خيروك بين الاعتذار عن خطأ اقترفته أو أن يقدم لك شخص أخطأ في حقق اعتذار**.", 
  "**لو خيروك بين الحقد أو المسامحة**.", 
  "**لو خيروك بين إنقاذ نفسك أو إنقاذ شخص وقد يعرضك ذلك للأذى**.",
  "**لو خيروك بين أن تعيش في القرن الرابع عشر أو القرن الحالي**.", 
  "**لو خيروك بين امتلاك سرعة الفهد أو دهاء الثعلب**.", 
  "**لو خيروك بين أن تحصل على درجة كاملة في كامل اختباراتك القادمة والسابقة أو أن تسافر إلى بلد تحبه**.", 
  "**لو خيروك بين العيش بجانب الجبال والحدائق والأشجار أو العيش بجانب البحر**.", 
  "**لو خيروك بين تحقيق 3 أمنيات (لا تتعلق بأشخاص) أو اختيار 3 أشخاص للعيش معهم طوال حياتك**.", 
  "**لو خيروك بين النوم في غابة مظلمة أو على ظهر سفينة في يوم عاصف**.", 
  "**لو خيروك بين المال أو الجمال**.", 
  "**لو خيروك بين المال أو الذكاء**.", 
  "**لو خيروك بين المال أو الصحة**.", 
  "**لو خيروك بين الجمال أو الذكاء**.", 
  "**لو خيروك بين الذكاء أو الصحة**.", 
  "**لو خيروك بين إرسال رسالة صوتية لأمك مدة دقيقة كاملة لا تحتوي إلا على صراخك وخوفك، أو كسر بيضة نيئة على رأسك**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("+لوخيروك")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه لو خيروك' ,
  `${secre[Math.floor(Math.random() * secre.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});


client.on('message', message => {
    var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();2
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});





client.on('message', message => {
    var prefix = "+"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام') {
              message.channel.send('وعليكم السلام :heart: ');
    message.reply(message.author.avatarURL); 

               

            }
}); 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send('وعليكم السلام :heart: ');
    message.reply(message.author.avatarURL); 

               

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
            if (message.content.startsWith("حبيبي")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField ('**What**', ' ? ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);

            }
 });
 
 
 
 client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send('هلا حبي :heart: ');
    message.reply(message.author.avatarURL); 
               

            }
}); 
 


      client.on('guildMemberAdd', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`يا هلا بك :raised_hand::skin-tone-1: :smiley:`)
        .setDescription(`اهلاً بك في سيرفرنا :blush:`)
        .addField(' :bust_in_silhouette:  انت رقم',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('GREEN')
        .setFooter('======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======', 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    });

    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`الله معاك :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`======= نــتــمــنــآ لــكــم آســتــمـــتــآع =======`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')

    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })

 

client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كل زق')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 

 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كسمك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('كس امك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 
 
 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('قحبه')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 

 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('خنيث')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زق')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
});  



 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('زبي')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 
 
 
 


 
 
client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('طيزك')){
        message.delete()
      message.channel.sendMessage("", {embed: {
        title: "لا تسب",
        color: 0x06DF00,
        description: "مَّا يَلْفِظُ مِن قَوْلٍ إِلَّا لَدَيْهِ رَقِيبٌ عَتِيدٌ ",
        footer: {
          text: "♕ Dream . Bot ♕"
        }
      }}).then(msg => {msg.delete(4000)});
                          }

     
}); 

client.on('message', message => {
    if (message.content.startsWith("+hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``اكتب اسم الشخص الي تبي يتهكر``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('تم تهكيرك')
           }, 6000)
           });
         }
 });


client.on('message', message => {
  if(message.content === '+support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/qMhZcHz ')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


 client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('+bcall')){
 if (message.author.id !== '428890200735875073') return message.reply('** هذا الأمر قفط لصاحب البوت و شكراًً **')
 if(!message.author.id === '428890200735875073') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});
 
 

	client.on('message', async message =>{
  if (message.author.boss) return;
	var prefix = "+";

if (!message.content.startsWith(prefix)) return;
	let command = message.content.split(" ")[0];
	 command = command.slice(prefix.length);
	let args = message.content.split(" ").slice(1);
	if (command == "mute") {
		if (!message.channel.guild) return;
		if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
		if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
		let user = message.mentions.users.first();
		let muteRole = message.guild.roles.find("name", "Muted");
		if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
		if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
		let reason = message.content.split(" ").slice(2).join(" ");
		message.guild.member(user).addRole(muteRole);
		const muteembed = new Discord.RichEmbed()
		.setColor("RANDOM")
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setThumbnail(user.displayAvatarURL)
		.addField("**:busts_in_silhouette:  المستخدم**",  '**[ ' + `${user.tag}` + ' ]**',true)
		.addField("**:hammer:  تم بواسطة **", '**[ ' + `${message.author.tag}` + ' ]**',true)
		.addField("**:book:  السبب**", '**[ ' + `${reason}` + ' ]**',true)
		.addField("User", user, true)
		message.channel.send({embed : muteembed});
		var muteembeddm = new Discord.RichEmbed()
		.setAuthor(`Muted!`, user.displayAvatarURL)
		.setDescription(`      
${user} انت معاقب بميوت كتابي بسبب مخالفة القوانين
${message.author.tag} تمت معاقبتك بواسطة
[ ${reason} ] : السبب
اذا كانت العقوبة عن طريق الخطأ تكلم مع المسؤلين
`)
		.setFooter(`في سيرفر : ${message.guild.name}`)
		.setColor("RANDOM")
	user.send( muteembeddm);
  }
if(command === `unmute`) {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.sendMessage("**ليس لديك صلاحية لفك عن الشخص ميوت**:x: ").then(m => m.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("**I Don't Have `MANAGE_ROLES` Permission**").then(msg => msg.delete(6000))

  let toMute = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toMute) return message.channel.sendMessage("**عليك المنشن أولاّ**:x: ");

  let role = message.guild.roles.find (r => r.name === "Muted");
  
  if(!role || !toMute.roles.has(role.id)) return message.channel.sendMessage("**لم يتم اعطاء هذه شخص ميوت من الأساس**:x:")

  await toMute.removeRole(role)
  message.channel.sendMessage("**لقد تم فك الميوت عن شخص بنجاح**:white_check_mark:");

  return;

  }

});
 

 
	client.on('message', message => {
    if(message.content === "+info") {
        const embed = new Discord.RichEmbed()
        .setColor("#00FFFF")
  .addField('**الذاكرة المستخدمة 💾**', `${(process.memoryUsage().rss / 1000000).toFixed()}MB`, true)
         .addField('**سرعة الاتصال📡**' , `${Date.now() - message.createdTimestamp}` + ' ms')
        .addField('**استخدام المعالج💿**', `${(process.cpuUsage().rss / 10000).toFixed()}%`, true)
        .addField('**:globe_with_meridians: عدد السيرفرات**' , `${client.guilds.size}`, true)
        .addField('**عدد المستخدمين 👥 **' , `${client.users.size}`, true)
               message.channel.sendEmbed(embed);
           }
});
 

const perfix = '+';
client.on('message', msg => {
 if (msg.content.startsWith(prefix + 'send')) {
      let args = msg.content.split(' ').slice(1)
      if (!args[0]) return msg.reply(`**منشن الشخص اولا**`)
      if (!args[1]) return msg.reply(`**ما هي الرساله المطلوب ارسالها**`)
      let Emoko = msg.mentions.members.first()
      if (!Emoko) return msg.reply(`**يجب تحديد الشخص**`)
      let EmokoEmbed = new Discord.RichEmbed()
      .setTitle(`**رسالة جديدة:new_moon_with_face: **`)
      .setDescription(args.join(" "))

      client.users.get(`${Emoko.id}`).send(EmokoEmbed)
      msg.reply(`**تم ارسال الرساله**`)
    }
});



    client.on('message' , message => {
var prefix = "+"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;



let args = message.content.split(" ").slice(1).join(" ");



client.users.get("428890200735875073").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("Dream . Bot")


message.channel.send(embed);


}

});



 client.on("message", message => {
	 var prefix = "+"
	 if (!message.content.startsWith(prefix)) return;
		let command = message.content.split(" ") [0];
		command = command.slice(prefix.length);
			if(command === "skin") {
					const args = message.content.split(" ").slice(1).join(" ")
			if (!args) return message.channel.send("** Type your skin name **");
			const image = new Discord.Attachment(`https://minotar.net/armor/body/${args}`, "skin.png");
		message.channel.send(image)
        }
    });
	

 client.on('message', message => {
if (message.content.startsWith('+inv-info')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت لسرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(alpha);

});

};
  });















client.on('message', message => {
var prefix = "+";
       if(message.content === prefix + "mutechannel") {
                           if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' **__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: false

              }).then(() => {
                  message.reply("**__تم تقفيل الشات__ ✅ **")
              });
                }
//FIRE BOT
    if(message.content === prefix + "unmutechannel") {
                        if(!message.channel.guild) return message.reply('** This command only for servers**');

   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**__ليس لديك صلاحيات__**');
              message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true

              }).then(() => {
                  message.reply("**__تم فتح الشات__✅**")
              });
    }
       
});

	



 
client.on('message', message => {
if (message.content.startsWith('+invites')) {
let oi = message.mentions.users.first() ? message.mentions.users.first().id : message.author.id ; 
  let img = message.mentions.users.first() ? message.mentions.users.first().username : message.author.username;
  let imagemm = message.mentions.users.first() ? message.mentions.users.first().avatarURL : message.author.avatarURL
  message.guild.fetchInvites().then(invs => {
    let member = client.guilds.get(message.guild.id).members.get(oi);
    let personalInvites = invs.filter(i => i.inviter.id === oi);
    let urll = invs.filter(i => i.inviter.id === oi);
    let link = urll.reduce((p , v) => v.url +` , Total de membros recrutados no convite: ${v.uses}.\n`+ p, `\nServidor: ${message.guild.name} \n `);
    let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
   let exec = personalInvites.reduce((p, v) => v.inviter);
 let possibleInvites = [['Total de membros recrutados:']];
possibleInvites.push([inviteCount, exec]);
        let user = message.mentions.users.first() || message.author;
        let mem = message.guild.member(user);
        let millisJoined = new Date().getTime() - mem.joinedAt.getTime();
        let daysJoined = millisJoined / 1000 / 60 / 60 / 24;
const alpha = new Discord.RichEmbed()
.setAuthor(img)
.addField('🏆 Invite Infos',  `\n\n► لقد قمت بدعوة ما مجموعه \`\`${Number(inviteCount)}\`\` عضو.\n\n► لقد انضممت للسيرفر مند\`${daysJoined.toFixed(0)}\`يوم .\n\n► لقد انضممت بهذه الدعوة\`${exec}\``,true)
.setThumbnail(imagemm)
.setColor(0x4959e9);
message.channel.send(Dream);

});

};
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
    if (message.author.bot) return;
     if (message.content === prefix + "help") {
		 message.channel.send('**The Message Was Sent On Private**');
            
	
		 


 message.author.sendMessage(`
Bot BY ! Dream ! hamodii_yt#8531
             DreamCraft       BOT
╔[❖════════════❖]╗
             Prefix = ' + '
╚[❖════════════❖]╝

╔[❖════════════❖]╗
             Admin Commands
╚[❖════════════❖]╝
 
 ❖ +mutevoice < mention > ➾ mutevoice member

 ❖ +UnMute Channel ➾ unmutechannel
 
 ❖ +Mute ➾ Mute 

 ❖ +UnMute  ➾ unmute
 
 ❖ +Mute ➾ Mute Channel
 
 ❖ +unmutevoice <mention> ➾ unmutevoice member

 ❖ +ct ➾ create channel With Your Type
  
 ❖ +cv ➾ create Voice channel


╔[❖════════════❖]╗
            General  Commands
╚[❖════════════❖]╝ 

❖ +date ➾ see date 

❖ +members ➾ see Members

❖ +hack ➾ لعبه الهاك 

❖ +skin ➾ Your MineCraft Skin

❖ +id ➾ id

❖ +bot ➾ معلومات البوت

❖ +ping ➾ to see ping 

❖ +info ➾ informations 

❖  +contact ➾ ارسال رساله لصاحب البوت

❖  +myinv ➾ Your Invite In Server

╔[❖════════════❖]╗
                    Welcome
╚[❖════════════❖]╝

==================================================================

By ! Dream ! hamodii_yt#8531

==================================================================

bot invite link: https://discordapp.com/oauth2/authorize?client_id=475285011646644224&permissions=8&scope=bot

==================================================================

`);

    }
});
 

  
  client.on('message',message =>{
      var prefix = "+";
 if(message.content.split(' ')[0].toLowerCase() == prefix + 'myinv') {
let guild = message.guild
var codes = [""]
 var nul = 0
      
guild.fetchInvites()
.then(invites => {
invites.forEach(invite => {
if (invite.inviter === message.author) {
    nul+=invite.uses
codes.push(`discord.gg/${invite.code}`)
}
 
})
  if (nul > 0) {
      const e = new Discord.RichEmbed()
      .addField(`${message.author.username}`, `لقد قمت بدعوة **${nul}** شخص`)
      .setColor('#36393e')
      message.channel.send(e)
  }else {
                       var embed = new Discord.RichEmbed()
                        .setColor("#000000")
                        .addField(`${message.author.username}`, `لم تقم بدعوة أي شخص لهذة السيرفر`)

                       message.channel.send({ embed: embed });
                        return;
                    }
}).then(m => {
if (codes.length < 0) {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `You currently don't have any active invites! Please create an invite and start inviting, then you will be able to see your codes here!`)
message.channel.send({ embed: embed });
return;
} else {
    var embed = new Discord.RichEmbed()
.setColor("#000000")
.addField(`Your invites in ${message.guild.name}`, `Invites :\n${codes.join("\n")}`)
.setColor('#36393e')
message.channel.send({ embed: embed });
return;
}
})
}

});


client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('Pong...').then((msg) => {
      msg.edit(`\`\`\`javascript\nTime taken: ${msg.createdTimestamp - message.createdTimestamp} ms.\nDiscord API: ${Math.round(client.ping)} ms.\`\`\``);
 })
  }  
 });



 client.on('message' , message => {
  var prefix = "+";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "send")) {
    let args = message.content.split(" ").slice(1);


    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To send Channel!")
    
         
    }
     message.delete();
suggestchannel.send("@everyone  `||` @here ");
    let embed = new Discord.RichEmbed()
        .addField("**Massge**", `${suggestmessage}`)
        .setFooter(`by ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your message is sended.`).then(msg => msg.delete(1000));
    return;
}
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
	  
client.on('message', message => {
    if (message.content === "+id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      
   message.channel.sendEmbed(embed);
     }
 });


  client.on('message', message => {
   if (message.content === "+id") {
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setThumbnail(message.author.avatarURL)
  .addField("الاسم:",`${message.author.username}`, true)
  .addField('التاق:',"#" +  message.author.discriminator, true)
  .addField("الايدي:", message.author.id, true)
  .addField("تم الانشاء في:", message.author.createdAt, true)
     
     
  message.channel.sendEmbed(embed);
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
            if (message.content.startsWith(prefix + "bot")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField(' السيرفرات🌐',`[${client.guilds.size}]  `)
.addField(' الاعضاء👥 ',` [${client.users.size}] `)
.addField('الرومات📚 ',`[${client.channels.size}]`) 
.addField(' البنق🚀 ',`[${Date.now() - message.createdTimestamp}]`) 
.addField('مصمم  + صاحب البوت ',`! Dream ! hamodii_yt#8531`)
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
        var prefix = "+";
        if(message.content.startsWith(prefix + 'mutevoice')) {
          if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
          if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
           
        if(message.mentions.users.size === 0) {
          return message.reply("Please mention a user to mute.");
        }
        let muteMember = message.guild.member(message.mentions.users.first());
        if(!muteMember) {
          return message.reply("Try again.");
        }
        muteMember.setMute(true);
        if(muteMember) {
          message.channel.sendMessage("User muted successfully.");
        }
      }
    }); 
	
	client.on('message', message => {
      var prefix = "+";
      if(message.content.startsWith(prefix + 'unmutevoice')) {
        if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.sendMessage("**ليس لديك صلاحية لاعطاء ميوت صوتي**❌ ").then(m => m.delete(5000));
        if(!message.guild.member(client.user).hasPermission("MUTE_MEMBERS")) return message.reply("**I Don't Have `MUTE_MEMBERS` Permission**").then(msg => msg.delete(6000))
         
      if(message.mentions.users.size === 0) {
        return message.reply("Please mention a user to mute.");
      }
      let muteMember = message.guild.member(message.mentions.users.first());
      if(!muteMember) {
        return message.reply("Try again.");
      }
      muteMember.setMute(false);
      if(muteMember) {
        message.channel.sendMessage("User muted successfully.");
      }
    }
  });

client.on('message', msg => {
  if (msg.content === '+invite') {
    msg.reply(', https://discordapp.com/oauth2/authorize?client_id=475285011646644224&permissions=8&scope=bot');
  }
});




client.on('message', function(message) {
	const myID = "428890200735875073";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(prefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "playing")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(prefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});



        client.on('message', message => {
                        let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'color')) {
    if(!args) return message.channel.send('`يرجي اختيار كم لون `');
             if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
             message.channel.send("**✅ | تم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });



   client.on("message", msg => {
           var prefix = "+";
  if(msg.content.startsWith (prefix + "id-server")) {
    if(!msg.channel.guild) return msg.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
      const embed = new Discord.RichEmbed();
  embed.addField(":cloud_tornado:  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
          .addField(":id:  الايدي", `**[ ${msg.author.id} ]**`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField(':spy:  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
          .addField(':satellite_orbital:   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
          .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField(':robot:  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
      msg.channel.send({embed: embed})
  }
});




client.on('ready', function(){    
    var ms = 150000 ; 
    var prefix = "+"; 
    var setGame = [`المستخدمين : ${client.users.size}`,`${prefix}help`,`االسيرفرات : ${client.guilds.size}`];  
    var i = -1;    
    var j = 0;    
    setInterval(function (){    
        if( i == -1 ){    
j = 1;    
       }    
        if( i == (setGame.length)-1 ){    
            j = -1;    
      }    
       i = i+j;    
        client.user.setGame(setGame[i],``);    
}, ms);    
    
});



client.on("ready", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildCreate", () => {
    client.user.setGame("on " + client.users.size + " users")
}).on("guildDelete", () => {
    client.user.setGame("on " + client.users.size + " users")
})



client.on("message", message => {
    if (message.author.bot) return;
     if (message.content === prefix + "help ") {
  const embedss6 = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**
    شيك على الخاص
     Check Your DM**`)

		 message.channel.send(`<@${message.author.id}>`, {embed : embedss6});
  const embed = new Discord.RichEmbed() 
      .setColor("RANDOM")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`**




__1__ = +ping - __To Speed Ping Bot__

__2__ = +server - __معلومات السيرفر __

__3__ = +link - __To Create Link Server__

__4__ = +rules - __قوانين السيرفر  __

__5__ = +date - __To See Date __

__6__ = +ct - __إنـشاء روم كـتابـي__

__7__ = +cv - __تـم إنـشاء روم صـوتي__

__8__ = +kick - __Kick Member__

__9__ = +ban - __ban Member__

__10__ = +unban - __Unban Member__

__11__ = +info - __Info__

__12__ = +mutechannel - __mutechannel__

__13__ = +unmutechannel - __Unmutechannel__

__14__ = +myinv - __see your invites__

__15__ = +clear - __clear text__

         **Games**
__1__ = +اسألني 

__12__ = +لوخيروك 

       **Also __Soon__**

❖ Close to more of the soundboard commands for introspection

**
`)

       .setTimestamp()
       .setFooter(message.author.username, message.author.avatarURL)
message.author.sendEmbed(embed)

.catch(() => {
  message.channel.send('🚫الخاص مغلق');
});

}
});










client.login(process.env.BOT_TOKEN);
