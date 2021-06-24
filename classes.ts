interface UserInterface {
  name: string;
  email: string;
  age: number;
  register():void;
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;
  // private age: number; // can be public, private or protected

  constructor(name:string, email:string, age:number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log(`User created: ${this.name}`)
  }

  register():void {
    console.log(`${this.name} is now registered`);
  }
}


class Member extends User {
  id: number;

  constructor(id:number, name:string, email:string, age:number) {
    super(name, email, age);
    this.id = id;
  }

  commission() {
    console.log(`${this.name} is commissioned`);
  }
}


const john = new Member(10156, 'John Doe', 'johndoe@gmail.com', 43);
console.log(john.email);
john.register();
john.commission();

// console.log(john.age); // does not work when age is private

