/** THIS FULL BOT COMMAND FILE AND ALL API CREATE BY BADOL CHAT BOT DONT CHINGE THE MY ANY CODE 🤙🖤📿 **/
module.exports.config = {
  name: "/",
  version: "1.0.0",
  permssion: 0,
  credits: "ARIF-BABU",
  prefix : false,
  description: "ARIF post rendom",
  category: "M B C",
  usages: "ig",
  cooldowns: 11,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•—»✨🥀「𝐌 𝐁 𝐂 ｣🥀✨«—•\n༆-✿Prefix Event 𒁍\n╭•┄┅═══❁🌺❁═══┅┄•╮\n\n᭄࿐सुना है आज समंदर को बड़ा गुमान आया है 🥀उधर ही ले चलो कश्ती जहां तूफान आया है। 😜🙊\n\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐁𝐘 𝐌𝐑 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 ♥️",
"•—»✨🥀「𝐌 𝐁 𝐂 」 🥀✨«—•\n  ༆-✿Prefix Event 𒁍\n╭•┄┅═══❁🌺❁═══┅┄•╮\n\n ༅༎❥~🦋\n\n༅༎❥━-जो दिल के करीब थे ,वो जबसे दुश्मन हो गए जमाने में हुए चर्चे ,हम मशहूर हो गए 🥀😌!!❥༅༎\n\n🖤~🦋\n\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐁𝐘 𝐌𝐑 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 ♥️",
"•—»✨🥀「𝐌 𝐁 𝐂 」 🥀✨«—•\n  ༆-✿Prefix Event 𒁍\n╭•┄┅═══❁🌺❁═══┅┄•╮\n\n°\n\n—मेरे बारे में कोई राय मत बनाना ग़ालिब, मेरा वक्त भी बदलेगा तेरी राय भी...!💚🌼\n\n°\n\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐁𝐘 𝐌𝐑 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 ♥️",
"•—»✨🥀「𝐌 𝐁 𝐂 」 🥀✨«—•\n  ༆-✿Prefix Event 𒁍\n╭•┄┅═══❁🌺❁═══┅┄•╮\n\n🦋࿐\n\nटूट जाएगी तुम्हारी जिद की आदत उस दिन,जब पता चलेगा कि याद करने वाला अब याद बन गया!-🖤🥀\n\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐁𝐘 𝐌𝐑 𝐅𝐀𝐈𝐙 𝐀𝐍𝐒𝐀𝐑𝐈 ♥️",
"•—»✨🥀「𝐌 𝐁 𝐂 」 🥀✨«—•\n  ༆-✿Prefix Event 𒁍\n╭•┄┅═══❁🌺❁═══┅┄•╮\n\n🥀\n- या खुदा रेत के सेहरा को समंदर कर देया छलकती हुई आंखों को भी पत्थर कर दे। 😍🤎\n\n╰•┄┅═══❁🌺❁═══┅┄•╯\n\n𝐂𝐑𝐄𝐀𝐓𝐄𝐑 𝐁𝐘 𝐌𝐑 𝐅𝐀𝐈𝐙 ♥️" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.postimg.cc/RZcGsX9D/ebabdd8852c5ca7d790f590ad396f683.jpg",
"https://i.postimg.cc/FsPJ9SpH/322706d46653d57ca02252f940506df6.jpg",
"https://i.postimg.cc/HsJTy7Hx/d4b0f238f2e6509fcb280408984839c8.jpg",
"https://i.postimg.cc/8kxzwbZW/36efbf3396e1418f901e85e3d95db6bc.jpg",
"https://i.postimg.cc/BnmW7SJy/76cd20171a4496e93afc5f28408f3f16.jpg",
];
   var callback = () => api.sendMessage({body:` ${know} `,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
