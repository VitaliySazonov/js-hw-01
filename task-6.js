let input;
let total = 0;
console.log('================== TASK 6 =========================')

// Cancel -> alert 'Общая сумма чисел равна [сумма]'.
// 'Было введено не число, попробуйте еще раз'
// alert 'Общая сумма чисел равна [сумма]'

let i = 1;
input = Number(prompt("Number"));
while(i > 0) {
  if (input) {
    total += input;
    console.log(`Number. Total - ${total}`)
    input = Number(prompt("Number"))
  }
  if (!input && input !== 0) {
    console.log(`Not a number. Total - ${total}`)
    input = Number(prompt("Not a number, try again."))
  }
  if (input === 0) {
    console.log(`Canceled. Total - ${total}`);
    alert(`Общая сумма чисел равна ${total}`);
    break;
  }
  // console.log(typeof input, input)
  i++
}

