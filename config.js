// S C R I P T  O R I  B Y  @BochilGaming π­
// M A D E  B Y  FANGZπ±  
// Credits, jangan dihapus atau diubah!

// - - THANKS TO - -
// β’ Allah SWT
// β’ Nurutomo
// β’ Bochilgaming
// β’ Rominaru
// β’ Kannachann
// β’ The.Sad.Boy01
// β’ FangzBot
// β’ Rasel comel
// β’ Xtreshe (Beban)
// β’ Dll

//[!] Jangan Dihapus, mending ditambahin 

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      
    
/*============== SOCIAL ==============*/// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/gaara_xploite'
global.sgh = 'https://github.com/gar'
global.sgc = 'https://chat.whatsapp.com/CCyaeuaLuUbAmWCvQvFJLm'
global.sdc = 'https://instagram.com/gaara_xploite'
global.snh = 'https://nhentai.net/g/365296/'

/*============== PAYMENT ==============*/
global.pdana = '081326024103'
global.povo = '081326024103'
global.pgopay = '082331325657'
global.ppulsa = '081326024103'
global.ppulsa2 = '081328625619'
global.psaweria = 'https://saweria.co/gaarasr'

/*============== NOMOR ==============*/
global.nomorbot = '+447495928373'
global.nomorown = '201507384088'
global.namebot = ' γ πΌπππ BOT β©γ£ γ'
global.nameown = 'Gaara Setyawan'


/*============== STAFF ==============*/
global.owner = [
  ['201507384088', 'GAARA']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'a7112460aaec989a',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'c37b848002a90a0acd119b25',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// Kata APIKEY itu isi dengan apikey lu sendiri, dengan beli ke website itu

/*============== WATERMARK ==============*/
//GANTI SETERAH MU
global.wm = '                γ πΌπππ BOT γβ© γ' //Main Watermark
global.wm2 = 'ΒΈβΩ­βΉβ’~β£Β°βΛΛΒ¨ πΌπππ BOT-MdΒ¨ΛΛβΒ°β£~β’βΉΩ­βΒΈ'
global.wm3 = 'β«Ήβ«Ί πΌπππ ππ’π§'
global.botdate = `β«Ήβ«Ί ππ?ππ²: ${week} ${date}`
global.bottime = `π§ π π  π : ${wktuwib}`
global.titlebot = 'π₯π£π | Whatsapp Κα΄α΄ By GAARA'
global.author = '                ββββββ SETYAWAN ββββββ'


/*============== LOGO ==============*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/c72c0a9d0598a095b1d94.jpg' //Main Thumbnail
global.thumb2 = 'https://telegra.ph/file/91178fba542571b99bdba.jpg'
global.thumbbc = 'https://telegra.ph/file/91178fba542571b99bdba.jpg' //For broadcast
global.giflogo = 'https://telegra.ph/file/ff057329bd79dcda987cf.mp4'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

/*============== TEXT ==============*/
global.wait = '```γβ°β°β°β±β±β±β±β±β±β±γLoading...```'
global.eror = '*Server erorβ*'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/d8f3ce5c6ddeeafbc1057.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = 'βββββββ©' //top
global.dmenub = 'ββ’' //body
global.dmenub2 = 'β' //body for info cmd on Default menu
global.dmenuf = 'ββββββββββββ¦' //footer

// COMMAND MENU
global.dashmenu = 'ββββββββββ *DASHBOARD* ββββββββββ'
global.cmenut = 'βββββββγ'                       //top
global.cmenuh = 'γββββββ'                        //header
global.cmenub = 'βπ¬ '                            //body
global.cmenuf = 'ββββββββββββΰΉ\n'                //footer
global.cmenua = '\nβ ββββββββββββββββββββββββββββββββ β\n     ' //after
global.pmenus = 'β'                              //pembatas menu selector

global.htki = 'ββββββγ' // Hiasan Titile (KIRI)
global.htka = 'γββββββ' // Hiasan Title  (KANAN)
global.lopr = 'β' //LOGO PREMIUM ON MENU.JS
global.lolm = 'β' //LOGO FREE ON MENU.JS
global.htjava = 'β«Ήβ«Ί'    //hiasan Doang :v
global.hsquere = ['βΆ','β','β«Ήβ«Ί']

/*============== STICKER WM ==============*/
global.stickpack = '.'
global.stickauth = `By Mark BOT\nwa.me/${global.nomorbot}`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: 'π',
      limit: 'π«',
      health: 'β€οΈ',
      exp: 'β¨',
      money: 'πΉ',
      bank: 'π¦',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'ποΈ',
      mythic: 'π',
      legendary: 'ποΈ',
      superior: 'πΌ',
      pet: 'π',
      trash: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      pickaxe: 'βοΈ',
      fishingrod: 'π£',
      wood: 'πͺ΅',
      rock: 'πͺ¨',
      string: 'πΈοΈ',
      horse: 'π΄',
      cat: 'π±',
      dog: 'πΆ',
      fox: 'π¦',
      petFood: 'π',
      iron: 'βοΈ',
      gold: 'πͺ',
      emerald: 'βοΈ',
      upgrader: 'π§°'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
