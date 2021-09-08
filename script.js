let total = 0;
let count = 0;

document.querySelector('#moneyBtn')
  .addEventListener('click', () => {
    count++;
    if (count % 3 == 0) {
      total += 10;
    }
    document.querySelector('#count').innerText = count;
    document.querySelector('#total').innerText = total;
  });

