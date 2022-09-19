import fetch from 'node-fetch'
import axios from 'axios'
import { tiktokdl } from '@bochilteam/scraper'

let handler = async (m, { conn, usedPrefix, command, text, args }) => {
try {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let txt = `🚀 *Link:* ${await(await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}` 
  conn.send2ButtonVid(m.chat, `https://api.lolhuman.xyz/api/tiktokwm?apikey=${global.lolkey}&url=${args[0]}`, txt, wm, `No Wm`, `.tiktoknowm ${args[0]}`, `Audio`, `.tiktokaudio ${args[0]}`, m)
} catch {
if (!args[0]) throw `Use example ${usedPrefix}${command} https://www.tiktok.com/@omagadsus/video/7025456384175017243`
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
    const url = video.no_watermark || video.no_watermark2 || video.no_watermark_raw
    if (!url) throw 'Can\'t download video!'
    conn.sendFile(m.chat, url, 'tiktok.mp4', `*「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────*

*📛Nickname:* ${nickname}
*📒Description:* ${description}
`.trim(), m)
}
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^t(iktok(d(own(load(er)?)?|l))?|td(own(load(er)?)?|l))$/i

export default handler
