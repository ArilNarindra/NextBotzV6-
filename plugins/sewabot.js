let handler = async (m, { conn }) => {
	//-----PRICE
//sewa
let sh = '5'
let sn = '15'
let ss = '20'
let sp = '35'
let sv = '40'
//premium
let ph = '5'
let pn = '15'
let pp = '25'
let pv = '35'
let ppm = '35'
//jasa run
let ri = '25'
let pk = '30'
let info = `
╭━━━━「 *SEWA* 」
┊⫹⫺ *Hemat:* _Rm ${sh}/grup (7 Hari)_
┊⫹⫺ *Normal:* _Rm ${sn}/grup (1 bulan)_                                         
┊⫹⫺ *permanen:* = _Rm ${sv}/grup (unlimited)_
╰═┅═━––––––๑

╭━━━━「 *PREMIUM* 」
┊⫹⫺ *Hemat:* _Rm ${ph} (7 Hari)_
┊⫹⫺ *Normal:* _Rm ${pn} (1 bulan)_                                       
┊⫹⫺ *Permanent:* = _Rm ${ppm} (Unlimited)_
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG SEWA* 」
┊⫹⫺ *Hemat:* _Rm 3 (7 Hari)_
┊⫹⫺ *Normal:* _Rm 6 (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *PERPANJANG PREMIUM* 」
┊⫹⫺ *Hemat:* _Rm 3 (7 Hari)_
┊⫹⫺ *Normal:* _Rm 6 (1 bulan)_                                       
╰═┅═━––––––๑
╭━━━━「 *JASARUN* 」
┊⫹⫺ *Hemat:* _Rm ${ri} (7 Hari)_
┊⫹⫺ *Normal:* _Rm ${pk} (1 bulan)_                                       
╰═┅═━––––––๑
༅ _*FITUR BOT*

✧ *Virtex Menu✅*
✧ *Menu Keren✅*
✧ *Anti Link✅*
✧ *Button Menu✅*
✧ *Anti Sticker✅*
✧ *Anti Toxic↗️*
✧ *DLL*
✧ *MEMBELI BERATI SETUJU*

_Total Fitur:_ 570++

*⫹⫺ PAYMENT:*
• *Digi:*
• *Maxis:*
• *ALL PAYMENT*
–––––– *🐾 Kebijakan* ––––––
🗣️: Kak, Kok harganya mahal banget?
💬: Mau tawar menawar? boleh, silahkan chat owner aja

🗣️: Scam ga nih kak?
💬: Enggalah, Owner 100% Tepati janji #STAYHALAL

▌│█║▌║▌║║▌║▌║█│▌
`
const sections = [
   {
	title: `${htjava} SEWA ✦-------`,
	rows: [
	    {title: "🔖 HEMAT", rowId: '.order *Paket:* Rm 5 • Sewa', description: 'PRICE: Rm' + sh + ' (7 Hari)' },
	    {title: "🔖 NORMAL", rowId: '.order *Paket:* Rm 10 • Sewa', description: 'PRICE: Rm' + sn + ' (1 bulan)' },
	{title: "🔖 Permanen", rowId: '.order *Paket:* Rm 40 • Sewa', description: 'PRICE: Rm' + sv + ' (Permanen)' },
	]
    }, {
    title: `${htjava} PREMIUM ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* Rm 5 • Premium', description: 'PRICE: Rm' + ph + ' (7 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* Rm 10 • Premium', description: 'PRICE: Rm' + pn + ' (1 bulan)' },
	{title: "🌟 PERMANENT", rowId: '.order *Paket:* Rm 35 • Premium', description: 'PRICE: Rm' + ppm + ' (UNLIMITED)' },
	]
    }, {
        title: `${htjava} JASA RUN ✦-------`,
	rows: [
	    {title: "🌟 HEMAT", rowId: '.order *Paket:* Rm 25 • Jasarun', description: 'PRICE: Rm' + ri + ' (25 Hari)' },
	    {title: "🌟 NORMAL", rowId: '.order *Paket:* Rm 30 • Jasarun', description: 'PRICE: Rm' + pk + ' (1 bulan)' },
	]
    },
]

const listMessage = {
  text: info,
  footer: botdate,
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage)
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(sewa(bot)?|premium)$/i

export default handler
