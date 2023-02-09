
# WPP-BOT-TEMPLATE

Template para a criação de um bot de whatsapp com integração do GPT-3 da OpenAI.

---


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.example.
Para obter essas chaves, crie uma conta na [OpenAi](https://openai.com/api/) e utilize do plano gratuito.

`OPENAI_KEY`

`ORGANIZATION_ID`

`PHONE_NUMBER`

---

## Instalação

```bash
  git clone git@github.com:WayneNtkM/wpp-bot-template.git
  cd app-bot-template
```

---

## Deploy

Atualize o arquivo '.env.exemple' utilizando suas chaves e o número desejado.

Para fazer o deploy desse projeto rode

```bash
  npm i
```

Rode o comando no terminal para subir a aplicação

```bash
  npm run dev
```

Abra o aplicativo do whatsapp e leia o QR CODE gerado no terminal e pronto.


## Documentação

[Documentação da OpenAi](https://platform.openai.com/docs/introduction)

## Stack utilizada

NodeJs,
[Venom-bot](https://orkestral.io),
JavaScript

**API**: OpenAi


