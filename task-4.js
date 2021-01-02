let credits = 35500;
let pricePerDroid = 300;
let droidAmount = prompt('Количество дроидов');
let totalPrice = droidAmount * pricePerDroid;

console.log('================== TASK 4 =========================')

// 'Количество дроидов'
// 'Недостаточно средств на счету!'
// 'Отменено пользователем!'
// 'Вы купили [число] дроидов, на счету осталось [число] кредитов.'

if (!droidAmount) {
  console.log('Отменено пользователем!')
} else if (totalPrice <= credits) {
  credits -= totalPrice;
  console.log(`Вы купили ${droidAmount} дроидов, на счету осталось ${credits} кредитов.`)
} else {
  console.log('Недостаточно средств на счету!')
}
