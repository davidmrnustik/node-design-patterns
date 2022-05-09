class Employee {
    constructor(name, money, employer) {
        this.name = name;
        this.money = money;
        this.employer = employer;
    }

    payDay(money) {
        this.money += money;
    }
}

module.exports = Employee;