![Perin Bot Logo](.readme/logo.jpg)

# Perin Twitch Bot

Bot utilizado no canal da twitch do Perin. Serve para responder a comandos, resgate de recompensas e outras coisinhas meio estranhas mesmo.

## Installing / Getting started

Para rodar o bot você basicamente precisa rodar os seguintes comandos

```shell
git clone https://github.com/victorperin/perin-twitch-bot
npm install

export TWITCH_CHANNEL=(NOME DO SEU CANAL)
export TWITCH_BOT_TOKEN=(TOKEN DE ACESSO DA TWITCH)
export TWITCH_TEST_BOT_TOKEN=(TOKEN DE ACESSO DE UM OUTRO USUARIO DA TWITCH)

npm run build

npm start
```

Com isso, seu bot começa a ser executado no canal que você escolheu.

### Initial Configuration

Para conseguir rodar os comandos acima, você precisa antes encontrar um token de acesso da twitch, que você consegue [aqui]().

Lembre-se de que para rodar os testes e2e, é necessario ter 2 tokens de acesso, um na variavel `TWITCH_BOT_TOKEN` e o outro na `TWITCH_TEST_BOT_TOKEN`, o segundo deve vir de um outro usuário da twitch, para simular um usuario real.

Além disso, será necessario que você saiba o nome do canal para onde esse bot vai rodar, no meu caso, `victor_perin`.

## Developing

Se você quiser ajudar o projeto escrevendo código, ou então apenas fazendo modificações para o seu canal, eu recomendo que você comece fazendo os seguintes passos:

- Se seu objetivo é ajudar o projeto, antes, abra uma issue ou verifique se já existe alguma para o que você está pensando em fazer.
- Tenha certeza de que você rodou as `configurações iniciais` e a `instalação básica` do projeto.
- Crie um novo branch no git usando `git checkout -b NOME_DA_FEATURE`, assim você não fica travado se precisar criar outro pull request nesse meio tempo
- faça as mudanças necessarias, mas lembre-se de que um linter e os testes dos arquivos modificados rodarão toda a vez que você fizer um commit. (mais sobre isso [aqui]())
- envie as modificações e abra um pull request para o projeto, lembre-se também de referencia-lo no seu issue inicial, além de descrever o que fez na descrição do pull request, quanto mais completo, melhor para que outros entendam.


### Building

Aguenta ai que vou fazer isso mais pra frente

## Features

Nosso bot se separa atualmente em algumas categorias de features:
  - comandos do bot
  - resgate de recompensas (não implementado)
  - Crons (não implementado)
  - File Watchers (não implementado)

### Comandos do bot
  - !telegram
  - !engenhariaReversa
  - (outros a serem desenvolvidos)

## Configuration

Aguenta ai que vou fazer isso mais pra frente

## Contributing

Aguenta ai que vou fazer isso mais pra frente

## Links


- Canal onde o bot roda: https://twitch.tv/victor_perin
- Repository: https://github.com/victorperin/perin-twitch-bot/
- Issue tracker: https://github.com/victorperin/perin-twitch-bot/issues
  - Caso encontre algum bug ou queira adicionar, leia a parte de [Contributing](#Contributing)
- Projetos que usamos de base:
  - TypeScript: https://www.typescriptlang.org/
  - Twitch.JS: https://github.com/twitch-js/twitch-js
  - Jest: https://jest.io


## Licensing

Estamos usando por enquanto a [licença MIT](https://choosealicense.com/licenses/mit/).
