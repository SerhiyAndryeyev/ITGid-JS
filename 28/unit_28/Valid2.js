// Class Valid2 Task-10

class Valid2 extends Valid {
  constructor(email, password, emailError = '', passwordError = '') {
    super(email, password);
    this.emailError = emailError;
    this.passwordError = passwordError;
  }
  validate() {
    // if (this.password.length > 6) this.isValid = true;
    // console.log(this.password.length);
    // console.log(this.isValid);
    super.validate();
    if (this.email.length === 0) this.isValid = false;
    if (this.isValid === false) {
      this.emailError = 'email empty';
      this.passwordError = 'min length 6';
    }
  }

}