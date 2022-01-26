
// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

let urlPath = 'http://getpost.itgid.info/index2.php?auth=7859d9d42a8834141d529577207c9596';
let img = document.createElement('img');

function myRequest(method, params, div, callback) {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callback(this.responseText, div);
    }
  };
  xhttp.open(method, urlPath + params, true);
  xhttp.send();
}

function myFunction(data, div) {
  document.querySelector(div).innerHTML = data;
}

function createImg(data, div) {
  img.src = data;
  document.querySelector(div).append(img);
}

function t1() {
  let method = 'GET';
  let params = '&action=1';
  let div = '.out-1';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
  let method = 'GET';
  let params = '&action=2&name=Serhiy';
  let div = '.out-2';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
  let method = 'GET';
  let params = '&action=3&num1=9&num2=15';
  let div = '.out-3';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
  let method = 'GET';
  let params = '&action=4&num1=11&num2=22';
  let div = '.out-4';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
  let method = 'GET';
  let params = '&action=5';
  let div = '.out-5';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
  let method = 'GET';
  let params = '&action=6&num1=15&num2=25';
  let div = '.out-6';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

function t7() {
  let method = 'GET';
  let params = '&action=7';
  let div = '.out-7';
  myRequest(method, params, div, createImg);
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
  let method = 'GET';
  let params = '&action=8&year=1976';
  let div = '.out-8';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-8').addEventListener('click', t8);

// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
  let method = 'GET';
  let params = '&action=9&y=1';
  let div = '.out-9';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-9').addEventListener('click', t9);


// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.

*/

function t10() {
  let method = 'POST';
  let params = '&action=1';
  let div = '.out-10';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-10').addEventListener('click', t10);

// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
  let method = 'POST';
  let params = '&action=2&name=Serhiy';
  let div = '.out-11';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-11').addEventListener('click', t11);

// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
  let method = 'POST';
  let params = '&action=3&num1=7&num2=17';
  let div = '.out-12';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-12').addEventListener('click', t12);

// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
  let method = 'POST';
  let params = '&action=4&num1=7&num2=17';
  let div = '.out-13';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-13').addEventListener('click', t13);

// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
  let method = 'POST';
  let params = '&action=5';
  let div = '.out-14';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
  let method = 'POST';
  let params = '&action=6&num1=10&num2=20';
  let div = '.out-15';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-15').addEventListener('click', t15);

// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
  let method = 'POST';
  let params = '&action=7';
  let div = '.out-16';
  myRequest(method, params, div, createImg);
}

document.querySelector('.b-16').addEventListener('click', t16);

// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
  let method = 'POST';
  let params = '&action=8&year=1976';
  let div = '.out-17';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-17').addEventListener('click', t17);

// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
  let method = 'POST';
  let params = '&action=9&y=1';
  let div = '.out-18';
  myRequest(method, params, div, myFunction);
}

document.querySelector('.b-18').addEventListener('click', t18);

