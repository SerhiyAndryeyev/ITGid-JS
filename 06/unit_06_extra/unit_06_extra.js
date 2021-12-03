//*********************EXTRA TASKS*******************

//***Задача 1

function e1() {
  let str = '';
  for (let i = 2; i < 10; i++) {
    for (let k = 2; k < 10; k++) {
      str += `${i} x ${k} = ${i * k};<br>`;
    }
    str += '<hr style="border-top: 1px dotted black">';
  }
  document.querySelector('.out-e1').innerHTML = str;
}

document.querySelector('.b-e1').onclick = e1;

//***Задача 5

function e5() {
  let str = '';
  for (let i = 0; i < 3; i++) {
    if (i <= 1) {
      for (let j = i; j <= 1; j++) {
        str += '_';
      }
    }
    for (let k = 0; k < 5; k++) {
      str += '*';
    }
    str += '<br>';
  }
  document.querySelector('.out-e5').innerHTML = str;
}

document.querySelector('.b-e5').onclick = e5;

//***Задача 6

// function e6() {
//   let str = '';
//   for (let i = 0; i < 5; i++) {
//     if (i < 3) {
//       for (let k = 0; k <= i; k++) {
//         str += '*';
//       }
//     } else {
//       for (let j = 2; j > 0; j--) {
//         str += '*';
//       }
//     }

//     str += '<br>';
//   }
//   document.querySelector('.out-e6').innerHTML = str;
// }

function e6() {
  let str = '';
  for (let i = 0; i < 3; i++) {
    for (let k = 0; k <= i; k++) {
      str += '*';
    }
    str += '<br>';
  }
  for (let i = 1; i >= 0; i--) {
    for (let k = 0; k <= i; k++) {
      str += '*';
    }
    str += '<br>';
  }

  document.querySelector('.out-e6').innerHTML = str;
}

document.querySelector('.b-e6').onclick = e6;

//***Задача 7

function e7() {
  let str = '';
  for (let i = 1; i <= 5; i++) {
    if (i == 1 || i == 5) {
      for (let j = 0; j < 6; j++) {
        str += '*';
      }
    } else {
      for (let k = 1; k <= 9; k++) {
        if (k == 1 || k == 9) {
          str += '*';
        } else {
          str += '_';
        }
      }
    }
    str += '<br>';
  }

  document.querySelector('.out-e7').innerHTML = str;
}

document.querySelector('.b-e7').onclick = e7;

//***Задача 8

// document.querySelector('.b-e8').onclick = e8;
//***Задача 9

// document.querySelector('.b-e9').onclick = e9;
//***Задача 10

// document.querySelector('.b-e10').onclick = e10;
//***Задача 11

// document.querySelector('.b-e11').onclick = e11;
//***Задача 12

// document.querySelector('.b-e12').onclick = e12;
//***Задача 13

// document.querySelector('.b-e13').onclick = e13;
//***Задача 14

// document.querySelector('.b-e14').onclick = e14;
