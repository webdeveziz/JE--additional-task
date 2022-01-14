// Дополнительные задания к уроку 6 "Введение в основы JavaScript" - Задание #1

const clientName = 'Игорь'
let clientSpentForAllTime = 110
let discount = 0

let clientSpentToday = 25
let todayTemp = clientSpentToday // для удобства))

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
