
// Task 1 ============================================
/*
 <p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два запроса объедините с помощью promiseAll. Результат выведите в out-1 результат. Запускаться функция
    должна по нажатию b-1.</p>
*/

const link = 'http://getpost.itgid.info/index2.php';
const auth = '?auth=7859d9d42a8834141d529577207c9596&';
const authPost = 'auth=7859d9d42a8834141d529577207c9596&';

function t1() {
  const params1 = 'action=1';
  const params2 = 'action=2&name=Serhiy';
  const link1 = link + auth + params1;
  const link2 = link + auth + params2;

  let a = new Promise((resolve, reject) => {
    fetch(link1).then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link2).then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-1').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-1').addEventListener('click', t1);

// Task 2 ============================================
/*
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел.</p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
заданном
диапазоне.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. </p>

*/

function t2() {
  const params1 = 'action=3&num1=3&num2=8';
  const params2 = 'action=4&num1=3&num2=8';
  const link1 = link + auth + params1;
  const link2 = link + auth + params2;

  let a = new Promise((resolve, reject) => {
    fetch(link1).then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link2).then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-2').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-2').addEventListener('click', t2);

// Task 3 ============================================
/*
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте
параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два
запроса объедините с помощью promiseAll.
Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. </p>
                 */

function t3() {
  const params1 = 'action=5';
  const params2 = 'action=6&num1=3&num2=8';
  const link1 = link + auth + params1;
  const link2 = link + auth + params2;

  let a = new Promise((resolve, reject) => {
    fetch(link1).then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link2).then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-3').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-3').addEventListener('click', t3);

// Task 4 ============================================
/*
 <p> Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все
сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в
чате). </p>
<p>Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Выведите в out-4 результат. Запускаться функция должна по нажатию b-4.</p>

*/


function t4() {
  const params1 = 'action=7';
  const params2 = 'action=8&year=1976';
  const link1 = link + auth + params1;
  const link2 = link + auth + params2;

  let a = new Promise((resolve, reject) => {
    fetch(link1).then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link2).then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    const img = document.createElement('img');
    const br = document.createElement('br');
    img.src = resp[0];
    document.querySelector('.out-4').append(img);
    img.after(br);
    br.after(resp[1]);
  });
}

document.querySelector('.b-4').addEventListener('click', t4);

// Task 5 ============================================
/*
 <p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1.</p>
<p>Отправьте
POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. </p>
<p>Два
запроса объедините с помощью promiseAll. Результат выведите в out-5 результат. Запускаться функция
должна по нажатию b-5.</p>
*/

function t5() {
  const params1 = authPost + 'action=1';
  const params2 = authPost + 'action=2&name=Serhiy';

  let a = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params1,
    })
      .then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params2,
    })
      .then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-5').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-5').addEventListener('click', t5);

// Task 6 ============================================
/*
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3.
    Добавьте
    параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. </p>
<p>Отправьте POST
    запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4.
    Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в
    заданном
    диапазоне.</p>
<p> Два запроса объедините с помощью promiseAll.
    Выведите в
    out-6 результат. Запускаться функция должна по нажатию b-6. </p>
*/

function t6() {
  const params1 = authPost + 'action=3&num1=10&num2=50';
  const params2 = authPost + 'action=4&&num1=10&num2=50';

  let a = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params1,
    })
      .then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params2,
    })
      .then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-6').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-6').addEventListener('click', t6);

// Task 7 ============================================
/*
 <p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5.
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6.
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число.</p>
<p>Два запроса объедините с помощью promiseAll.
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. </p>

*/

function t7() {
  const params1 = authPost + 'action=5';
  const params2 = authPost + 'action=6&num1=10&num2=50';

  let a = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params1,
    })
      .then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params2,
    })
      .then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    document.querySelector('.out-7').innerHTML = resp[0] + ',</br>' + resp[1];
  });
}

document.querySelector('.b-7').addEventListener('click', t7);

// Task 8 ============================================
/*
<p> Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7.
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth
(ключ в
чате).</p>
<p>Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В
качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет
ваш возраст.</p>
<p>Два запроса объедините с помощью promiseAll. Выведите в out-8 результат. Запускаться функция должна по
нажатию b-8.</p>
*/

function t8() {
  const params1 = authPost + 'action=7';
  const params2 = authPost + 'action=8&year=1976';

  let a = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params1,
    })
      .then(resp => resolve(resp.text()));
  });

  let b = new Promise((resolve, reject) => {
    fetch(link, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params2,
    })
      .then(resp => resolve(resp.text()));
  });

  Promise.all([a, b]).then(resp => {
    let img = document.createElement('img');
    let br = document.createElement('br');
    img.src = resp[0];
    document.querySelector('.out-8').append(img);
    document.querySelector('.out-8').append(br);
    document.querySelector('.out-8').append(resp[1]);
  });
}

document.querySelector('.b-8').addEventListener('click', t8);

