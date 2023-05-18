// Логика для создания кнопок(папок), полученных из Yandex
const bucketButtons = async (folders) => {
  const res = folders.map((item) => {
    const text = item.split('/');
    return [
      {
        text: text[text.length - 2],
        callback_data: 'f?' + text[text.length - 2],
      },
    ];
  });
  // console.log(res);
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: res.slice(1, res.length),
      // resize_keyboard: true,
    }),
  };
};

module.exports = { bucketButtons };
