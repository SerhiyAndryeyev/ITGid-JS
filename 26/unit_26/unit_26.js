
// Task 1 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. 7859d9d42a8834141d529577207c9596 */

const link = 'http://getpost.itgid.info/index2.php';
const auth = '?auth=7859d9d42a8834141d529577207c9596&';
const authPost = 'auth=7859d9d42a8834141d529577207c9596&';

function t1() {
  let params = 'action=1';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-1').textContent = data;
    });
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */

function t2() {
  let params = 'action=2&name=Serhiy';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-2').textContent = data;
    });
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

function t3() {
  let params = 'action=3&num1=5&num2=9';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-3').textContent = data;
    });
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

function t4() {
  let params = 'action=4&num1=5&num2=9';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-4').textContent = data;
    });
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. Запускаться функция должна по нажатию b-5. */

function t5() {
  let params = 'action=5';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-5').textContent = data;
    });
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */

function t6() {
  let params = 'action=6&num1=5&num2=9';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-6').textContent = data;
    });
}

document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*  Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */

let img = document.createElement('img');

function t7() {
  let params = 'action=7';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      img.src = data;
      document.querySelector('.out-7').append(img);
    });
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

function t8() {
  let params = 'action=8&year=1976';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-8').textContent = data;
    });
}

document.querySelector('.b-8').addEventListener('click', t8);

// Task 9 ============================================
/* Отправьте GET запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

function t9() {
  let params = 'action=9&y=1';
  let linkNew = link + auth + params;
  fetch(linkNew)
    .then(data => data.text())
    .then(data => {
      document.querySelector('.out-9').textContent = data;
    });
}

document.querySelector('.b-9').addEventListener('click', t9);

// Task 10 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.
*/

function t10() {
  let params = authPost + 'action=1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-10').textContent = response;
    });
}

document.querySelector('.b-10').addEventListener('click', t10);

// Task 11 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */

function t11() {
  let params = authPost + 'action=2&name=Serhiy';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-11').textContent = response;
    });
}

document.querySelector('.b-11').addEventListener('click', t11);

// Task 12 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/

function t12() {
  let params = authPost + 'action=3&num1=99&num2=1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-12').textContent = response;
    });
}

document.querySelector('.b-12').addEventListener('click', t12);

// Task 13 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/

function t13() {
  let params = authPost + 'action=4&num1=99&num2=1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-13').textContent = response;
    });
}

document.querySelector('.b-13').addEventListener('click', t13);

// Task 14 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/

function t14() {
  let params = authPost + 'action=5';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-14').textContent = response;
    });
}

document.querySelector('.b-14').addEventListener('click', t14);

// Task 15============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. Запускаться функция должна по нажатию b-15. */

function t15() {
  let params = authPost + 'action=6&num1=99&num2=1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-15').textContent = response;
    });
}

document.querySelector('.b-15').addEventListener('click', t15);

// Task 16 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */

function t16() {
  let params = authPost + 'action=7';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      img.src = response;
      document.querySelector('.out-16').append(img);
    });
}

document.querySelector('.b-16').addEventListener('click', t16);

// Task 17 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */

function t17() {
  let params = authPost + 'action=8&year=1976';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-17').textContent = response;
    });
}

document.querySelector('.b-17').addEventListener('click', t17);

// Task 18 ============================================
/*  Отправьте POST запрос (fetch) на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться функция должна по нажатию b-18. */

function t18() {
  let params = authPost + 'action=9&y=1';
  fetch(link, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: params,
  })
    .then(response => response.text())
    .then(response => {
      document.querySelector('.out-18').textContent = response;
    });
}

document.querySelector('.b-18').addEventListener('click', t18);
