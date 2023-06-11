import axios from "axios";

export const sendMessage = (text) => axios.post(
  process.env.SLACK_WEBHOOK_URL,
  {
    blocks: [
      {
        type: "section",
        text: { type: "mrkdwn", text: formatText(text) },
      }
    ]
  }
);

const formatText = (text) => ">*" + text
  .replaceAll(/\[\[([^\]\[]+)]]/g, "<https://wiki.sparcs.org/index.php/$1>")
  .replace(" - ", "*\\n>- ");
