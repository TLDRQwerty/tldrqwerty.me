import {
  getGameInfo,
  getOwnedGames,
  getPlayerAchievements,
} from "@functions/steam";
import { fileURLToPath } from "url";
import fs from "node:fs";
import path from "node:path";
import { Buffer } from "node:buffer";
import fetch from "node-fetch";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const outputPath = path.join(__dirname, "../src/data/steam.json");
const imageDir = path.join(__dirname, "../public/images/steam");
const boxartDir = path.join(imageDir, "boxart");

const headerImageDir = path.join(imageDir, "header");

fs.mkdirSync(imageDir, { recursive: true });
fs.mkdirSync(boxartDir, { recursive: true });
fs.mkdirSync(headerImageDir, { recursive: true });

async function fetchSteamLibrary() {
  const games = await getOwnedGames();

  const results = [];

  for (const game of games) {
    const { appid, name, playtime_forever } = game;
    const imageUrl = `https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/${appid}/library_600x900.jpg`;

    const imageFileName = `${appid}.jpg`;

    const imageResponse = await fetch(imageUrl);

    let hasBoxArt = false;
    if (imageResponse.ok) {
      hasBoxArt = true;
      const arrayBuffer = await imageResponse.arrayBuffer();
      const imagebuffer = Buffer.from(arrayBuffer);
      const imagePath = path.join(boxartDir, imageFileName);

      fs.writeFileSync(imagePath, imagebuffer);
    }

    const info = await getGameInfo(appid.toString());
    const achievements = await getPlayerAchievements(appid.toString());

    let hasHeaderImage = false;
    if (info?.[appid.toString()]?.data?.header_image) {
      const headerImageUrl = info?.[appid.toString()]?.data?.header_image;
      const headerResponse = await fetch(headerImageUrl);

      if (headerResponse.ok) {
        hasHeaderImage = true;
        const arrayBuffer = await headerResponse.arrayBuffer();
        const imagebuffer = Buffer.from(arrayBuffer);
        const imagePath = path.join(headerImageDir, imageFileName);

        fs.writeFileSync(imagePath, imagebuffer);
      }
    }

    results.push({
      id: appid.toString(),
      title: name,
      appid,
      playtime: playtime_forever,
      box_art: hasBoxArt ? `/images/steam/boxart/${imageFileName}` : null,
      header_art: hasHeaderImage
        ? `/images/steam/header/${imageFileName}`
        : null,
      information: info?.[appid.toString()]?.data ?? null,
      achievements: achievements?.playerstats.achievements ?? [],
      slug: appid.toString(),
    });

    console.log(`Fetched ${name}`);
  }

  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));
}

fetchSteamLibrary();
