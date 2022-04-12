class Department {
    // private readonly name: string
    private employees: string[] = []

    //

    constructor(private readonly id: string, public name: string) {
        // this.name = n
    }

    describe(this: Department) {
        console.log('Department: ' + this.id + ' ' + this.name)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length)
        console.log(this.employees)
    }
}

const accounting = new Department('Accounting')
accounting.addEmployee('Yuna')
accounting.addEmployee('Eurico')
// THIS SHOWS AN ERROR NOW BECAUSE employee is set with a PRIVATE MODIFIER
// accounting.employees[2] = 'Nika'
accounting.addEmployee('Domingos')
console.log(accounting)
accounting.describe()
accounting.printEmployeeInformation()

// const accountingCopy = { name: 'Sasuke', describe: accounting.describe }
// accountingCopy.describe()
