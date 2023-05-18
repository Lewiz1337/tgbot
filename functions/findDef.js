const { vacabulary } = require('../files/vacablulary');

// Функция для нахожния термина
const findDef = (str) => {
  const result = vacabulary.find((item) => item.text.toLowerCase() === str.toLowerCase());
  if (result) {
    return `${result.text} - ${result.value}`;
  }
  return 'Определение не найдено 🙁';
};

module.exports = { findDef };
