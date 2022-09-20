// Code goes here!
//* Class definition, with uppercase
//* variables = properties
//* functions = methods
abstract class Department {
    static fiscalYear = 2022;
    //* If properties are private, we need to use methods to modify their data.
    //private name: string;
    protected employees: string[] = [];

    //* shorthand
    constructor(protected readonly id: string, public name: string) {
        //this.name = n;
    }

    static createEmployee(name: string) {
        return {name: name}
    }

    //* Method describe (it is  function)
    //* this: Department, helps us to catch unwanted behavior, and access object from tipe Deparment
    abstract describe(this: Department): void

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

//* inheritance
class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        //* super calls the constructor of the first class into this second class
        super(id, 'IT');
        //* We can use this after super only.
        this.admins = admins
    }
    describe() {
        console.log('IT department...')
    }
}

class AccountingDepartment extends Department {
    //private lastReport: string;

    /*get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }*/

    /*set mostRecentReport(value: string) {
        if (!value) {
            throw new Error ('Please pass in a valid value!');
        }
        this.addReport(value);
    }*/

    constructor(id: string, private reports: string[]) {
        super(id, 'Account');
        //this.lastReport = reports[0]
    }
    describe() {
        console.log('Accounting Department - ID: ' + this.id)
        
    }
    addReport(text: string) {
        this.reports.push(text);
        //this.lastReport = text;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(name: string) {
        if(name === 'David') {
            return
        }
        this.employees.push(name)
    }
}

const employee1 = Department.createEmployee('Maria')
console.log(employee1, Department.fiscalYear)



const it = new ITDepartment('t1', ['David']);
it.describe();

const accountingDep = new AccountingDepartment('z1', ['']);
//console.log(accountingDep.mostRecentReport)
//accountingDep.mostRecentReport = '';
accountingDep.addReport('Something went wrong!');
accountingDep.printReports();
accountingDep.addEmployee('David');
accountingDep.addEmployee('Madara')
accountingDep.printEmployeeInformation();


//const accounting = new Department('d1', 'Accounting');
//accounting.addEmployee('David');
//accounting.addEmployee('Franklin');

//accounting.employees[2] = 'Ana'
//accounting.describe();
//accounting.printEmployeeInformation();
accountingDep.describe();

//const accountingCopy = { name: 'Dummy', describe: accounting.describe}
//accountingCopy.describe();