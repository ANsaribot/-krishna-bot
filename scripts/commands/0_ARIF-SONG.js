var _0xca1d=["\x63\x6F\x6E\x66\x69\x67","\x65\x78\x70\x6F\x72\x74\x73","\x73\x69\x6E\x67","\x31\x2E\x30\x2E\x30","\x4C\xEA\x20\u0110\u1ECB\x6E\x68","\x50\x68\xE1\x74\x20\x76\x69\x64\x65\x6F\x20\x74\x68\xF4\x6E\x67\x20\x71\x75\x61\x20\x6C\x69\x6E\x6B\x20\x59\x6F\x75\x54\x75\x62\x65\x20\x68\x6F\u1EB7\x63\x20\x74\u1EEB\x20\x6B\x68\x6F\xE1\x20\x74\xEC\x6D\x20\x6B\x69\u1EBF\x6D","\x74\x69\u1EC7\x6E\x20\xED\x63\x68","\x5B\x73\x65\x61\x72\x63\x68\x56\x69\x64\x65\x6F\x73\x5D",""];module[_0xca1d[1]][_0xca1d[0]]= {name:_0xca1d[2],version:_0xca1d[3],prefix: true,permssion:0,credits:_0xca1d[4],description:_0xca1d[5],category:_0xca1d[6],usages:_0xca1d[7],cooldowns:10,dependencies:{"\x79\x74\x64\x6C\x2D\x63\x6F\x72\x65":_0xca1d[8],"\x73\x69\x6D\x70\x6C\x65\x2D\x79\x6F\x75\x74\x75\x62\x65\x2D\x61\x70\x69":_0xca1d[8]}},module.exports.handleReply=async function({api:e,event:a,handleReply:t}){const n=global.nodemodule.axios,s=global.nodemodule["fs-extra"],i=(global.nodemodule.request,await n.get("https://raw.githubusercontent.com/ledingg1997/ledingg-/main/video.json")),r=i.data.keyVideo.length,o=i.data.keyVideo[Math.floor(Math.random()*r)],{createReadStream:d,createWriteStream:m,unlinkSync:l,statSync:h}=global.nodemodule["fs-extra"];var c,u=a.body;if(c=u,isNaN(c)||(c<1||c>12))return e.sendMessage("─Р├г xс║гy ra lс╗Чi.",a.threadID,a.messageID);e.unsendMessage(t.messageID);try{var g={method:"GET",url:"https://ytstream-download-youtube-videos.p.rapidapi.com/dl",params:{id:`${t.link[a.body-1]}`},headers:{"x-rapidapi-host":"ytstream-download-youtube-videos.p.rapidapi.com","x-rapidapi-key":`${o.API_KEY}`}};var p=(await n.request(g)).data,y=p.title;if("fail"==p.status)return e.sendMessage("Kh├┤ng thс╗Г gс╗нi file n├аy.",a.threadID);var f=Object.keys(p.link)[1],b=p.link[f][0];path1=__dirname+"/cache/1.mp3";const i=(await n.get(`${b}`,{responseType:"arraybuffer"})).data;return s.writeFileSync(path1,Buffer.from(i,"utf-8")),e.unsendMessage(t.messageID),s.statSync(__dirname+"/cache/1.mp3").size>26e6?e.sendMessage("Unable to send files because the capacity is greater than 25MB .",a.threadID,(()=>l(__dirname+"/cache/1.mp3")),a.messageID):e.sendMessage({body:`✅${y}`,attachment:s.createReadStream(__dirname+"/cache/1.mp3")},a.threadID,(()=>s.unlinkSync(__dirname+"/cache/1.mp3")),a.messageID)}catch{return e.sendMessage("Kh├┤ng thс╗Г gс╗нi file n├аy!",a.threadID,a.messageID)}for(let e=1;e<7;e++)l(__dirname+`/cache/${e}.png`)},module.exports.run=async function({api:e,event:a,args:t}){const n=global.nodemodule.axios,s=global.nodemodule["fs-extra"],i=(global.nodemodule.request,await 
n.get("https://raw.githubusercontent.com/ledingg1997/ledingg-/main/video.json")),r=i.data.keyVideo.length,o=i.data.keyVideo[Math.floor(Math.random()*r)],d=(global.nodemodule["ytdl-core"],global.nodemodule["simple-youtube-api"]),{createReadStream:m,createWriteStream:l,unlinkSync:h,statSync:c}=global.nodemodule["fs-extra"];var u=["AIzaSyBpEKRgZTMVF2FoojngWrwlpxo-WCANbTM"];const g=u[Math.floor(Math.random()*u.length)],p=new d(g);if(0==t.length||!t)return e.sendMessage("২/১ 🥵",a.threadID,a.messageID);const y=t.join(" ");if(0==t.join(" ").indexOf("https://")){var f={method:"GET",url:"https://ytstream-download-youtube-videos.p.rapidapi.com/dl",params:{id:t.join(" ").split(/^.*(youtu.be\/|v\/|embed\/|watch\?|youtube.com\/user\/[^#]*#([^\/]*?\/)*)\??v?=?([^#\&\?]*).*/)[3]},headers:{"x-rapidapi-host":"ytstream-download-youtube-videos.p.rapidapi.com","x-rapidapi-key":`${o.API_KEY}`}};var b=(await n.request(f)).data,v=b.title;if("fail"==b.status)return e.sendMessage("тЭЧKh├┤ng thс╗Г gс╗нi file n├аy.",a.threadID);var k=Object.keys(b.link)[1],I=b.link[k][0];path1=__dirname+"/cache/1.mp3";const i=(await n.get(`${I}`,{responseType:"arraybuffer"})).data;return s.writeFileSync(path1,Buffer.from(i,"utf-8")),s.statSync(__dirname+"/cache/1.mp3").size>26e6?e.sendMessage("Kh├┤ng thс╗Г gс╗нi file v├м dung l╞░с╗гng lс╗Ыn h╞бn 25MB.",a.threadID,(()=>h(__dirname+"/cache/1.mp3")),a.messageID):e.sendMessage({body:`тЩк${v}`,attachment:s.createReadStream(__dirname+"/cache/1.mp3")},a.threadID,(()=>s.unlinkSync(__dirname+"/cache/1.mp3")),a.messageID)}try{const t=global.nodemodule["fs-extra"],n=global.nodemodule.axios;var w=[],_="",D=0,S=0,M=[],$=await p.searchVideos(y,12);for(let e of $){if(void 0===e.id)return;w.push(e.id);e.id;let a=__dirname+`/cache/${S+=1}.png`,s=`https://img.youtube.com/vi/${e.id}/hqdefault.jpg`,i=(await n.get(`${s}`,{responseType:"arraybuffer"})).data,r=(await n.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${e.id}&key=${g}`)).data.items[0].contentDetails.duration.slice(2).replace("S","").replace("M",":");(await n.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${e.id}&key=${g}`)).data.items[0].snippet.channelTitle;if(t.writeFileSync(a,Buffer.from(i,"utf-8")),M.push(t.createReadStream(__dirname+`/cache/${S}.png`)),1==(D=D+=1))var x="✅О1";if(2==D)x="✅О2";if(3==D)x="✅О3";if(4==D)x="✅О4";if(5==D)x="✅О5";if(6==D)x="✅О6";if(7==D)x="✅О7";if(8==D)x="✅О8";if(9==D)x="✅О9";if(10==D)x="✅10";if(11==D)x="✅11";if(12==D)x="✅12";_+=`${x} |${r}| ${e.title}\n\n`}var j=`»🎬There's ${w.length} the result coincides with your search keyword:.\n\n${_}Please reply(feedback) choose one of the above searches`;return e.sendMessage({attachment:M,body:j},a.threadID,((e,t)=>global.client.handleReply.push({name:this.config.name,messageID:t.messageID,author:a.senderID,link:w})),a.messageID)}catch(t){return e.sendMessage("An error has occurred, please try again in a moment!!\n"+t.message,a.threadID,a.messageID)}};
