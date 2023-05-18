// Кнопка для отправки ссылок
const linkButton = (url) => {
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: `Cкачать документ`, url: `${url}` }]],
    }),
  };
};

module.exports = { linkButton };
