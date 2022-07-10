let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} SOURCE CODE ${htka}*
*📮ꜱᴄʀɪᴘᴛ*

https://github.com/Jikarinka/kannabot

`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'instagram', url: 'https://instagram.com/gaara_xploite'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: thumb
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(s(ourcode|c))$/i

export default handler