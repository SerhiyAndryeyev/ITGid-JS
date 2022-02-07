// Class Valid Task-7

class Valid {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    this.isValid = false;
  }
  validate() {
    if (this.password.length > 6) this.isValid = true;
    console.log(this.password.length);
    console.log(this.isValid);
  }

}