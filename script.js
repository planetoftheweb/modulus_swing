let total = 0;
let count = 0;
const $ = document
  .querySelector.bind(document);
const $$ = document
  .querySelectorAll.bind(document);

$('#moneyBtn')
  .addEventListener('click', () => {
    count++;
    if (count % 3 == 0) {
      total += 10;
    }
    $('#count').innerText = count;
    $('#total').innerText = total;
  });

