import inquirer from 'inquirer';
const systemGeneratedNo = Math.ceil(Math.random() * 10);
var count = 5;
while (count > 0) {
    const answers = await inquirer.prompt([
        {
            type: 'number',
            name: 'userGuess',
            message: 'Write your Guess: '
        }
    ]);
    const { userGuess } = answers; //destructuring
    if (userGuess === systemGeneratedNo) {
        console.log(userGuess, "userGuess", systemGeneratedNo);
        console.log("Yess your answere is Correct\n YOU WIN!");
    }
    else {
        console.log("You LOOSE \n TRY AGAIN");
    }
    count--;
}
console.log("~~~~~THE ACTUAL ANS WAS :", systemGeneratedNo + " ~~~~~~");
