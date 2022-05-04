let employee1 = {
  name: "Hannah",
  position: "Project Manager",
  salary: 1000,
};

function promote(newPosition, salaryRise) {
  this.position = newPosition;
  this.salary += salaryRise;

  return `${this.name} is ${this.position} and earns ${this.salary}`;
}

// If we want to promote Hannah

let promoteHannah = promote.bind(employee1);
console.log(promoteHannah("Department Head", 500)); // Hannah is Department Head and earns 1500

let promoteHannahToDepartmentHead = promote.bind(employee1, "Department Head");
promoteHannahToDepartmentHead(500)