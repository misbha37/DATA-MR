const axios = require("axios");
const FormData = require("form-data");
const fs = require("fs");
const os = require("os");
const path = require("path");
const { cmd } = require("../command");

cmd({
  pattern: "tourl",
  alias: ["imgtourl", "img2url", "url"],
  react: "🖇",
  desc: "Convert an image to a URL using ImgBB.",
  category: "utility",
  use: ".tourl (Reply to an image)",
  filename: __filename
}, async (conn, m, store, { from, quoted, reply, sender }) => {
  try {
    const targetMsg = quoted ? quoted : m;
    if (!targetMsg || !targetMsg.mimetype) {
      return reply("❌ Please reply to an image.");
    }

    if (!targetMsg.mimetype.startsWith("image/")) {
      return reply("❌ Please reply to a valid image.");
    }

    reply("🔄 Uploading image...");

    const imageBuffer = await targetMsg.download();
    if (!imageBuffer) {
      return reply("❌ Failed to download the image.");
    }

    const tempFilePath = path.join(os.tmpdir(), "temp_image.jpg");
    fs.writeFileSync(tempFilePath, imageBuffer);

    const formData = new FormData();
    formData.append("image", fs.createReadStream(tempFilePath));

    const { data } = await axios.post(
      "https://api.imgbb.com/1/upload?key=f07b8d2d9f0593bc853369f251a839de",
      formData,
      { headers: formData.getHeaders() }
    );

    fs.unlinkSync(tempFilePath); // Delete temp file

    if (!data || !data.data || !data.data.url) {
      return reply("❌ Failed to upload the image.");
    }

    const imageUrl = data.data.url;
    await conn.sendMessage(from, {
      text: `✅ *Image Uploaded Successfully 📸*\n📏 *Size:* ${imageBuffer.length} Bytes\n🔗 *URL:* ${imageUrl}\n\n> ⚖️ *Uploaded via SHABAN-MD*`
    });

  } catch (error) {
    console.error("Upload Error:", error);
    reply("❌ Error: " + (error.message || error));
  }
});
