module.exports.config = {
  name: "lol",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Teri",
  description: "ảnh Liên Minh",
  commandCategory: "Hình ảnh",
  usages: "lol",
  cooldowns: 5,
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
  var link = [
             "https://i.imgur.com/sUF9tfp.jpeg",
             "https://i.imgur.com/6gMU5GZ.jpeg",
             "https://i.imgur.com/ixN2HEa.jpeg",
             "https://i.imgur.com/oM4bCaz.jpeg",
             "https://i.imgur.com/TVNXolD.jpeg",
             "https://i.imgur.com/QMWGLaK.jpeg",
             "https://i.imgur.com/Okm1MHl.jpeg",
             "https://i.imgur.com/NlEtJIk.jpeg",
             "https://i.imgur.com/AKWpv9d.jpeg",
             "https://i.imgur.com/LwerqrJ.jpeg",
             "https://i.imgur.com/zbQG1ym.jpeg",
             "https://i.imgur.com/JjTawCG.jpeg",
             "https://i.imgur.com/ye57wY6.jpeg",
             "https://i.imgur.com/ArPOraE.jpeg",
             "https://i.imgur.com/D0jiLwS.jpeg",
             "https://i.imgur.com/IKtUf9e.jpeg",
             "https://i.imgur.com/5RmbDUy.jpeg",
             "https://i.imgur.com/1x0j2oM.jpeg",
             "https://i.imgur.com/dciACec.jpeg",
             "https://i.imgur.com/Rv4CjRV.jpeg",
             "https://i.imgur.com/d1BmrFw.jpeg",
             "https://i.imgur.com/3SAt6ln.jpeg",
             "https://i.imgur.com/zTMLsZi.jpeg",
             "https://i.imgur.com/t57qF66.jpeg",
             "https://i.imgur.com/gts9za0.jpeg",
             "https://i.imgur.com/87bhiwp.jpeg",
             "https://i.imgur.com/AsMH1pz.jpeg",
             "https://i.imgur.com/UzfObQ0.jpeg",
             "https://i.imgur.com/Y800EZ1.jpeg",
             "https://i.imgur.com/vpliSNi.jpeg",
             "https://i.imgur.com/X8lCa7N.jpeg",
             "https://i.imgur.com/rP6i4oR.jpeg",
             "https://i.imgur.com/rOg4vCa.jpeg",
             "https://i.imgur.com/0ulYeRa.jpeg",
             "https://i.imgur.com/Kpdsfhj.jpeg",
             "https://i.imgur.com/eydwWCx.jpeg",
             "https://i.imgur.com/BXykNkJ.jpeg",
             "https://i.imgur.com/F1RdRBl.jpeg",
             "https://i.imgur.com/j4AppV2.jpeg",
             "https://i.imgur.com/Xo8lxYb.jpeg",
             "https://i.imgur.com/CebmwyO.jpeg",
             "https://i.imgur.com/GUZOxTD.jpeg",
             "https://i.imgur.com/lDaK4aR.jpeg",
             "https://i.imgur.com/2RrtdUT.jpeg",
             "https://i.imgur.com/XWvIItF.jpeg",
             "https://i.imgur.com/KTpIuAN.jpeg",
             "https://i.imgur.com/Aukc7DY.jpeg",
             "https://i.imgur.com/1W0H0Hl.jpeg",
             "https://i.imgur.com/q6DjTVW.jpeg",
             "https://i.imgur.com/VMsmpxZ.jpeg",
             "https://i.imgur.com/W3U9Ygb.jpeg",
             "https://i.imgur.com/5bAK1GA.jpeg",
             "https://i.imgur.com/9bILHRF.jpeg",
             "https://i.imgur.com/2g0wErD.jpeg",
             "https://i.imgur.com/adaJE0f.jpeg",
             "https://i.imgur.com/FkHn68O.jpeg",
             "https://i.imgur.com/FAAAbgz.jpeg",
             "https://i.imgur.com/Za1EXOV.jpeg",
             "https://i.imgur.com/mlrwTdo.jpeg",
             "https://i.imgur.com/4BkzcLZ.jpeg",
             "https://i.imgur.com/lWqxkbp.jpeg",
             "https://i.imgur.com/foGzqta.jpeg",
             "https://i.imgur.com/8KHtMAO.jpeg",
             "https://i.imgur.com/CYPhXfG.jpeg",
             "https://i.imgur.com/yhixXk7.jpeg",
             "https://i.imgur.com/X8p5hqP.jpeg",
             "https://i.imgur.com/aW8JylJ.jpeg",
             "https://i.imgur.com/2W8QwSy.jpeg",
             "https://i.imgur.com/dxLJWKJ.jpeg",
             "https://i.imgur.com/XbjO2FA.jpeg",
             "https://i.imgur.com/pCq8m9o.jpeg",
             "https://i.imgur.com/Csywd5N.jpeg",
             "https://i.imgur.com/atztqZ2.jpeg",
             "https://i.imgur.com/JOiO09z.jpeg",
             "https://i.imgur.com/hDdwZTV.jpeg",
             "https://i.imgur.com/p5CyJ3j.jpeg",
             "https://i.imgur.com/k46VZV4.jpeg",
             "https://i.imgur.com/LuluSfo.jpeg",
             "https://i.imgur.com/SeQ2Xq0.jpeg",
             "https://i.imgur.com/heDfsqO.jpeg",
             "https://i.imgur.com/oK861P8.jpeg",
             "https://i.imgur.com/T6bQ0aR.jpeg",
             "https://i.imgur.com/Mdp5SLA.jpeg",
             "https://i.imgur.com/dsQJuP6.jpeg",
             "https://i.imgur.com/JI9rxKr.jpeg",
             "https://i.imgur.com/Szl7VPE.jpeg",
             "https://i.imgur.com/FPeB3gs.jpeg",
             "https://i.imgur.com/VJ4ZgMY.jpeg",
             "https://i.imgur.com/l6XCLFZ.jpeg",
             "https://i.imgur.com/FuZWsL9.jpeg",
             "https://i.imgur.com/JtSYvFu.jpeg",
             "https://i.imgur.com/X12HVCz.jpeg",
             "https://i.imgur.com/Z1vcT0L.jpeg",
             "https://i.imgur.com/JKjtlMy.jpeg",
             "https://i.imgur.com/8BCmxWk.jpeg",
             "https://i.imgur.com/TMNLaxF.jpeg",
             "https://i.imgur.com/1PbMUbj.jpeg",
             "https://i.imgur.com/e7u2Aia.jpeg",
             "https://i.imgur.com/RJvoNZg.jpeg",
             "https://i.imgur.com/cpsP2N4.jpeg",
             "https://i.imgur.com/Pu625nT.jpeg",
             "https://i.imgur.com/ihQYDOR.jpeg",
             "https://i.imgur.com/A28llFO.jpeg",
             "https://i.imgur.com/OkDJ7Yx.jpeg",
             "https://i.imgur.com/w6on86N.jpeg",
             "https://i.imgur.com/wKMZYUJ.jpeg",
             "https://i.imgur.com/ATYY69l.jpeg",
             "https://i.imgur.com/oYuulnq.jpeg",
             "https://i.imgur.com/2r9cuQD.jpeg",
             "https://i.imgur.com/64w1PIp.jpeg",
             "https://i.imgur.com/IlD5T9w.jpeg",
             "https://i.imgur.com/Ja2jwe1.jpeg",
             "https://i.imgur.com/u4Cl2nh.jpeg",
             "https://i.imgur.com/G91ERGx.jpeg",
             "https://i.imgur.com/PtksCFo.jpeg",
             "https://i.imgur.com/CTuyORR.jpeg",
             "https://i.imgur.com/EXjpVWC.jpeg",
             "https://i.imgur.com/jSJ82MQ.jpeg",
             "https://i.imgur.com/rV6LrbL.jpeg",
             "https://i.imgur.com/OhKvLpQ.jpeg",
             "https://i.imgur.com/tsg9mJm.jpeg",
             "https://i.imgur.com/4kF5zgP.jpeg",
             "https://i.imgur.com/wM6b1Uy.jpeg",
             "https://i.imgur.com/VdjjeKq.jpeg",
             "https://i.imgur.com/Jnc7LCw.jpeg",
             "https://i.imgur.com/bgttsnx.jpeg",
             "https://i.imgur.com/2JRXcsU.jpeg",
             "https://i.imgur.com/tH4FCGT.jpeg",
             "https://i.imgur.com/Cghaom0.jpeg",
             "https://i.imgur.com/zUmPj4q.jpeg",
             "https://i.imgur.com/SnvNVJQ.jpeg",
              "https://i.imgur.com/sSDtjTV.jpeg",
             "https://i.imgur.com/CqitroE.jpeg",
             "https://i.imgur.com/M6quFlP.jpeg",
             "https://i.imgur.com/VMlnOCO.jpeg",
             "https://i.imgur.com/s1tpNzX.jpeg",
             "https://i.imgur.com/MembJ7j.jpeg",
             "https://i.imgur.com/TvbAo3H.jpeg",
             "https://i.imgur.com/zYZ4fwM.jpeg",
             "https://i.imgur.com/U7UClWv.jpeg",
             "https://i.imgur.com/Df9ZFr7.jpeg",
             "https://i.imgur.com/r5E3VHd.jpeg",
             "https://i.imgur.com/30mrRPr.jpeg",
             "https://i.imgur.com/tgfbZqI.jpeg",
             "https://i.imgur.com/pJ3v5ik.jpeg",
             "https://i.imgur.com/0EERD6a.jpeg",
             "https://i.imgur.com/jOIwEzG.jpeg",
     ];
     var max = Math.floor(Math.random() * 6);  
  var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000$ để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh lol\n Số dư: -1000$`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }
};