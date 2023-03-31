import { Upload, API } from "vk-io";
import fs from "fs";
// @ts-ignore
import { getTimeoutInMs } from "./utils/getTimeoutInMs.ts";

const TOKEN = "";

const MINUTE = 60 * 1000;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

// console.log(
//   getTimeoutInMs({
//     YYYY: 2023,
//     MM: 3,
//     DD: 29,
//     h: 17,
//     m: 30,
//     s: 0,
//   })
// );

const api = new API({
  token: TOKEN,
});

const upload = new Upload({
  api,
});

const attachment = await upload.messagePhoto({
  source: {
    value: fs.createReadStream("./images/300.jpg"),
    contentLength: fs.statSync("./images/300.jpg").size,
    // timeout: 60_000,
  },
});

await api.messages.send({
  peer_id: 0,
  // В итоге здесь будет photo1234_1234 (приведение через toString)
  attachment,
});

// const { VK } = require('vk-io');
// const fs = require('fs');

// const vk = new VK({
//   token: 'YOUR_ACCESS_TOKEN_HERE',
// });

// const communityId = YOUR_COMMUNITY_ID_HERE;

// function readImagesFromFolder(folderPath) {
//   const images = fs.readdirSync(folderPath)
//     .filter(file => file.endsWith('.jpg'))
//     .map(file => ${folderPath}/${file});

//   return images;
// }

// async function postImagesToCommunity(images) {
//   for (const image of images) {
//     await vk.upload.messagePhoto({
//       source: fs.createReadStream(image),
//       peer_id: -${communityId},
//     });
//   }
// }

// const images = readImagesFromFolder('PATH_TO_YOUR_IMAGES_FOLDER');

// postImagesToCommunity(images);
