const Employee = require( './Employee' )

class Manager extends Employee {
    constructor( name, id, email, office ){
        // pass on constructor to the class we are extending
        super( name, id, email, "Manager" )
        this.officeNumber = office
    }
    getOfficeNumber(){
        return this.officeNumber
    }
}

module.exports = Manager