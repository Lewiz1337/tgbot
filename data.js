const data = {
  allSection: {
    name: 'Все разделы',
    command: '/allSection',
    content: {
      folders: {
        Introduction: {
          type: 'message',
          name: 'Введение',
          command: '/introduction',
          content: {
            message: ['Бури бури тыры пыры'],
          },
        },
        theme1: {
          type: 'message',
          name: 'Раздел 1',
          command: '/theme1',
          content: {
            files: [],
          },
        },
        theme2: {
          type: 'message',
          name: 'Раздел 2',
          command: '/theme2',
          content: {
            files: [],
          },
        },
        theme3: {
          type: 'message',
          name: 'Раздел 3',
          command: '/theme3',
          content: {
            files: [],
          },
        },
        theme4: {
          type: 'message',
          name: 'Раздел 4',
          command: '/theme4',
          content: {
            message: '***ЗДЕСЬ МОЖЕТ БЫТЬ ЛЮЬБОЕ СООБЩШЕНИЕ/ССЫЛКА/КАРТИНКА/ВИДЕО/GIF/ **',

            files: [
              {
                name: 'ПРАКТИКА ДЛЯ ПОЛУЧЕНИЯ КВАЛИФИКАЦИИ РАБОЧЕГО «ОПЕРАТОР ЭЛЕКТРОННО-ВЫЧИСЛИТЕЛЬНЫХ МАШИН»',
                fileUrl: './files/practice/2019.pdf',
              },
              {
                name: 'Каляндарна-тэматычныплан',
                fileUrl: './files/practice/plan.doc',
              },
            ],
          },
        },
      },
    },
  },
  vocabulary: {
    type: 'message',
    name: 'Словарь терминов',
    command: '/vocabulary',
    content: [
      {
        abbreviation: 'ОДКБ',
        definition:
          'Организация Договора о коллективной безопасности (ОДКБ), реже «Ташкентский пакт»[3][4][5], «Ташкентский договор»[3] — региональная международная организация[6], провозглашаемыми целями деятельности которой являются «укрепление мира, международной и региональной безопасности и стабильности, защита на коллективной основе независимости, территориальной целостности и суверенитета государств-членов, приоритет в достижении которых государства-члены отдают политическим средствам»',
      },
      {
        abbreviation: 'СВЧ',
        definition:
          'Сверхвысокочастотное излучение (СВЧ-излучение) или микроволновое излучение – это электромагнитное излучение, включающее в себя дециметровый, сантиметровый и миллиметровый диапазоны радиоволн, частоты микроволнового излучения изменяются от 300 МГц до 300 ГГц (длина волны от 1 м до 1 мм).',
      },
      {
        abbreviation: 'SIM',
        definition:
          'Сим-карта (SIM-карта, от англ. Subscriber Identification Module — модуль идентификации абонента) — идентификационный электронный модуль абонента, применяемый в мобильной связи. SIM-карты применяются в сетях GSM. Другие современные сотовые сети обычно также применяют другие модули идентификации, обычно внешне схожие с SIM и выполняющие аналогичные функции — USIM в сетях UMTS, R-UIM в сетях CDMA и пр.',
      },
    ],
  },
  tests: {
    name: 'Пробные тесты',
    command: '/test',
    content: [
      {
        question: 'a',
        options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
        current: 0,
      },
      {
        question: 'b',
        options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
        current: 0,
      },
      {
        question: 'c',
        options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
        current: 0,
      },
      {
        question: 'd',
        options: ['Paris', 'Marseille', 'Lyon', 'Toulouse'],
        current: 0,
      },
    ],
  },
  practice: {
    name: 'Документация по практике',
    command: '/practiceDoc',
    content: {
      files: [
        {
          name: 'ПРАКТИКА ДЛЯ ПОЛУЧЕНИЯ КВАЛИФИКАЦИИ РАБОЧЕГО «ОПЕРАТОР ЭЛЕКТРОННО-ВЫЧИСЛИТЕЛЬНЫХ МАШИН»',
          fileUrl: './files/practice/2019.pdf',
        },
        {
          name: 'Каляндарна-тэматычныплан',
          fileUrl: './files/practice/plan.doc',
        },
      ],
    },
  },
};

module.exports = { data };
// content: {
//   files?: {path: string, name: string}[],
//   folers?: folder,
//   message?: string[],
//   photo?: string[],
//   test?????
// }

// folder: {
//   type: string;
//   name: string;
//   command: string;
//   content: content:
// }
