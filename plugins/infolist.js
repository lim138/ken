let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `β INFO`,
	rows: [
	    {title: "πTest Speed", rowId: '.testspeed', description: 'Test Speed' },
	    {title: "πStats Server", rowId: '.statserver', description: 'Status server' },
	{title: "π€Owner", rowId: '.owner', description: 'Owner Mark BOT' },
	{title: "π°Donasi", rowId: '.donasi', description: 'Support Mark' },
	//{title: "π π©ππ£", rowId: '.order *Paket:* VIP β’ Sewa', description: 'π£πΏπΆπ°π²: ' + sv + 'k (12 bulan)' },
	]
    }, {
    title: `β α΄Κα΄α΄Ιͺα΄α΄`,
	rows: [
	    {title: "πRules", rowId: '.info', description: 'S&K Mark BOT' },
	    {title: "β", rowId: '.kdnene', description: 'No menu' },
	{title: "β‘Speed", rowId: '.speed', description: 'Speed Mark BOT' },
	{title: "π°SEWA BOT", rowId: '.sewa', description: 'Sewa Mark BOT' },
	//{title: "π π£ππ₯π ππ‘ππ‘π§", rowId: '.order *Paket:* PERMANENT β’ Premium', description: 'π£πΏπΆπ°π²: ' + ppm + 'k (UNLIMITED)' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "π Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['hadiah', 'claim']
handler.tags = ['rpg']
handler.command = /^(info|infobot)$/i

export default handler
