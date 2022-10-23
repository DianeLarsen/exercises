
var employees = [];





function Employee (name, title, salary, status) {
    // use the "this" keyword to reference each object
    // that is created from this constructor
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status || "Full Time";
    
}

// then we "instantiate" (create a new object from) our constructor with the "new" keyword and pass in the parameters:

var newEmployee = new Employee("Jim", "Secretary", "20k");
var jack = new Employee ("Jack", "Electrician", "$100,000");
var jill = new Employee ("Jill", "Plumer", "$100,000", "Contract");
var sam = new Employee ("Sam", "Contractor", "$100,000", "Part Time");
Employee.prototype.printEmployeeForm = function () {
    console.log(this.name + " is a " + this.title + " getting paid a salary of "+ this.salary +" and working " +  this.status +".");
};
employees.push(jack,jill,sam);
//console.log(employees)
for (let i = 0; i < employees.length; i++) {
    employees[i].printEmployeeForm();
}


