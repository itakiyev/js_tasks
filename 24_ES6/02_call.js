let employee1 = {
    name: 'Hannah',
    position: 'Project Manager',
    salary: 1000
}

let employee2 = {
    name: 'Bill',
    position: 'Junior Developer',
    salary: 800
}

function promote(newPosition, salaryRise) {
    this.position = newPosition;
    this.salary += salaryRise;

    return `${this.name} is ${this.position} and earns ${this.salary}`
}

// If we want to promote Hannah

console.log(promote.call(employee1, "Department Head", 500)); // Hannah is Department Head and earns 1500
console.log(promote.call(employee2, "Middle Developer", 300)); // Bill is Middle Developer and earns 1100