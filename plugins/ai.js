const config = require('../config')
const {cmd , commands} = require('../command')
const { fetchJson } = require('../lib/functions')
cmd({
    pattern: "ai",
    alias: ["gpt", "gpt4", "bing", "meta", "bot"],
    react: "✨",
    desc: "ai chat",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let data = await fetchJson(`https://chatgptforprabath-md.vercel.app/api/gptv1?q=${q}`)
return reply(`${data.data}`)
{
      quoted: mek
    
}
// Send audio
    await conn.sendMessage(from, {
      audio: {
        url: 'https://github.com/MRSHABAN40/SHABAN-MD_DATABASE/raw/refs/heads/main/autovoice/AUD-20250207-liajlai-menu.mp3'
      },
      mimetype: 'audio/mpeg',
      ptt: true,
      contextInfo: {
        mentionedJid: [m.sender],
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363358310754973@newsletter',
          newsletterName: 'SHABAN-MD',
          serverMessageId: 143
        }
      }
    }, {
      quoted: mek
    })
  } catch (e) {
    console.log(e)
    reply(`${e}`)
  }
})