import { schedule } from "node-cron";
import { getWordsText } from "./db.js";
import { parseWords, pickRandom } from "./utils.js";

schedule("*/5 * * * * *", () => {
  getWordsText()
    .then(parseWords)
    .then(pickRandom)
    .then(console.log)
    .catch(console.error);
});
