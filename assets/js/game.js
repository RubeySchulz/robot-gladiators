var playerInfo = {
    name: window.prompt("What is your robot's name?"),
    health: 100,
    attack: 10,
    money: 10,
    reset: function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function(){
        if (this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars");
            this.health += 20;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function(){
        if (this.money >= 7){
            window.alert("Upgrading player's attack by 6 for 7 dollars.");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};


var fight = function(enemy) {
    //repeat while enemy is alive
    while(playerInfo.health > 0 && enemy.health > 0){
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

        if (promptFight === "skip" || promptFight === "SKIP"){
            //confirm the player wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");

            //if yes, leave fight
            if (confirmSkip){
                window.alert(playerInfo.name + " has chosen to skip the fight!");
                //subtract money
                playerInfo.money = Math.max(0, playerInfo.money - 10);
                console.log("playerInfo.money", playerInfo.money);
                break;
            }
        }
        //generate random damage value based on players attack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

        //subtract the value of playerInfo.attack from the value of enemy.health, and then update enemy.health
        enemy.health = Math.max(0, enemy.health - damage);

        //Log message to console to confirm
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        )
        
        //check enemy health
        if (enemy.health <= 0){
            window.alert(enemy.name + " has died!");
            playerInfo.money = playerInfo.money + 20;
            break;
        }
        else {
            window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
        //generate a random number based on enemy attack power
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        //Subtract value of enemy.attack from playerInfo.health and then update playerInfo.health
        playerInfo.health = Math.max(0, playerInfo.health - damage);

        //Log message to console to confirm
        console.log(
            enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
        
        if (playerInfo.health <= 0){
            window.alert(playerInfo.name + " has died!");
            break;
        }
        else {
            window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        }
         
    }
};

var startGame = function(){
    //reset player stats
    playerInfo.reset();
    
    for(var i = 0; i < enemyInfo.length; i++){
        if(playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            var pickedEnemyObj = enemyInfo[i];
            pickedEnemyObj.health = randomNumber(40, 60);
            fight(pickedEnemyObj);

            //if we're not at the last enemy and player is still alive
            if (playerInfo.health > 0 && i < enemyInfo.length - 1){
                var storeConfirm = window.confirm("The fight is over, visit the store before the next round?")

                if (storeConfirm) {
                    shop();
                }
            }
        } else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
        
    }
    //After the loop ends the player is either out of health or enemies
    endGame();
    
};
var endGame = function() {
    if (playerInfo.health > 0){
        window.alert("The game has now ended. Let's see how you did!");
    } else {
        window.alert("You've lost your robot in battle");
    }
        
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm){
        //restart
        startGame();
    } else {
        window.alert("Thank you for playing Robot Gladiators!");
    }
};

var shop = function() {
    //Ask the player what they would like to do
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: REFILL, UPGRADE, or LEAVE"
    );

    switch(shopOptionPrompt) {
        case "REFILL":
        case "refill": 
            playerInfo.refillHealth();
            break;
        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
};

var randomNumber = function(min, max){
    var value = Math.floor(Math.random() * (max - min + 1) + min);

    return value;
}

var enemyInfo = [
    {
        name: "Roberto",
        attack: randomNumber(10, 14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10, 14)
    }
]

startGame();