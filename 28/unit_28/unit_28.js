// Task 1
// Создайте класс Goods. Класс должен содержать свойства name, amount. Создайте на его основе объект goods. Выведите в консоль созданный объект. Помните, все классы - в отдельных файлах. Имена классов с большой буквы.

const goods = new Goods('bullet', 10);
console.log(goods);

//Task 2.
//  Добавьте в класс Goods свойства image и count - картинка и количество на складе.

// DONE!

//Task 3.
//  Добавьте в класс Goods метод draw, который будет выводить div с изображением, названием товара, ценой - в указанный элемент (дозапись).

let tagClName = '.out-3';
let goodImgLink = 'https://garnizon.zp.ua/7291-large_default/patron-nexus-kalibr-223-rem-556-45-nexus-17340000.jpg';
const goodsTest = new Goods('bullet', 10, goodImgLink, 20);
goodsTest.draw(tagClName);
goodsTest.draw(tagClName);


// Task 4.
// Создайте на основе класса Goods объект goods2, заполните свойства, примените метод draw для вывода товара на страницу в блок out-4.

let good2ImgLink = 'https://media.istockphoto.com/photos/silver-bullet-in-flight-picture-id115552318?k=20&m=115552318&s=170667a&w=0&h=DpgcAWkmcMo3ojIByWQVSQLRwKPUSgHloWR1BV38S8o=';

let tag2ClName = '.out-4';

const goods2 = new Goods('silver bullet', 1, good2ImgLink, 1);

goods2.draw(tag2ClName);

//Task 5.
// Создайте класс Goods2, который наследуется от Goods. Добавьте ему свойство sale равное true или false. Перезапишите метод draw так, чтобы он выводил информацию о распродажах.

// DONE!

// Task 6.
// Создайте на основе класса Goods2 объект goods3. Заполните все поля. Выведите товар на страницу с помощью метода draw. Вывод осуществить в out-6.

let good3ImgLink = 'https://cdn2.vectorstock.com/i/1000x1000/53/86/vintage-monochrome-gun-bullet-template-vector-21165386.jpg';

let tag3ClName = '.out-6';

const goods3 = new Goods2('next bullet', 2, good3ImgLink, 2, true);

goods3.draw(tag3ClName);

// Task 7.
// Создайте класс Valid, который содержит свойства email, password, isValid. И метод validate. Метод validate должен проверять длину пароля и писать false в isValid если длина меньше 6 и true если больше. Изначально свойство isValid равно false.

// DONE!

//Task 8.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 5 символов. Запустите метод validate() и выведите в консоль свойство isValid.

const name8 = 'Serhiy';
const passw8 = 'qwert';
const valObj8 = new Valid(name8, passw8);
valObj8.validate();
console.log(valObj8.isValid);

//Task 9.
// Создайте объект на основе класса Valid и задайте ему имя и пароль длиной 7 символов. Запустите метод validate() и выведите в консоль свойство isValid.

const name9 = 'Serhiy';
const passw9 = 'qwerty123';
const valObj9 = new Valid(name9, passw9);
valObj9.validate();
console.log(valObj9.isValid);

 //Task 10.
 // Унаследуйтесь от класса Valid и создайте класс Valid2. Расширьте его свойствами emaiError, passwordError. По умолчанию, они равны пустой строке. Перезапишите метод validate(), помимо проверки пароля, он должен содержать еще проверку свойства email на пустоту. Если поле email пустое - то isValid - false. Также, в случае ошибки валидации в поле emailError пишется сообщение ‘email empty’, в поле passwordError - ‘min length 6’.

 //DONE!

 //Task 11.
 // Создайте на основе класса Valid2 объект valid2 и задайте пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

const email11 = '';
const passw11 = 'qwerty123';
const valid2 = new Valid2(email11, passw11);
valid2.validate();
console.log(valid2);

 //Task 12.
 // Создайте на основе класса Valid2 объект valid3 и задайте не пустой емейл и длину пароля больше 7. Запустите метод validate(). Выведите объект в консоль.

const email12 = 'serhiy@ua';
const passw12 = 'qwerty123';
const valid3 = new Valid2(email12, passw12);
valid3.validate();
console.log(valid3);