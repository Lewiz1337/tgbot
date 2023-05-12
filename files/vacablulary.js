const vacabulary = [
  {
    text: 'Полиграфия',
    value:
      'это отрасль техники, совокупность технических средств для множественного репродуцирования текстового материала и графических изображений.',
  },
  {
    text: 'Печатный процесс',
    value:
      'это процесс размножения/репродуцирования информации, полученной и обработанной в соответствии с определенным регламентом.',
  },
  {
    text: 'Печать',
    value:
      'это процесс многократного воспроизведения информации путем нанесения печатной краски с помощью носителя изображения (например, печатной формы) на запечатываемый материал.',
  },
  {
    text: 'Оттиск ',
    value: 'это изображение, полученное на запечатываемом материале.',
  },
  {
    text: 'Запечатываемый материал',
    value: 'это материал, на котором осуществляется процесс печати (бумага, картон, ткань и т.д.).',
  },
  {
    text: 'Печатная форма',
    value:
      'это материальный объект, с помощью которого краска переносится на запечатываемый материал (подложку) или промежуточный носитель для воспроизведения текста, графики.',
  },
  {
    text: 'Печатающие элементы',
    value:
      'это участки формы, на которые в процессе печатания наносится краска с последующей ее передачей на запечатываемый материал.',
  },
  {
    text: 'Пробельные элементы',
    value:
      'это участки, не принимающие на себя краску, в результате чего поверхность запечатываемого материала, соответствующая этим участкам, не будет покрыта красочным слоем.',
  },
  {
    text: 'Печатная машина',
    value: 'это устройство, на котором осуществляется процесс печати.',
  },
  {
    text: 'Печатная краска',
    value: 'это цветное вещество, которое при печати наносится на запечатываемый материал.',
  },
  {
    text: 'Компьютерная вёрстка',
    value:
      'это использование персонального компьютера и специального программного обеспечения для создания макета с целью последующей печати в типографии или на принтере.',
  },
  {
    text: 'Настольная издательская система',
    value:
      'это комплект оборудования для подготовки оригинал-макета издания, готового для передачи в типографию.',
  },
  {
    text: 'Макет',
    value: 'это прообраз будущего издания.',
  },
  {
    text: 'Стиль текста',
    value: 'это набор характеристик форматирования, применяемых к абзацам текста.',
  },
  {
    text: 'Буклет',
    value: 'это один или несколько листов бумаги, согнутые гармошкой или склеенные.',
  },
  {
    text: 'Шрифт',
    value:
      'это совокупность графически упорядоченных и различным образом материализуемых знаков (символов), являющихся средством представления текста в издании.',
  },
  {
    text: 'Интерлиньяж',
    value:
      'это расстояние между базовыми (основными) линиями смежных строк, может задаваться в качестве фиксированной, абсолютно или пропорционально изменяемой величины.',
  },
  {
    text: 'Базовая линия',
    value: 'это воображаемая линия, проведенная по основным символам текста.',
  },
  {
    text: 'Кегль',
    value:
      'это высота строки символов, т.е. расстояние от верхнего до нижнего выносного элемента плюс поля (оплечики) над и под литерой.',
  },
  {
    text: 'Буквица',
    value:
      'это первый прописной символ структурной части издания увеличенного размера, набранный или рисованный в виде изображения, часто включающего сложную орнаментально-декоративную композицию.',
  },
  {
    text: 'Выворотка',
    value:
      'это текст, напечатанный на контрастном (противоположном основному) фоне, например, белый текст по черному полю.',
  },
  {
    text: 'Пуля',
    value: 'это знак маркера списка: круг, квадрат, треугольник и др.',
  },
  {
    text: 'Знак акцента',
    value:
      'это средство специального оформления элементов для придания им особой смысловой нагрузки с помощью специальных указаний, в том числе знаки ударения, тильды, вектора и др.',
  },
  {
    text: 'Оборка',
    value:
      'это часть полосы набора, имеющая суженный формат, для заверстки сбоку иллюстрации, таблицы или текста.',
  },
  {
    text: 'Линейки',
    value:
      'это горизонтальные или вертикальные линии, разделяющие элементы макета (колонтитул, колонцифру и пр.) или играющие роль украшения.',
  },
  {
    text: 'Выпуск под обрез',
    value: 'это линия, рисунок или текст, выходящий за границу полосы после ее обрезки.',
  },
  {
    text: 'Рамка',
    value: 'это граница объекта для задания формы его обводки.',
  },
  {
    text: 'Астериск',
    value:
      'это знак для обозначения сноски или примечания, часто это звездочка (от греч. asteriskos – звездочка).',
  },
  {
    text: 'Виньетка',
    value:
      'это украшение в виде небольшого рисунка на титульном листе, в начале или конце раздела.',
  },
  {
    text: 'Врезка',
    value:
      'это способ нешрифтового выделения ряда строк в тексте путем их набора в меньшем формате, чем основной текст.',
  },
  {
    text: 'Колонтитул',
    value:
      'это элемент издания, помещаемый на каждой странице, помогающий читателю ориентироваться в содержании текста.',
  },
  {
    text: 'Колонцифра',
    value:
      'это порядковый номер страницы или столбца и помещается на верхнем, нижнем или боковом поле страницы.',
  },
  {
    text: 'Отбивка',
    value:
      'это способ нешрифтового выделения текста путем увеличения пробелов между отдельными фрагментами текста или элементами полосы набора.',
  },
  {
    text: 'Отточие',
    value:
      'это пространство между позициями табуляторов, заполненное повторяющимися символами (как правило, точками).',
  },
  {
    text: 'Рубрика',
    value:
      'это структурно-композиционная единица текста издания, которая выделена и, как правило, имеет собственный заголовок.',
  },
  {
    text: 'Подборка',
    value:
      'это материал, однородный по теме; размещают на нескольких колонках и объединяют одним общим заголовком – «шапкой».',
  },
  {
    text: 'Окно',
    value:
      'это статья (рисунок), заверстанная в верхнем правом углу полосы. Отбивается от текста жирными линейками.',
  },
  {
    text: 'Фонарь',
    value: 'это статья (рисунок), заверстанная в центре или внизу полосы на две-три колонки.',
  },
  {
    text: 'Подвал',
    value: 'это статья, размещенная в нескольких или во всех колонках внизу полосы.',
  },
  {
    text: 'Уголок',
    value:
      'это статья или иллюстрация, заверстанная в одном из углов полосы, за исключением правого верхнего. Его отделяют от другого материала линейками.',
  },
  {
    text: 'Чердак',
    value:
      'это крупный материал, подобный подвалу, но размещенный вверху полосы и заверстанный на всю ширину или на несколько колонок. Его отбивают от последующего текста жирными линейками или заключают в рамку.',
  },
  {
    text: 'Подверстка',
    value:
      'это материал, которым заполняют пустое место под статьей, тематически с ней не связанный.',
  },
  {
    text: 'Кодировка',
    value:
      'это схема нумерации, согласно которой каждому текстовому символу в наборе соответствует определенное числовое значение.',
  },
  {
    text: 'Форматирование',
    value: 'это изменение внешнего вида документа.',
  },
  {
    text: 'Редактирование',
    value: 'это изменение содержания документа.',
  },
  {
    text: 'Абзац',
    value:
      'это фрагмент текста, который заканчивается непечатаемым символом или фрагмент текста, процесс ввода которого заканчивается нажатием на клавишу ввода Enter.',
  },
  {
    text: 'Отступ',
    value: 'это пустое пространство между текстом и границами страницы.',
  },
  {
    text: 'Маркированный список',
    value: 'это список, каждый пункт которого отмечается маркером.',
  },
  {
    text: 'Нумерованный список',
    value: 'это список, в котором пункты отмечаются числами.',
  },
  {
    text: 'Многоуровневый список',
    value: 'это структура с одним или несколькими подчиненными списками.',
  },
  {
    text: 'Таблица',
    value:
      'это один или несколько рядов ячеек, обычно используемых для представления чисел других элементов в форме, упрощающей их просмотр и анализ.',
  },
  {
    text: 'Колонтитул',
    value:
      'это текст и/или рисунок, который автоматически печатается внизу или вверху каждой страницы документа.',
  },
  {
    text: 'Раздел',
    value: 'это часть документа, которой присвоены определенные параметры форматирования страницы.',
  },
  {
    text: 'Стиль',
    value: 'это именованный и сохраненный набор параметров форматирования.',
  },
  {
    text: 'Электронная таблица',
    value:
      'это программа обработки числовых данных, хранящая и обрабатывающая данные в прямоугольных таблицах.',
  },
  {
    text: 'Диалоговые окна',
    value:
      'это окна, с помощью которых программа запрашивает у пользователя дополнительные данные и настройки для выполнения операций.',
  },
  {
    text: 'Операнд',
    value: 'это числовое значение, текст, ссылка на ячейку или группы ячеек.',
  },
  {
    text: 'Оператор',
    value: 'это знак операции, которую следует выполнить над операндами формулы.',
  },
  {
    text: 'Относительные ссылки',
    value:
      'адресация, которая при копировании в составе формулы в другую ячейку автоматически изменяется.',
  },
  {
    text: 'Абсолютные ссылки',
    value: 'адресация, не подлежащая изменению при копировании формулы.',
  },
  {
    text: 'Диаграмма',
    value: 'это графическое представление числовых данных.',
  },
  {
    text: 'Функция',
    value:
      'это стандартная формула Microsoft Excel, которая возвращает результат выполнения определенных действий над значениями, выступающими как аргументы.',
  },
  {
    text: 'Аргументы',
    value:
      'это значения исходных данных для функции, используемые для выполнения операций или вычислений.',
  },
  {
    text: 'База данных',
    value:
      'это набор данных, распределенных по строкам и столбцам для удобного поиска, систематизации и редактирования.',
  },
  {
    text: 'Презентация',
    value:
      'это связная последовательность слайдов, предназначенная для доклада, сообщения или отчета.',
  },
  {
    text: 'Слайд',
    value:
      'это логически автономная информационная структура, содержащая различные объекты, которые представляются на общем экране монитора, листе бумаги в виде единой композиции.',
  },
  {
    text: 'Облачные вычисления',
    value:
      'это технология распределенной обработки данных, в которой компьютерные ресурсы и мощности предоставляются пользователю как Интернет-сервис.',
  },
  {
    text: 'Компьютерный вирус',
    value:
      'это программа, способная создавать свои копии, (не обязательно полностью совпадающие с оригиналом), внедрять их в различные объекты систем и сетей и производить определенные действия без ведома пользователя.',
  },
  {
    text: 'Угроза',
    value:
      'это человек, вещь, событие или идея, которая представляет некоторую опасность для ценностей, нуждающихся в защите.',
  },
  {
    text: 'Угроза',
    value:
      'это потенциальная возможность определенным образом нарушить информационную безопасность.',
  },
  {
    text: 'Мобильные устройства',
    value:
      'это класс портативных электронных устройств, предназначенных для индивидуального использования.',
  },
  {
    text: 'Мобильный телефон',
    value:
      'это устройства голосовой дуплексной (когда два абонента слышат и могут говорить одновременно) радиоствязи с возможностью выхода в локальную или глобальную телефонную сеть и получения персонального вызова из нее.',
  },
  {
    text: 'Смартфон',
    value:
      'это сотовый телефон, который прежде всего предназначен для голосовой связи, но в то же время имеет расширенный функционал для работы с информацией.',
  },
  {
    text: 'Коммуникатор',
    value:
      'это мобильное устройство, сочетающее в себе функции сотового телефона и наладонного компьютера.',
  },
  {
    text: 'Виртуализация',
    value:
      'это предоставление набора вычислительных ресурсов или их логического объединения, абстрагированное от аппаратной реализации, и обеспечивающее при этом логическую изоляцию друг от друга вычислительных процессов, выполняемых на одном физическом ресурсе.',
  },
  {
    text: 'Виртуализация',
    value:
      'это специальная технология, направленная на объединение ресурсов нескольких сетевых устройств, включая серверное оборудование, позволяющую ускорить работу выполняемых на ней пользовательских приложений.',
  },
  {
    text: 'Операционная система',
    value:
      'это комплекс управляющих и обрабатывающих программ, которые выступают как интерфейс между устройствами вычислительной системы и прикладными программами и предназначены для управления устройствами и вычислительными процессами, эффективного распределения вычислительных ресурсов между вычислительными процессами и организации надежных вычислений.',
  },
  {
    text: 'Файловая система',
    value:
      'это порядок, определяющий способ организации, хранения и именования данных на носителях информации.',
  },
  {
    text: 'Диск',
    value:
      'это носитель информации, который может представлять собой физическое устройство или часть пространства носителя, называемого логическим диском.',
  },
  {
    text: 'Файл',
    value:
      'это именованная область внешней памяти, в которую можно записывать и из которой можно считывать данные (информацию).',
  },
  {
    text: 'Папка',
    value:
      'это особый тип файлов, который содержит системную справочную информацию о наборе файлов, сгруппированных пользователями по какому-либо признаку.',
  },
  {
    text: 'Ярлык',
    value:
      'это файл, содержащий ссылку на объект, программу или команду, а также дополнительную информацию.',
  },
  {
    text: 'Профилактическое обслуживание',
    value:
      'это ряд мероприятий, направленных на поддержание заданного технического состояния ПК в течение определенного промежутка времени и продление её технического ресурса.',
  },
  {
    text: 'BIOS',
    value:
      'это часть системного программного обеспечения компьютера, реализованная в виде микропрограмм.',
  },
  {
    text: 'EFI',
    value:
      'это тип интерфейса между микропрограммами, оборудованием и операционной системой компьютера, который предназначен улучшить интерфейс BIOS первых поколений.',
  },
  {
    text: 'EEPROM',
    value: 'это постоянное запоминающее устройство.',
  },
  {
    text: 'POST',
    value: 'это самотестирование после включения.',
  },
  {
    text: 'Микропроцессор',
    value:
      'это основной элемент ПК и предназначен для управления работой всего ПК, а также для выполнения арифметических и логических операций.',
  },
  {
    text: 'Сетевой адаптер',
    value: 'это устройство для подключения ПК к локальной компьютерной сети.',
  },
  {
    text: 'Порты',
    value: 'это совокупность программных и аппаратных средств для подключения внешних устройств.',
  },
  {
    text: 'Слоты расширения',
    value:
      'это пустые разъемы на системной плате, куда могут вставляться дополнительные внутренние устройства.',
  },
  {
    text: 'Стример',
    value:
      'это устройство, которое применяется для операций резервного копирования и архивирования данных винчестера на магнитную ленту.',
  },
  {
    text: 'Мышь',
    value:
      'это устройство оперативной визуальной связи пользователя с управляющим устройством и отображением данных, передаваемых с клавиатуры, мыши или центрального процессора.',
  },
  {
    text: 'Монитор',
    value:
      'это устройство оперативной визуальной связи пользователя с управляющим устройством и отображением данных, передаваемых с клавиатуры, мыши или центрального процессора.',
  },
  {
    text: 'Клавиатура',
    value: 'это устройство, позволяющее пользователю вводить информацию в компьютер.',
  },
  {
    text: 'Персональный компьютер',
    value:
      'это однопользовательская ЭВМ, имеющая эксплуатационные характеристики бытового прибора и универсальные функциональные возможности.',
  },
  {
    text: 'Системный блок',
    value:
      'физически представляет собой корпус, наполненный аппаратным обеспечением для создания компьютера.',
  },
  {
    text: 'Принтер',
    value: 'это устройство вывода информации на бумажные носители.',
  },
  {
    text: 'Сканер',
    value:
      'это устройство, выполняющее считывание расположенного на плоском носителе изображения для передачи информации на расстояние или для преобразования его в цифровой формат.',
  },
];
module.exports = { vacabulary };
