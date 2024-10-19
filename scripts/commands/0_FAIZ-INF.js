module.exports.config = {
  name: "inf",
  version: "1.0.1", 
  permssion: 0,
  credits: "ARIF-BABU",
  prefix:true,
  description: "Admin and Bot inf",
  category: "...",
  cooldowns: 1,
  dependencies: 
  {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
    hours = Math.floor(time / (60 * 60)),
    minutes = Math.floor((time % (60 * 60)) / 60),
    seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Kolkata").format("DD/MM/YYYY");
var link =                                     
["https://i.imgur.com/rPI3r1C.jpg","https://i.imgur.com/e9dOGP3.jpg","https://i.imgur.com/lmnkobJ.jpg"];
var callback = () => api.sendMessage({body:`╭•┄┅════❁🌺❁════┅┄•╮\n•—»✨【꧁⃝FAIZ ANS⃔⃔⃔⃔⃔⃔⃔ARI⃝🪽】✨«—•\n╰•┄┅════❁🌺❁════┅┄•╯\n\n╭•┄┅════❁🌺❁════┅┄•╮\n\n♥️ 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 ♥️\n╰•┄┅════❁🌺❁════┅┄•╯\n\n🌺  [ 1 ]  𒁍 BOT NAME   →   ${global.config.BOTNAME}\n🌺  [ 2 ]  𒁍 BOT ADMIN   →   FAIZ-ANSARI\n🌺  [ 3 ]  𒁍 BOT  PREFIX   →   [ ${global.config.PREFIX} ]\n🌺  [ 4 ]  𒁍  DATE   → ${juswa}\n🌺  [ 5 ]  𒁍  BOT RUNNING TIME  →  [ ${hours}:${minutes}:${seconds} ]\n🌺  [ 6 ]  𒁍  https://www.facebook.com/profile.php?id=100082052205053\n🌺  [ 7 ]  𒁍 WHATSAPP → [ +91 73578 30040 ]\n🌺  [ 8 ]  𒁍 INSTAGRAM →  FAIZ_.STATUS\n🌺  [ 9 ]  𒁍 YOUTUBE  →  FAIZ FILM\n🌺  [ 10 ]  𒁍 GITHUB  →  ╭•┄┅════❁🌺@FAIZ-ANSARI\n🌺THANKYOU FOR USING╰•┄┅════❁🌺 ${global.config.BOTNAME} BOT♥️\n\n\n
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
