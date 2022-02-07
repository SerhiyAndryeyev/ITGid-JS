// Class Goods2 Task-5

class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count);
    this.sale = sale;
  }

  draw(tagClassName) {
    super.draw(tagClassName);
    document.querySelector(tagClassName).innerHTML += `</br>sale is ${this.sale}</br>`;
  }

}