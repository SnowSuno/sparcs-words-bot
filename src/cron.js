import { schedule } from "node-cron";
import { getWordsText } from "./db.js";
import { parseWords, pickRandom } from "./utils.js";
import { sendMessage } from "./slack.js";

schedule("0 9 * * *", () => {
  getWordsText()
    .then(parseWords)
    .then(pickRandom)
    .then(sendMessage)
    .catch(console.error);
}, { timezone: "Asia/Seoul" });
