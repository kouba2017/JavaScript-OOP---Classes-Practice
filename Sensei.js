class Ninja{
    constructor(name,health,speed=3,strength=3){
        this.name=name
        this.health=health
        this.speed=speed
        this.strength=strength
    }
    sayName(){
        console.log('Ninja name'+ this.name);
    }
    showStats(){
        console.log('Ninja Stat is' ,this.name, this.health, this.speed, this.strength);
    }
    drinkSake(){
        this.health+=3;
    }
}
class Sensei extends Ninja{
    constructor(name,wisdom=10,health,speed,strength){
        super(name,health=200,speed=10,strength=10)
        this.wisdom=wisdom
    }
    speakWisdom(){
        super.drinkSake();
        console.log('What one programmer can do in a month, two programmers can do in two months');
    }
}
// example output
const superSensei = new Sensei("Chandler");
superSensei.speakWisdom();
superSensei.showStats();
