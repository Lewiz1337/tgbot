/* eslint-disable */
const TelegramApi = require('node-telegram-bot-api');
const { linkButton } = require('./buttons/linkButton.js');
const { menuButtons } = require('./buttons/menuButtons.js');
const { bucketButtons } = require('./functions/bucketButtons.js');
const func = require('./functions/createButtons');
const token = '6087753732:AAHDzs91SXPdP2xbfMz_eS5jRy-LiMccYQk';

const webAppUrl = 'https://playful-centaur-f5a6b2.netlify.app';
const testUrl = 'https://onlinetestpad.com/o64i6x7k5zy3y';

// 'https://onlinetestpad.com/o64i6x7k5zy3y'
const { findDef } = require('./functions/findDef.js');

const { createButtons, createSingleButton } = func;
const { readFolder } = require('./server/index.js');

const bot = new TelegramApi(token, { polling: true });
bot.setMyCommands([
  { command: '/start', description: 'Начало работы' },
  { command: '/menu', description: 'Открыть меню' },
  { command: '/help', description: 'Справка' },
]);

const backToMenuBtn = createSingleButton('<- На главную', '/start');

const sendAllContent = async (chatId, content) => {
  if (
    !content.message.length &&
    !content.files.length &&
    !content.folders.length &&
    !content.images.length
  ) {
    await bot.sendMessage(
      chatId,
      `<strong><i>Этот раздел пока что пуст, ожидайте обновления!</i></strong>`,
      {
        parse_mode: 'HTML',
        backToMenuBtn,
      },
    );
  }
  if (content.message) {
    for (let i = 0; i < content.message.length; i++) {
      await bot.sendMessage(chatId, `${content.message[i]}`);
    }
  }
  if (content.files) {
    for (let i = 0; i < content.files.length; i++) {
      console.log(content.files[i]);
      const linkBtn = linkButton(content.files[i].url);
      await bot.sendMessage(chatId, `${content.files[i].name.slice(1)}`, linkBtn);
    }
  }
  if (content.images) {
    try {
      for (let i = 0; i < content.images.length; i++) {
        await bot.sendPhoto(chatId, `${content.images[i]}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  }
  if (content.folders && content.folders.length > 1) {
    bucketButtons(content.folders).then((res) => {
      console.log(res);
      bot.sendMessage(chatId, 'Выберите раздел:', res);
    });
    console.log(content.folders);
  }
};

const start = async () => {
  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
      await menuButtons().then((res) => {
        bot.sendMessage(chatId, `Здравствуй, ${msg.chat.username}! `, res);
      });
      bot.sendMessage(chatId, ' ', {
        reply_markup: {
          keyboard: [[{ text: 'Меню' }]],
          resize_keyboard: true,
          one_time_keyboard: true,
          selective: true,
        },
      });
    }

    if (text === '/menu' || text === 'Меню') {
      menuButtons()
        .then((res) => {
          bot.sendMessage(chatId, 'Меню:', res);
        })
        .catch((err) => {
          bot.sendMessage(chatId, 'Произошла ошибка');
        });
    }

    if (text === '/flip') {
      const eagle = Math.round(Math.random());
      if (eagle) {
        bot.sendMessage(chatId, '<i>Орёл</i>', { parse_mode: 'HTML' });
      } else {
        bot.sendMessage(chatId, '<i>Решка</i>', { parse_mode: 'HTML' });
      }
    }
    if (text === '/help') {
      await bot.sendMessage(
        chatId,
        'С помощью этого бота Вы можете ознакомиться с документацией по практике, со всем практическим материалом практики, просмотреть словарь терминов и закрепить их изучение в игровой форме "Листай и запоминай", выполнить тесты по каждому разделу и итоговое тестирование.\n 💯 Бот позволяет учащимся самостоятельно подготовиться к успешной сдаче квалификационного экзамена, выполнив все практические занятия, просмотрев вспомогательный материал и пройдя все имеющиеся тесты.\n ℹ️ Вы можете отправить боту термин из курса практики, в ответ Вам отправит его определение.',
      );
    }
    if (!text.includes('/') && text !== 'Меню') {
      const result = findDef(text);
      await bot.sendMessage(chatId, result);
    }
    if (text.includes('/roll')) {
      if (text === '/roll') {
        return bot.sendMessage(chatId, Math.floor(Math.random() * 100) + 1);
      }
      const arr = text.split(' ');
      if (!Number(arr[1])) {
        return bot.sendMessage(chatId, 'Неверное значение');
      } else {
        return bot.sendMessage(chatId, Math.floor(Math.random() * Number(arr[1])) + 1);
      }
    }
  });

  bot.on('callback_query', async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data.includes('f?')) {
      const folder = data.slice(2, data.length);
      console.log(data);
      readFolder(folder)
        .then((res) => {
          sendAllContent(chatId, res);
        })
        .catch((err) => {
          console.log(err.message);
          bot.sendMessage(chatId, 'Произошла ошибка');
        });
    }

    if (data === 'GAME') {
      await bot.sendMessage(chatId, 'Нажмите, чтобы начать', {
        reply_markup: {
          inline_keyboard: [[{ text: 'Старт!', web_app: { url: webAppUrl } }]],
        },
      });
    }
    if (data === 'TEST') {
      await bot.sendMessage(chatId, 'Перейдите по ссылке и пройдите итоговый тест! \n' + testUrl);
    }
  });
};

start();
