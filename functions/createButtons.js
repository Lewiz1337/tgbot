const createButtons = (obj = { data: null, rowsNumbs: 0 }) => {
  const arr = [];
  const res = [];
  if (!obj.data) {
    return null;
  }
  const data = obj.data;
  const rowsNumbs = obj.rowsNumbs || 0;
  for (let key in data) {
    arr.push({ text: data[key].name, callback_data: data[key].command });
  }
  if (rowsNumbs === 0) {
    arr.forEach((item) => {
      res.push([item]);
    });
  } else {
    const rowRange = Math.floor(arr.length / rowsNumbs);
    for (let i = 0; i < rowsNumbs; i++) {
      if (i === rowsNumbs - 1) {
        res.push(arr.slice(i * rowRange, arr.length));
      } else {
        res.push(arr.slice(i * rowRange, i * rowRange + rowRange));
      }
    }
  }

  return {
    reply_markup: JSON.stringify({
      inline_keyboard: res,
      // resize_keyboard: true,
    }),
  };
};

const createSingleButton = (text, command) => {
  return {
    reply_markup: JSON.stringify({
      inline_keyboard: [[{ text: `${text}`, callback_data: `${command}` }]],
    }),
  };
};

module.exports = { createButtons, createSingleButton };
