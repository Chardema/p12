class Animal {
  age = 2; // class property
  sePresenter() {
    console.log(`J'ai ${this.age} ans`);
  }
}
const chien = new Animal();
chien.sePresenter(); // J'ai 2 ans
