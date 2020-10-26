const Employee = require( './Employee' )

class Manager extends Employee {
    constructor( name, id, email, office ){
        // pass on constructor to the class we are extending
        super( name, id, email, 'Manager' )
        this.office = office
    }
    getOfficeNumber(){
        return this.office
    }
}

module.exports = Manager