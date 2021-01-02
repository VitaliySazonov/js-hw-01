const ADMIN_PASSWORD = 'adminpass';
let message;

console.log('================== TASK 3 ============================')
// 'Отменено пользователем!' в message

let qustion = prompt('Password');
if (qustion === ADMIN_PASSWORD) {
  message = 'Добро пожаловать!';
} else if (!qustion) {
  message = 'Отменено пользователем!';
} else {
  message = 'Доступ запрещен, неверный пароль!';
}
alert(message);