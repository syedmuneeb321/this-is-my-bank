export default class BankAccount{
    accountBalance:number;
    constructor(){
        this.accountBalance=100;
    };

    debit(amount:number):string{
        let statement='Sorry, you have insufficient balance';
        if(amount>0){
            statement='The amount you enter is wrong!';
            if(amount<this.accountBalance){
                this.accountBalance=this.accountBalance-amount;
                statement=`Transaction sucessfull! new Account balance is:${this.accountBalance}$`;
            }else{
                statement= `You don't have enough money to do this transaction`
            };

        };
        return statement;

    };

    credit(amount:number){
        let statement="Transaction failed!";
        if(amount>0){
            this.accountBalance=this.accountBalance+amount;
            if(amount>=100){
                this.accountBalance=this.accountBalance-1;
            };
            statement=`Your account has been credit successfully! new balance is ${this.accountBalance}$`
        }
        return statement;

    };
};


