import chalk from 'chalk'
class Customer{
    private _firstName:string;
    private _lastName:string;
    private _age:number;
    private _gender:string;
    private _phoneNumber:string;
    private _bankAccount:string;
    constructor(){
        this._firstName='';
        this._lastName='';
        this._age=0;
        this._gender='';
        this._phoneNumber='';
        this._bankAccount='';

    };

    set setFirstName(name:string){
        this._firstName=name;
    };
    set setLastName(lname:string){
        this._lastName=lname;
    };
    set setAge(age:number){
        this._age=age;
    };
    set setGender(gender:string){
        this._gender=gender;
    };
    set setPhoneNumber(phNumber:string){
        this._phoneNumber=phNumber;
    };
    set accountNumber(accountNo:string){
        this._bankAccount=accountNo;
    };
    get getBankAccount():string{
        return this._bankAccount;
    }
    
    customerInfo():string{
        return `
        ${chalk.bold.bgBlueBright.white(">>>>>>>>>>>>>> User Details <<<<<<<<<<<<<<")}

                Name:${chalk.green(this._firstName)}
                LastName:${chalk.green(this._lastName)}
                Age:${chalk.green(this._age)}
                Gender:${chalk.green(this._gender)}
                Ph:${chalk.green(this._phoneNumber)}
                
        `
    };


};
export default Customer;

