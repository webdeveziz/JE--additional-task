// Дополнительные задания к уроку 6 "Введение в основы JavaScript" - Задание #2

let discount = 0
let clientName = prompt('Введите имя клиента')
let clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim())
let clientSpentForAllTime = Number(
  prompt('Сколько клиент потратил за все время?').trim()
)
let todayTemp = clientSpentToday

// while (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
//   alert(
//     'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.'
//   )
//   clientSpentToday = Number(prompt('Сколько клиент потратил сегодня?').trim())
//   clientSpentForAllTime = Number(
//     prompt('Сколько клиент потратил за все время?').trim()
//   )
// }

if (isNaN(clientSpentToday) || isNaN(clientSpentForAllTime)) {
  alert(
    'Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку.'
  )
} else {
  if (clientSpentForAllTime >= 100 && clientSpentForAllTime < 300) {
    discount = 10
  } else if (clientSpentForAllTime >= 300 && clientSpentForAllTime < 500) {
    discount = 20
  } else if (clientSpentForAllTime >= 500) {
    discount = 30
  }

  alert(
    `Здравствуйте, ${clientName}. Рад Вас снова видеть в нашем ресторане.
  Учитывая ваши визиты, сегодня Вам предоставляется скидка в ${discount}%!
  ------------------------------------------------------------------`
  )

  clientSpentToday -= (clientSpentToday * discount) / 100
  clientSpentForAllTime += clientSpentToday

  alert(
    `Ваша сумма к оплате ${todayTemp}$, а со скидкой сумма будет ${clientSpentToday}$.
  ----------------------------------------------------------------------
  Спасибо, ${clientName}!
  За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.
  ------------
  Ждем Вас снова)`
  )
}
