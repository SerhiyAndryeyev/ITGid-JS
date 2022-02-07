// Class Goods Task-1

class Goods {
  constructor(name, amount, image, count) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }

  draw(tagClassName) {
    let img = document.createElement('img');
    img.src = this.image;
    document.querySelector(tagClassName).before(img);
    document.querySelector(tagClassName).innerHTML += `</br>name is ${this.name},</br>amount is ${this.amount}`;
  }

}