import chalk from 'chalk';
class Customer {
    _firstName;
    _lastName;
    _age;
    _gender;
    _phoneNumber;
    _bankAccount;
    constructor() {
        this._firstName = '';
        this._lastName = '';
        this._age = 0;
        this._gender = '';
        this._phoneNumber = '';
        this._bankAccount = '';
    }
    ;
    set setFirstName(name) {
        this._firstName = name;
    }
    ;
    set setLastName(lname) {
        this._lastName = lname;
    }
    ;
    set setAge(age) {
        this._age = age;
    }
    ;
    set setGender(gender) {
        this._gender = gender;
    }
    ;
    set setPhoneNumber(phNumber) {
        this._phoneNumber = phNumber;
    }
    ;
    set accountNumber(accountNo) {
        this._bankAccount = accountNo;
    }
    ;
    get getBankAccount() {
        return this._bankAccount;
    }
    customerInfo() {
        return `
        ${chalk.bold.bgBlueBright.white(">>>>>>>>>>>>>> User Details <<<<<<<<<<<<<<")}

                Name:${chalk.green(this._firstName)}
                LastName:${chalk.green(this._lastName)}
                Age:${chalk.green(this._age)}
                Gender:${chalk.green(this._gender)}
                Ph:${chalk.green(this._phoneNumber)}
                
        `;
    }
    ;
}
;
export default Customer;
