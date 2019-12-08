const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name,id,email,officeNumber){
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return 'Manager';
    }

    getOfficeNumber(){
        return this.officeNumber
    }

    getName(){
        return this.name;
    }

    getID(){
        return this.id;
    }

    getEmail(){
        return this.email
    }

}

module.exports = Manager