class Person {
    constructor(firstName, lastName, age, gender, email, phoneNumber) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}


const person1 = new Person("John", "Doe", 30, "Male", "john.doe@example.com", "123-456-7890");

console.log("Full Name:", person1.getFullName());
console.log("Age:", person1.age);
console.log("Gender:", person1.gender);
console.log("Email:", person1.email);
console.log("Phone Number:", person1.phoneNumber);
