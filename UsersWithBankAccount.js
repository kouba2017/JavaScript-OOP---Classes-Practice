class BankAccount{
    constructor(intRate=0.01,balance=0){
        this.intRate=intRate
        this.AccountBalance=balance
    }
    deposit(amount){
        this.AccountBalance+=amount;
        console.log(this.AccountBalance);
        return this;
    }
    withdraw(amount){
        if (this.AccountBalance>amount)
            this.AccountBalance-=amount;
        else
            {
                "Insufficient funds: Charging a $5 fee"
                this.AccountBalance-=(amount+5);
            }
        console.log(this.AccountBalance);
        return this;
    }
    displayAccountInfo(){
        console.log("Balance: $",this.AccountBalance);
    }
    yieldInterest(){
        if (this.AccountBalance>0)
            this.AccountBalance+=this.AccountBalance*this.intRate;
        console.log(this.AccountBalance);
        return this;
    }
}
class User extends BankAccount{
    constructor(name, emailAddress,intRate,balance){ //attributes we need
        super(intRate,balance);
        this.account=new BankAccount(intRate,balance);
        this.name=name;
        this.emailAddress=emailAddress;
    }
    makeDeposit(amount){
        this.account.deposit(amount);
        return this;
    }
    makeWithdrawal(amount){
        this.account.withdraw(amount);
        return this; //we add return this to assure the methoods functionality in the multiple call
    }
    displayBalance(){
        console.log("User:"+ this.name+",Balance: $"+this.account.AccountBalance);
        return this;
    }
    transferMoney(otherUser,amount){
        makeDeposit(amount);
        otherUser.makeWithdrawal(amount);
        return this;
    }

}

const user1= new User("Simon", "Simon@gmail.com");
user1.makeDeposit(150).makeDeposit(250).makeDeposit(50).makeWithdrawal(300).displayBalance()








