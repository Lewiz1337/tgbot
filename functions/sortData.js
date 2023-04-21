const sortData = (a, b) => {
  if (+/\d+/.exec(a) && +/\d+/.exec(b)) {
    return +/\d+/.exec(a) - +/\d+/.exec(b);
  } else {
    return true;
  }
};

module.exports = { sortData };
