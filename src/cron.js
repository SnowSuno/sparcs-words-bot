import { schedule } from "node-cron";
import { testQuery } from "./db.js";

schedule("*/5 * * * * *", () => {
  testQuery()
    .then(console.log)
    .catch(console.error);
});
