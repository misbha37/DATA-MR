const config = require('../config')
const { cmd, commands } = require('../command');
const os = require("os")
const {runtime} = require('../lib/functions')
const axios = require('axios')

cmd({
    pattern: "menu2",
    alias: "allmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⚡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭━━━〔 *${config.BOT_NAME}* 〕━━━┈⊷
┃★╭──────────────
┃★│ Owner : *${config.OWNER_NAME}*
┃★│ Baileys : *Multi Device*
┃★│ Type : *NodeJs*
┃★│ Platform : *Heroku*
┃★│ Mode : *[${config.MODE}]*
┃★│ Prifix : *[${config.PREFIX}]*
┃★│ Version : *V.5 Bᴇᴛᴀ*
┃★╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
╭━━〔 *Download Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• facebook <provide url>
┃◈┃• fb <provide url>
┃◈┃• mediafire <provide url>
┃◈┃• tiktok <provide url>
┃◈┃• twitter <provide url>
┃◈┃• wiki <provide Name>
┃◈┃• Insta <provide url>
┃◈┃• apk <provide name> 
┃◈┃• img <provide name>
┃◈┃• spotify <provide url>
┃◈┃• play <provide url name song>
┃◈┃• play2 <provide name song>
┃◈┃• play5 <provide name song>
┃◈┃• video2 Yt <provide name song>
┃◈┃• audio3 Yt <provide url>
┃◈┃• git <provide github repo name zipfile>
┃◈┃• gdrive <provide url>
┃◈┃• img <provide IMG name>
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Group Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• grouplink <provide command>
┃◈┃• kickall <provide command>
┃◈┃• grouplink <provide command>
┃◈┃• add <provide number>
┃◈┃• revoke <group Link reset>
┃◈┃• disappear <disappear on 24h>
┃◈┃• disappear off
┃◈┃• disappear <.disappear on 7d>
┃◈┃• allreq <request all join remove>
┃◈┃• updategname
┃◈┃• updategdesc
┃◈┃• joinrequests <check join request>
┃◈┃• nikal
┃◈┃• mute <group chat off>
┃◈┃• unmute <group chat on>
┃◈┃• tagall
┃◈┃• ship
┃◈┃• character
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Owner Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• vv
┃◈┃• antidelete
┃◈┃• listcmd
┃◈┃• allmenu
┃◈┃• repo
┃◈┃• restart
┃◈┃• shutdown
┃◈┃• updatecmd
┃◈┃• alive 
┃◈┃• ping 
┃◈┃• gjid
┃◈┃• jid
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Fun Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• insult
┃◈┃• hack
┃◈┃• pickup 
┃◈┃• joke
┃◈┃• hpy
┃◈┃• syd
┃◈┃• anger
┃◈┃• nikal
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Convert Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• sticker 
┃◈┃• gs 
┃◈┃• fancy
┃◈┃• tts
┃◈┃• base64
┃◈┃• unbase64
┃◈┃• binary
┃◈┃• dbinary
┃◈┃• urldecode
┃◈┃• urlencode
┃◈┃• url
┃◈┃• readmore
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Main Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• ping
┃◈┃• speed
┃◈┃• live 
┃◈┃• alive
┃◈┃• runtime
┃◈┃• uptime 
┃◈┃• repo
┃◈┃• owner
┃◈┃• menu
┃◈┃• menu2
┃◈┃• restart
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Anime Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• truth
┃◈┃• dare
┃◈┃• dog
┃◈┃• awoo
┃◈┃• garl
┃◈┃• waifu
┃◈┃• neko
┃◈┃• maid
┃◈┃• animegirl
┃◈┃• animegirl1
┃◈┃• animegirl2
┃◈┃• animegirl3
┃◈┃• animegirl4
┃◈┃• animegirl5
┃◈┃• anime1
┃◈┃• anime1
┃◈┃• anime2
┃◈┃• anime3
┃◈┃• anime4
┃◈┃• anime5
┃◈└───────────┈⊷
╰──────────────┈⊷
╭━━〔 *Other Menu* 〕━━┈⊷
┃◈╭─────────────·๏
┃◈┃• fact
┃◈┃• cpp
┃◈┃• rw
┃◈┃• fancy
┃◈┃• logo <text>
┃◈┃• define
┃◈┃• news
┃◈┃• weather
┃◈┃• save
┃◈┃• send
┃◈┃• wikipedia
┃◈┃• gpass
┃◈┃• githubstalk
┃◈└───────────┈⊷
╰──────────────┈⊷
> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://i.ibb.co/nbr8SCs/shaban-sobx-md.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363358310754973@newsletter',
                        newsletterName: 'SʜᴀʙᴀɴMᴅ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/JawadYTX/KHAN-DATA/raw/refs/heads/main/autovoice/menunew.m4a' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});
