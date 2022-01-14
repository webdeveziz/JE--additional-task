// Дополнительные задания к уроку 6 "Введение в основы JavaScript" - Задание #3

const password = prompt('Введите пароль')
let temp = false

if (password.length < 3 || password.length > 20) {
  alert(
    'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
  )
} else {
  for (let i = 0; i < password.length; i++) {
    for (let j = 65; j <= 90; j++) {
      if (password.charCodeAt(i) === j) {
        temp = true
        break
      }
    }
    if (temp) break
  }
  if (temp) {
    temp = false
    for (let i = 48; i <= 57; i++) {
      for (let j = 0; j < password.length; j++) {
        if (password.charCodeAt(j) === i) {
          temp = true
          break
        }
      }
      if (temp) break
    }
  }

  if (temp) {
    alert('Пароль валидный. Добро пожаловать в аккаунт!')
  } else {
    alert(
      'Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.'
    )
  }
}

// Вариант 2
// if (password.length <= 3 || password.length >= 20) {
//   alert('goodbay')
// } else {
//   for (let i = 0; i < password.length; i++) {
//     if (password[i] === password[i].toUpperCase()) {
//       console.log(password[i])
//       break
//     }
//   }
//   for (let i = 48; i <= 57; i++) {
//     for (let j = 0; j < password.length; j++) {
//       if (password.charCodeAt(j) === i) {
//         console.log(password[j])
//         break
//       }
//     }
//   }
// }
