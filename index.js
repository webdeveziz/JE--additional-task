// Задание #1  Дополнительное задание к уроку 5 "Работа со строками"

const javaScriptDescription =
  'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'

const lenth = javaScriptDescription.length

// 1. Обрежьте строку наполовину...
// 2. В обрезанной строке необходимо заменить все строчные буквы “а” на прописные “А”
// 3.Удалите все пробелы в строке
// 4. Продублируйте итоговую строку 3 раза
const text = javaScriptDescription
  .slice(0, Math.floor(lenth / 2))
  .replaceAll('а', 'А')
  .trim()
  .repeat(3)

// 5. В конечной строке выведите символ, который находится посередине
const symbolInTheMiddle = javaScriptDescription[Math.floor(lenth / 2)]
console.log(`Символ, кот. находится посередине строки - ${symbolInTheMiddle}`)

// 6. Выведите конечную строку в консоль
console.log(`Конечная строка - ${text}`)
