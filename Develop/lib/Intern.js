const Employee = require( './Employee' )

class Intern extends Employee {
    constructor( name, id, email, school ){
        // pass on constructor to the class we are extending
        super( name, id, email, 'Intern' )
        this.school = school
    }
    getSchool(){
        return this.school
    }
}

module.exports = Intern