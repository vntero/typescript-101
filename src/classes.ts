class Department {
    // private readonly id: string
    // private name: string
    private employees: string[] = []

    

    constructor(private readonly id: string, public name: string) {
        // this.id = id
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

const accounting = new Department('d1','Accounting')
accounting.addEmployee('Yuna')
accounting.addEmployee('Eurico')
// THIS SHOWS AN ERROR NOW BECAUSE employee is set with a PRIVATE MODIFIER
// accounting.employees[2] = 'Nika'
accounting.addEmployee('Domingos')
console.log(accounting)
accounting.describe()
accounting.printEmployeeInformation()

class ITDepartment extends Department {
    admins: string[]
    constructor(id: string, admins: string[]) {
        super(id, 'Information Technologies')
        this.admins = admins
    }
}

const IT = new ITDepartment('d2', ['Naruto'])
console.log(IT)

class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting and Finance')
    }

    addReport(text: string) {
        this.reports.push(text)
    }

    printReports() {
        console.log(this.reports)
    }
}

const accountingAndFinance = new AccountingDepartment('d2', [])

accountingAndFinance.addReport('Something went wrong...')
accountingAndFinance.printReports()
