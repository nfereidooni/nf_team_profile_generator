const Employee = require( './Employee' )

class Engineer extends Employee {
    constructor( name, id, email, github ){
        // pass on constructor to the class we are extending
        super( name, id, email, 'Engineer' )
        this.github = github
    }
    getGithub(){
        return this.github
    }
}

module.exports = Engineer