class User{
    constructor(name, emailAddress){ //attributes we need
        this.name=name
        this.emailAddress=emailAddress
        this.accountBalance=0
    }
    makeDeposit(amount){
        this.accountBalance+= amount;
        return this;
    }
    makeWithdrawal(amount){
        this.accountBalance-=amount;
        return this; //we add return this to assure the methoods functionality in the multiple call
    }
    displayBalance(){
        console.log("User:"+ this.name+",Balance: $"+this.accountBalance);
        return this;
    }
    transferMoney(otherUser,amount){
        this.accountBalance-=amount;
        otherUser.accountBalance+=amount;
        return this;
    }

}
//3 instances of the user class
const user1= new User("Simon", "Simon@gmail.com");
const user2= new User("Silo", "Silo@gmail.com");
const user3= new User("Sindy", "Sindy@gmail.com");
//3 deposits and 1 withdrawal for the first user
user1.makeDeposit(150).makeDeposit(250).makeDeposit(50).makeWithdrawal(300).displayBalance()
// user2: makes 2 deposits & 2 withdrawals
user2.makeDeposit(350).makeDeposit(250).makeWithdrawal(320).makeWithdrawal(30).displayBalance()
//user3: make 1 deposits & 3 withdrawals
user3.makeDeposit(1050).makeWithdrawal(380).makeWithdrawal(324).makeWithdrawal(30).displayBalance()
//Transfer of 60$ between user1 and user3
user1.transferMoney(user3,60).displayBalance()
user3.displayBalance()





