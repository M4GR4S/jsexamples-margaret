// a) Create a person object
const person = { name: "John"} 
console.log(person);

// b) In JavaScript, constructor functions CAN be used to create objects
// Note: only 2 properties are available in the constructor function. 
function Person(fName, lName, age, DOB) { 
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.DOB = DOB
}

const person1 = new Person("John","Doe"); 
const person2 = new Person("Steve", "Smith");
const person3 = new Person("Sally", "Wong");

console.log(person1); 
console.log(person2);

// c) Add a new PROPERTY gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits gender property from it constructor ftn too.

Person.prototype.gender = "Male";
console.log(person1.gender); 
console.log(person2.gender);

person3.gender = "Female";
person3.age = 33;

console.log(person3);

// d) Add a new METHOD gender to the Person constructor function.
// Note: Now, person1 and person2 objects inherits getFullName method from its constructor ftn too.

Person.prototype.getFullName = function(){ 
    return this.firstName +" "+ this.lastName;
};

console.log("Greetings " + person1.getFullName()); 
console.log("Greetings " + person2.getFullName());

// e) Challenge
// 1) Create a new property called DOB for the Person object.
// 2) Create a new method called PrintNameAndDOB() to display a person's Name and Date of Birth.
Person.prototype.DOB = new Date();
person3.DOB = new Date("04-19-2000");

Person.prototype.PrintNameAndDOB = function(){
    return "Name: "+ this.getFullName() + " DOB: " + this.DOB.toDateString();
}

console.log(person3.PrintNameAndDOB());