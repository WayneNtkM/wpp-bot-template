import { create } from "venom-bot";
import 'dotenv/config';
import { Configuration, OpenAIApi } from "openai";


const config = new Configuration({
  apiKey: process.env.OPENAI_KEY,
  organization: process.env.ORGANIZATION_ID,
});

const openai = new OpenAIApi(config);

const getDavinciResponse = async (text) => {
  const opts = {
    model: 'text-davinci-003',
    prompt: text,
    temperature: 1,
    max_tokens: 4000,
  }

  try {
    const res = await openai.createCompletion(opts);
    let botRes = '';
    res.data.choices.forEach(({ text }) => {
      botRes += text;
    });
    return `${botRes.trim()}`;
  } catch (error) {
    return `OpenAi Erro: ${e.response.data.error.message}`
  }
}

const getDalleResponse = async (text) => {
  const opts = {
    prompt: text,
    n: 1,
    size: "1024x1024",
  }

  try {
    const res = await openai.createImage(opts);
    return res.data.data[0].url;
  } catch (error) {
    return `OpenAi Erro: ${e.response.data.error.message}`
  }
}

const commands = (client, message) => {
  const iaCommands = {
    davinci3: '/bot',
    dalle: '/img'
  }

  let firstWord = message.text.substring(0, message.text.indexOf(' '));

  switch (firstWord) {
    case iaCommands.davinci3:
      const question = message.text.substring(message.text.indexOf(' '));
      getDavinciResponse(question).then((res) => {
        client.sendText(message.from === process.env.BOT_NUMBER ? message.to : message.from, res);
      });
      break;
    case iaCommands.dalle:
      const imgDes = message.text.substring(message.text.indexOf(' '));
      getDalleResponse(imgDes, message).then((url) => {
        client.sendImage(
          message.from === process.env.PHONE_NUMBER ? message.to : message.from,
          url,
          imgDes,
          'Dalle Imagem'
        );
      });
      break;
  }
}

async function start(client) {
  client.onAnyMessage((message) => commands(client, message))
}

create({
  session: 'chat-gpt',
  multidevice: true,
})
  .then((client) => start(client)).catch((e) => console.log(e));
