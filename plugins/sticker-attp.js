let handler = async (m, { conn, text }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text
    try {
    conn.sendFile(m.chat, global.API('xteam', '/attp', { file: '', text: teks }), 'attp.webp', '', fakes, null, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: sfb,
    mediaType: 2,
    description: wm,
    title: 'Hai, ' + ucapan,
    body: botdate,
    thumbnail: tumhiho,
    sourceUrl: sfb
     }}
  })
    } catch {
    conn.sendFile(m.chat, global.API(`https://anabotofc.herokuapp.com/api/maker/attp?apikey=AnaBot&text=${teks}`), 'attp.webp', '', fakes, null, { fileLength: fsizedoc, seconds: fsizedoc, contextInfo: { externalAdReply :{
    showAdAttribution: true,
    mediaUrl: sfb,
    mediaType: 2,
    description: wm,
    title: 'Hai, ' + ucapan,
    body: botdate,
    thumbnail: tumhiho,
    sourceUrl: sfb
     }}
  })
    }
    
}
handler.help = ['attp <teks>']
handler.tags = ['sticker']

handler.command = /^attp$/i

export default handler