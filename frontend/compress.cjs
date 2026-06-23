const Jimp = require("jimp");
const path = require("path");

async function compressImage() {
  const inputPath = path.join(__dirname, "public", "img.jpg");
  const outputPath = path.join(__dirname, "public", "img-optimized.jpg");
  
  try {
    const image = await Jimp.read(inputPath);
    await image
      .resize(1200, Jimp.AUTO) // Resize width to 1200px, auto height
      .quality(75)             // Set JPEG quality to 75
      .writeAsync(outputPath);
    console.log("Image compressed successfully.");
  } catch (err) {
    console.error("Error compressing image:", err);
  }
}

compressImage();
