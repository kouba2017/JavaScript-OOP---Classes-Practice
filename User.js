class User{
    constructor(name, emailAddress){ //attributes we need
        this.name=name
        this.emailAddress=emailAddress
        this.accountBalance=0
    }
    makeDeposit(amount){
        this.accountBalance+= amount;
    }
    makeWithdrawal(amount){
        this.accountBalance-=amount;
    }
    displayBalance(){
        console.log("User:"+ this.name+",Balance: $"+this.accountBalance);
    }
    transferMoney(otherUser,amount){
        this.accountBalance-=amount;
        otherUser.accountBalance+=amount;
    }

}
//3 instances of the user class
const user1= new User("Simon", "Simon@gmail.com");
const user2= new User("Silo", "Silo@gmail.com");
const user3= new User("Sindy", "Sindy@gmail.com");
//3 deposits and 1 withdrawal for the first user
user1.makeDeposit(150)
user1.makeDeposit(250)
user1.makeDeposit(50)
//user1.displayBalance()
user1.makeWithdrawal(300)
user1.displayBalance()
// user2: makes 2 deposits & 2 withdrawals
user2.makeDeposit(350)
user2.makeDeposit(250)
user2.makeWithdrawal(320)
user2.makeWithdrawal(30)
user2.displayBalance()
//user3: make 1 deposits & 3 withdrawals
user3.makeDeposit(1050)
user3.makeWithdrawal(380)
user3.makeWithdrawal(324)
user3.makeWithdrawal(30)
user3.displayBalance()
//Transfer of 60$ between user1 and user3
user1.transferMoney(user3,60)
user1.displayBalance()
user3.displayBalance()





