// Функция для сортировки данных в алфовитном порядке, с учетом номера (Раздел 1, Раздед 2, ... , Раздел 11 и т.д)
const sortData = (a, b) => {
  if (+/\d+/.exec(a) && +/\d+/.exec(b)) {
    return +/\d+/.exec(a) - +/\d+/.exec(b);
  } else {
    return true;
  }
};

module.exports = { sortData };
