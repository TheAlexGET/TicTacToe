class User {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  
    static createGuest() {
      return new User("Гость", "Сайта");
    }
  };
  
  let user = new User('Alex', 'Sucevan');
  
  console.log( user.firstName ); // Гость