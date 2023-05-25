#!/usr/bin/env node
import inquirer from "inquirer";
import chalkAnimation from 'chalk-animation';
import chalk from 'chalk';
import Customer from "./customer.js";
import BankAccount from "./bankaccount.js";
const sleep = () => new Promise((resolve) => setTimeout((resolve), 2000));
const wellComeScreen = async () => {
    let title = chalkAnimation.rainbow(`
    =======================================================================
    >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> MY BANK <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
    =======================================================================
    `);
    await sleep();
    title.stop();
};

await wellComeScreen();

async function main() {

    const options = await inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "select options:",
            choices: ["Create Account", "Exit"],
        },
    ]);

    if (options.option === "Exit") {
        console.log(chalk.redBright('Good Luck'));
    } else if (options.option === "Create Account") {

        const userInfo = await inquirer.prompt([
            {
                type: "input",
                name: "userFName",
                message: "enter your First Name:",
                validate:(value)=>{
                    if(isNaN(value)){
                        return true;
                    }else{
                        return 'please enter a alphabetic Name:'
                    }
                }
            },
            {
                type: "input",
                name: "userLName",
                message: "enter your Last Name:",
                validate:(value)=>{
                    if(isNaN(value)){
                        return true;
                    }else{
                        return 'please enter a alphabetic Name:'
                    }
                },
            },
            {
                type: "number",
                name: "userAge",
                message: "enter your Age:",
                validate:(value)=>{
                    if(isNaN(value)){
                        return 'please enter a Age:'
                    }else{
                        return true;
                    }
                },
            },
            {
                type: "list",
                name: "userGender",
                message: "select Gender:",
                choices: ["Male", "Female"],
            },
            {
                type: "input",
                name: "userPh",
                message: "enter your 11 digit Ph-number:",

            },
        ]);
        const { userFName, userLName, userAge, userGender, userPh } = userInfo;
        const customer1 = new Customer();
        customer1.setFirstName = userFName;
        customer1.setLastName = userLName;
        customer1.setAge = userAge;
        customer1.setGender = userGender;
        customer1.setPhoneNumber = userPh;
        customer1.accountNumber = `Pk3253323234`;
        console.log(chalk.blueBright('\nYour Account has been successfully created!\n'));
        console.log(chalk.blueBright(`your account details is given below\n`))
        console.log(customer1.customerInfo());
        console.log(`${chalk.blueBright("Account Number")}:${chalk.green(customer1.getBankAccount)}\n`);
        const customerBankAccount = new BankAccount();
        console.log(`${chalk.blueBright("Your Account opening balance is")}: ${chalk.green(customerBankAccount.accountBalance)}$\n`);
        console.log(`${chalk.red("Now you can make a Debit/Credit Transaction of you account:")}`);
        const inout = await inquirer.prompt([
            {
                type: "list",
                name: "option",
                message: "select option:",
                choices: ["Credit", "Debit"],
            },
        ]);
        if (inout.option === "Credit") {
            const enteramount = await inquirer.prompt([
                {
                    type: "number",
                    name: "deposit",
                    message: "enter a amount",
                    validate:(value)=>{
                        if(isNaN(value)){
                            return 'please enter a amount'
                        }else{
                            return true;
                        }
                    }
                },
            ]);

            console.log(`\n${customerBankAccount.credit(enteramount.deposit)}`);

        } else if (inout.option === "Debit") {
            const outamount = await inquirer.prompt([
                {
                    type: "number",
                    name: "withdraw",
                    message: "enter a amount",
                    validate:(value)=>{
                        if(isNaN(value)){
                            return 'please enter a amount'
                        }else{
                            return true;
                        }
                    }
                },
            ]);
            console.log(`\n${customerBankAccount.debit(outamount.withdraw)}`);

        };

        console.log(`${chalk.blueBright("Now your Balance is")}: ${chalk.green(customerBankAccount.accountBalance)}$`);
    };




};

await main();