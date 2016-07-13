
interface Person {
    firstName: string;
    lastName: string;
}

let user : Person = {firstName: "Marcus", lastName:"User"};

function greetPerson (person:Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}


console.log (greetPerson(user));