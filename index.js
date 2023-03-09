/* eslint-disable */
const TelegramApi = require('node-telegram-bot-api');
const dataFile = require('./data.js');
const func = require('./functions/createButtons');
const token = '6023939055:AAEQdfOhcVbW4d3AC9BHXtNygRuWAXvZkKY';

const db = dataFile.data;

const { createButtons, createSingleButton } = func;

const bot = new TelegramApi(token, { polling: true });
bot.setMyCommands([
  { command: '/start', description: 'Начало работы' },
  { command: '/menu', description: 'Открыть меню' },
  { command: '/flip', description: 'Бросить монетку' },
  { command: '/roll', description: 'Случайное число от 1 до 100' },
]);

const mainMenuButtons = createButtons({ data: db, rowsNumbs: 2 });
const backToMenuBtn = createSingleButton('<- На главную', '/start');
const buttons = createButtons({ data: db.allSection.content.folders, rowsNumbs: 0 });

const readContent = async (chatId, content) => {
  if (!content.message && content.files.length === 0) {
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
    await bot.sendMessage(chatId, `${content.message}`);
  }
  if (content.files) {
    for (let i = 0; i < content.files.length; i++) {
      await bot.sendDocument(chatId, `${content.files[i].fileUrl}`, {
        caption: `${content.files[i].name}`,
      });
    }
  }
};

const findDefinition = async (msg) => {
  if (msg.text[0] === '/') {
    return;
  }
  const array = db.vocabulary.content;
  const chatId = msg.chat.id;
  console.log(msg.text);
  const res = array.filter((item) => {
    if (item.abbreviation.toLowerCase() === msg.text.toLowerCase()) {
      return true;
    }
  });
  if (res.length === 0) {
    return bot.sendMessage(chatId, 'К сожалению, термин не найден :(');
  }
  await bot.sendMessage(chatId, 'Вот что удалось найти:');
  for (let i = 0; i < res.length; i++) {
    return bot.sendMessage(chatId, res[i].definition);
  }
};

const getQuizQuestions = (obj = { count: 0 }) => {
  const tests = db.tests.content;
  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }
  if (obj.count === 0) {
    return shuffle(tests);
  }
  return shuffle(tests).slice(0, obj.count);
};

const start = () => {
  bot.on('message', async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;

    if (text === '/start') {
      return bot.sendMessage(chatId, `Здравствуй, ${msg.chat.username}! `, mainMenuButtons);
    }

    if (text === '/menu') {
      return bot.sendMessage(chatId, 'Меню:', mainMenuButtons);
    }

    if (text === '/flip') {
      const eagle = Math.round(Math.random());
      if (eagle) {
        bot.sendMessage(chatId, '<i>Орёл</i>', { parse_mode: 'HTML' });
      } else {
        bot.sendMessage(chatId, '<i>Решка</i>', { parse_mode: 'HTML' });
      }
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

  let testStart = false;

  bot.on('callback_query', async (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;

    if (data === '/practiceDoc') {
      await bot.sendMessage(chatId, 'Документация по практике:');
      await bot.sendDocument(chatId, './files/practice/2019.pdf', {
        caption:
          'ПРАКТИКА ДЛЯ ПОЛУЧЕНИЯ КВАЛИФИКАЦИИ РАБОЧЕГО «ОПЕРАТОР ЭЛЕКТРОННО-ВЫЧИСЛИТЕЛЬНЫХ МАШИН»',
      });
      await bot.sendDocument(chatId, './files/practice/plan.doc', {
        caption: 'Каляндарна-тэматычныплан',
      });
    }

    if (data === '/allSection') {
      await bot.sendMessage(chatId, 'Все разделы:', buttons);
    }

    if (data.includes('/theme')) {
      const theme = db.allSection.content.folders[data.slice(1)];
      await bot.sendMessage(chatId, `<i>${theme.name}:</i>`, { parse_mode: 'HTML' });
      readContent(chatId, theme.content);
    }

    if (data === '/vocabulary') {
      bot.off('message', findDefinition);
      bot.sendMessage(chatId, 'Введи термин, который необходимо расшифровать:');
      bot.on('message', findDefinition);
    }

    if (data !== '/vocabulary') {
      bot.off('message', findDefinition);
    }

    // if (data === '/test') {
    //   if (!testStart) {
    //     testStart = true;
    //     console.log(testStart);
    //     let arr = getQuizQuestions();
    //     let qusCount = arr.length;
    //     const pollArr = [];
    //     let result = 0;
    //     let ansCount = 0;
    //     const createQuestion = () => {
    //       bot.sendChatAction(chatId);
    //       for (let i = 0; i < arr.length; i++) {
    //         bot
    //           .sendPoll(chatId, arr[i].question, arr[i].options, {
    //             correct_option_id: arr[i].current,
    //             explanation: 'Paris is the capital of France.',
    //             is_anonymous: false,
    //             allows_multiple_answers: true,
    //             type: 'quiz',
    //           })
    //           .then((poll) => {
    //             pollArr.push({ id: Number(poll.poll.id), current: arr[i].current });
    //           });
    //       }
    //     };

    //     const onAnsFunc = (ans) => {
    //       if (pollArr.find((item) => item.id === +ans.poll_id).current === ans.option_ids[0]) {
    //         result++;
    //       }
    //       if (ansCount + 1 === qusCount) {
    //         console.log(testStart);
    //         testStart = false;
    //         bot.sendMessage(chatId, `Тест завершен [${result} / ${qusCount}]`);
    //         count = 0;
    //         result = 0;
    //         qusCount = 0;
    //       }

    //       console.log(ansCount);
    //       console.log(ans);
    //       console.log(ans.option_ids[0]);
    //       ansCount++;
    //     };

    //     bot.on('poll_answer', onAnsFunc);
    //     createQuestion();
    //   } else {
    //     bot.sendMessage(chatId, 'Прежде чем начать новый тест, закончите этот!');
    //   }
    // }
    // console.log(testStart);
    if (data === '/test') {
      bot.sendMessage(chatId, 'Начало теста', {
        reply_markup: JSON.stringify({
          keyboard: [[{ text: 'adadad' }]],
          resize_keyboard: true,
        }),
      });
    }
    if (data !== '/test') {
      bot.getChat(chatId).then((res) => {
        console.log(res);
      });
      bot.sendMessage(chatId, 'Начало теста', {
        reply_markup: JSON.stringify({
          remove_keyboard: true,
          resize_keyboard: true,
        }),
      });
    }
  });
};

start();
