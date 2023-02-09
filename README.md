
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

## Dicas

Para não precisar deixar a máquina ligada 24/7, suba o serviço em uma máquina [EC2](https://aws.amazon.com/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Categories=categories%23compute&trk=a5a8f3c9-c18a-485c-bbdb-52b795178fbe&sc_channel=ps&s_kwcid=AL!4422!3!490415521566!e!!g!!aws%20ec2&ef_id=CjwKCAiArY2fBhB9EiwAWqHK6sPKux-we5yPC2_tmwFtTz6YN-7R9Ijm6Wi0uwIuFxy8OTpDIJ-SdRoCCTAQAvD_BwE:G:s&s_kwcid=AL!4422!3!490415521566!e!!g!!aws%20ec2&awsf.Free%20Tier%20Types=*all) da AWS.

