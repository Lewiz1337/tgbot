const { readFolder } = require('../server/index.js');

// console.log(readFolder);

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
    { text: 'Пробные тесты', callback_data: 'TEST' },
    { text: 'Словарь терминов', callback_data: 'VOCABULARY' },
  ]);
  // console.log(res);
  // res.push({ text: 'Словарь терминов', callback_data: 'VOCABULARY' });
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: res,
      // resize_keyboard: true,
    }),
  };
};
// menuButtons().then((res) => {
//   console.log(res);
// });

module.exports = { menuButtons };
