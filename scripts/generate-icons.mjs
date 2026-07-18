import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "..", "public", "images", "logo.png");
const destination = path.join(__dirname, "..", "public");

const icons = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "favicon-48x48.png", size: 48 },
];

async function generate() {
  for (const icon of icons) {
    await sharp(source)
      .resize(icon.size, icon.size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(path.join(destination, icon.name));

    console.log(`✓ ${icon.name} created`);
  }

  console.log("\nAll icons generated successfully.");
}

generate().catch(console.error);