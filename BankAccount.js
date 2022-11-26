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
const account1=new BankAccount(0.01,1200);
const account2=new BankAccount();
account1.deposit(256).deposit(547).deposit(78).withdraw(478).yieldInterest().displayAccountInfo();
account2.deposit(256).deposit(3420).withdraw(478).withdraw(478).withdraw(4078).withdraw(478).yieldInterest().displayAccountInfo();