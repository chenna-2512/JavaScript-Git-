// Prototypes- A Java Script object is an entity having state and behaviour(properties and methods)
        //   - JS Property have a special property called prototype
        //   - We can set prototype using __proto__
        //   Note : if prototype and object have same method, object method will be used 

const student = {
    fullNam : "Ramu",
    cgpa : 8.5,
    finalmarks : function() {
        console.log("marks : ",this.cgpa);
    }
};
console.log(student);
console.log(student.finalmarks());
console.log(student.finalmarks);
console.log(student.toString);


const employee = {
    calTax() {
        console.log("tax rate is 10%");
    },
};

const karanArjun = {
    salary : 50000,
    calTax(){
        console.log("taxrate is 20%");
    },
};

// const karanArjun2 = {
//     salary : 50000
// };



console.log(karanArjun);

karanArjun.__proto__=employee;
// karanArjun2.__proto__=employee;
console.log(karanArjun);
console.log(karanArjun.calTax());
console.log(karanArjun.calTax);



// Classes in Java Script - class is a program code template for creating objects
class Suzikicar {
    constructor(brand,milage){
        console.log("Every thing checked");
        this.brand = brand;
        this.milage = milage;
    }
    // constructor(brand){
    //     this.brand = brand;
    // }
    start(){
        console.log("car starts");
    }
    
    stop(){
        console.log("car stops");  
    }

    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

console.log(Suzikicar);
console.log(typeof Suzikicar);

let Ertiga = new Suzikicar("Ertiga", 16);
console.log(Ertiga);
console.log(typeof Ertiga);
console.log(Ertiga.start());
console.log(Ertiga.stop());

// Ertiga.setBrand("Ertiga");
console.log(Ertiga);

let Baleno = new Suzikicar("Baleno", 20);
console.log(Baleno);
console.log(Baleno.start());


// Constructer() - automatically invoked by new  -} special method                  -------Refer to line 50
//               - intializes object - when u create a new object the constructor automatically execute
//               - a class can have only one constructor
//               - if u dont pass the brand name in the object then there will be no error

let swift = new Suzikicar();
console.log(swift);

swift.brand = "swift";
console.log(swift);


// Inheritance in Java Script - passing the properties & methods of parent class to child class 

class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{};

let obj = new Child();
console.log(obj);
console.log(obj.hello());
// console.log(obj.abc());


class Person {
    constructor(name){
        console.log("home species")
        this.drink = "water";
        this.name = name;
    }
    eat(){
        console.log("eat");
    }
    // sleep(){
    //     console.log("sleep");
    // }
    // work(){
    //     console.log("do nothing");
    // }
}
//Note - if child and parent class have same functions then child class function will be invoked or executed[Method Overriding] 


class Engineer extends Person{
    constructor(branch,name){
        super(name); //to invoke parent class constructor
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Listen videos, solve problems");
    }
}

// class Doctor extends Person{
//     work(){
//         console.log("treat patients");
//     }
// }

// let siva = new Doctor();
// console.log(siva);

let Ajay = new Engineer("Computer Engineer","Ajay");
console.log(Ajay);
console.log(Ajay.work);
console.log(Ajay.work());


// Super Keyword - refer to above code line starting from 116


// practce qn1

let data = "secret info";

class User{
    constructor(name,email){
        this.name = name;
        this.email = email;
    }

    viedata(){
        console.log("data = ",data);
    }
};

class Admin extends User{
    constructor(name,email){
        super(name,email);
    }
    editData(){
        data = "some new value";
    }
}

let student1 = new User("ajay","ajay@gmail.com");
let student2 = new User("battu","battu@gmail.com");
let student3 = new User("ram","ram@gmail.com");

console.log(student1);
console.log(student2);
console.log(student3);


let admin = new Admin("admin","admin@gmail.com");

console.log(admin);