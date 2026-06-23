const sharp = require('sharp');
const path = require('path');

async function compressImage() {
  const inputPath = path.join(__dirname, "public", "img.jpg");
  const outputPath = path.join(__dirname, "public", "img-optimized.jpg");

  try {
    await sharp(inputPath)
      .resize(1200) // Resize width to 1200, maintain aspect ratio
      .jpeg({ quality: 60 }) // Compress to 60% quality JPEG
      .toFile(outputPath);
    console.log("Image compressed successfully with sharp.");
  } catch (error) {
    console.error("Error compressing image with sharp:", error);
  }
}

compressImage();
