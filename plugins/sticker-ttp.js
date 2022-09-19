import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn, text }) => {
    let teks = m.quoted ? m.quoted.text : text
    let links
    try {
    links = global.API('xteam', '/ttp', { file: '', text: teks })
    } catch {
    links = global.API(`https://anabotofc.herokuapp.com/api/maker/ttp?apikey=AnaBot&text=${teks}`)
    }
    let stiker = await sticker(null, links, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, 'sticker.webp', '', fakes, null, adReply)
}
handler.help = ['ttp <teks>']
handler.tags = ['sticker']

handler.command = /^ttp$/i

export default handler