// Code goes here!
//* Class definition, with uppercase
//* variables = properties
//* functions = methods
class Department {
    //* If properties are private, we need to use methods to modify their data.
    //private name: string;
    private employees: string[] = [];

    //* shorthand
    constructor(private id: string, public name: string) {
        //this.name = n;
    }

    //* Method describe (it is  function)
    //* this: Department, helps us to catch unwanted behavior, and access object from tipe Deparment
    describe(this: Department) {
        console.log(`Department(${this.id}): ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

const accounting = new Department('d1', 'Accounting');
accounting.addEmployee('David');
accounting.addEmployee('Franklin');

//accounting.employees[2] = 'Ana'
accounting.describe();
accounting.printEmployeeInformation();

//const accountingCopy = { name: 'Dummy', describe: accounting.describe}
//accountingCopy.describe();