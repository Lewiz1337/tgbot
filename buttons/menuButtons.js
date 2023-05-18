const { readFolder } = require('../server/index.js');

const menuButtons = async () => {
  const read = await readFolder('data');
  const res = read.folders
    .filter((item) => item !== 'data/')
    .map((item) => {
      const text = item.split('/');
      return (item = [
        {
          text: text[text.length - 2],
          callback_data: 'f?' + text[text.length - 2],
        },
      ]);
    });

  res.push([
    { text: 'Итоговый тест', callback_data: 'TEST' },
    { text: 'Листай и запоминай!', callback_data: 'GAME' },
  ]);

  return {
    reply_markup: JSON.stringify({
      inline_keyboard: res,
    }),
  };
};

module.exports = { menuButtons };
