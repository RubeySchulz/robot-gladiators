var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    //Alert players the fight is starting
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");


    if (promptFight === "fight" || promptFight === "FIHGT"){
        //subtract the value of playerAttack from the value of enemyHealth, and then update enemyHealth
        enemyHealth = enemyHealth - playerAttack;
        //Log message to console to confirm
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        )
        //Subtract value of enemyAttack from playerHealth and then update playerHealth

        //check enemy health
        if (enemyHealth <= 0){
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        }

        playerHealth = playerHealth - enemyAttack;
        //Log message to console to confirm
        console.log(
            enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
        );
        
        if (playerHealth <= 0){
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    } else if (promptFight === "skip" || promptFight === "SKIP"){
        //confirm the player wants to skip
        var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        //if yes, leave fight
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!")
            //subtract money
            playerMoney = playerMoney -2;
        } else {
            fight();
        }
    } else {
        window.alert("You need to choose a valid option. Try again!");
    }
        
        


};

for(var i = 0; i < enemyNames.length; i++){
    fight(enemyNames[i]);
}