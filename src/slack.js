import axios from "axios";

export const sendMessage = (text) => axios
  .post(process.env.SLACK_WEBHOOK_URL, { text });
