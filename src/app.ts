import { App } from '@slack/bolt';

const app = new App({
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  token: process.env.SLACK_BOT_TOKEN,
});

app.message('hello', async ({ message, say }) => {
  if (message.subtype === undefined || message.subtype === 'bot_message') {
    await say(`hello <@${message.user}> !`);
  }
});

(async () => {
  await app.start(Number(process.env.PORT) || 3000);
  console.log('⚡️ Bolt app is running!');
})();
