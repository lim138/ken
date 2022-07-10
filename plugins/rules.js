let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `
• *Kebijakan Privasi:*
1. WhatsApp Bot tidak akan merekam data riwayat chat user.
2. WhatsApp Bot tidak akan menyebarkan nomor users.
3. WhatsApp Bot tidak akan menyimpan media yang dikirimkan oleh users.
4. WhatsApp Bot tidak akan menyalah gunakan data data users.
5. Owner WhatsApp Bot berhak melihat data riwayat chat users.
6. Owner WhatsApp Bot berhak melihat status users.
7. Owner WhatsApp Bot dapat melihat riwayat chat, dan media yang dikirimkan users.

• *Peraturan WhatsApp Bot:*
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

• *Syarat Ketentuan WhatsApp Bot:*
1. WhatsApp Bot akan keluar dari group jika ada salah satu member melanggar peraturan.
2. WhatsApp Bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. WhatsApp Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4. WhatsApp Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. WhatsApp Bot bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

• *Note:*
1. Jika ada yang menjual/beli/sewa bot atas nomor ini, harap segera hubungi owner!
2. Jika ingin berdonasi bisa klik tumbol button dibawah ini.
3. Ketik .sewa Jika Ingin SewaBot


Terima Kasih atas perhatiannya,
Salam Hormat dari Owner Bot(Fangz)
`
const templateButtons = [
    {index: 1, urlButton: {displayText: '🌐Website', url: psaweria}},
    {index: 2, urlButton: {displayText: '📷Instagram', url: sig}},
    {index: 3, urlButton: {displayText: '🌎 Official Group', url: sgc}},
    {index: 4, quickReplyButton: {displayText: 'Ok', id: 'Ok'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['rules']
handler.tags = ['info']
handler.command = /^rules$/i

export default handler