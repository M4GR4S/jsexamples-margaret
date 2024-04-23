const prompt = require("prompt-sync")({ sigint: true });
const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

//Set constants to ask the player for inputs on the number of tiles for the game (width and height)
const _MIN = 5, _MAX = 50;
const _WIDTHPROMPT = `Enter the no. of tiles for the width (min. ${_MIN} - max. ${_MAX}): `;
const _HEIGHTPROMPT = `Enter the no. of tiles for the height (min. ${_MIN} - max. ${_MAX}): `;
const _INVALID = `Please enter a valid number between ${_MIN} - max. ${_MAX}.\n`;

// Set constants to inform player if they went OOB/Win/Lose or quit the game
const _OUTOFBOUNDS = "Oh no!\nYou went out of bounds. Please try again!";
const _WIN = "You found the hat!\nCongratulations!";
const _LOSE = "You fell into a hole!\nGame over!";
const _QUIT = "You have quit the game!\nGoodbye!";
const msg = "Thank you for playing!";

class Field{
    // 5. Constructor initialisation. Note: the field created for the game is a 2d-array
    constructor(field = new Array([])){
        this.playGame = false;                // set the game play to false
        this.field = field;                   // set the field that was passed in
        this.positionX = 0;                   // set player's initial position x: 0;
        this.positionY = 0;                   // set player's initial position y: 0;
        this.field[0][0] = pathCharacter;     // set the path of the Character's initial x and y position
    }

    //6. start the game
    startGame() {
        
        this.playGame = true;
        
        // Print the instruction
        this.printInstruction();
        
        while (this.playGame) {
            
            // Print Maze
            // TODO: Print maze
            this.printMaze();

            // Prompt player to move
            // TODO: Prompt the player to move
            this.promptMove();

            // Track the player's position and end the game if value returned is _WIN, _LOSE or _OUTOFBOUNDS
            // TODO: track the player's position
            this.trackPlayer();

            // Show pathCharacter at current position
            this.field[this.positionY][this.positionX] = pathCharacter;
        }
    }

    // 7. Print the game instructions
    printInstruction() {
        console.log('To move your character, enter:\n> "w" to move up\n> "a" to move left\n> "s" to move down\n> "d" to move right\n>  "q" or CTRL + C to quit.\n')
    }

    //8. Print maze
    printMaze() {
        // Going through and console.log each element
        // TODO: concatenate the field generated into a string
        // for (const iterator of object) {
        // }
        for (const element of this.field){
            console.log(element.join(""));
        }
    }

    // 9. Prompt the player to make the next move
    promptMove() {
        var moveDirection = prompt("Which way? ");
        moveDirection = moveDirection.toLowerCase();    // Convert player's input to lowercase before checking
        
        // TODO: Move base on input for moveDirection (inform the player if it is an invaid move or the game has ended via "q")
        switch (moveDirection) {
            // Moves the pathCharacter up by 1
            case "w":
              this.positionY -= 1;
              break;
      
            // Moves the pathCharacter down by 1
            case "s":
              this.positionY += 1;
              break;
      
            // Moves the pathCharacter left by 1
            case "a":
              this.positionX -= 1;
              break;
      
            // Moves the pathCharacter right by 1
            case "d":
              this.positionX += 1;
              break;
      
            // Turns playGame into false to quit the game upon userinput of q
            case "q":
              console.log(_QUIT);
              this.playGame = false;
              break;
      
            // Shows a message saying invalid direction if any keys are entered except for WASD
            default:
              console.log(
                "You have entered an invalid option. \nPlease choose either W, A, S, D\n"
              );
              break;
          }
        }

    //10. Check if player has gone off-bounds, fallen into a hole or found the hat
    trackPlayer() {

        let status = "";

        // TODO: Set the condition to check if user has gone off-bounds, fallen into the hole or found the hat
        switch (true) {
            // If pathCharacter goes out of bounds then show _OUTOFBOUNDS
            case this.positionY < 0 ||
            this.positionY > this.field.length - 1 ||
            this.positionX < 0 ||
            this.positionX > this.field.length - 1:
            console.log(_OUTOFBOUNDS);
            this.endGame(msg) = true;
            break;
      
            // If pathCharacter falls into a hole then show _LOSE
            case this.field[this.positionY][this.positionX] === hole:
              console.log(_LOSE);
              this.endGame(msg) = true;
              break;
      
            // If pathCharacter finds the hat then show _WIN
            case this.field[this.positionY][this.positionX] === hat:
              console.log(_WIN);
              this.endGame(msg) = true;
              break;
          }
          return status;
        }

    // 11. End the game with the message passed in
    endGame(msg = "") {
        // TODO: End the game with the message passed in
        this.playGame = false;
        console.log(msg);
        //Use a process code to exit the game
        process.exit(0);
      }

    //1. Set the game width and height (Static Method)
    static gameDimensions(){
        const width = this.setDimensions(_WIDTHPROMPT);
        const height = this.setDimensions(_HEIGHTPROMPT);

        return {width, height};
    }

    //2. Check if the player enters a valid width and height
    static setDimensions(prompter){

        let dimensionStatus = false;
        let dimension = 0;

        while(!dimensionStatus){
            dimension = prompt(prompter);
            if(isNaN(dimension) || dimension < _MIN || dimension > _MAX){
                console.log(_INVALID)
            }else{
                this.printDimension(prompt, dimension)
                dimensionStatus = true;
            }
        }

        return dimension;
    }

    //3. Create a message for the width OR height set
    static printDimension(prompter, dimension){
        prompter === _WIDTHPROMPT ? console.log(`Width set: ${dimension} \n`) : console.log(`Height set: ${dimension} \n`);
    }

    //4. Creating the game's 2D  field
    static createField(width, height){
        
        //create field (a 2d-array), by the height and width passed in
        const field = new Array(height).fill("").map(element => new Array(width));

        // Create a random number between 0.1 to 0.2, keep the values at 1 decimal place
        let limit = Math.round((Math.random() * 0.1 + 0.1) * 10) / 10;

        //for each unit in y (column)
        for (let y = 0; y < height; y++) {
            // for each unit in x (row), setting up the tiles
            for (let x = 0; x < width; x++) {
                // Generate a random value between 0.1 to 1
                const ceiling = Math.round(Math.random() * 10) / 10;
                //if the limit is less than the ceiling, fill with the fieldCharacter - otherwise, fill with the hole
                field[y][x] = limit < ceiling ? fieldCharacter : hole;
            }  
        }
        let hatY = Math.floor(Math.random() * height);
        let hatX = Math.floor(Math.random() * width);
        if (hatY === 0 && hatX === 0) {
          hatX = 3;
          hatY = 3;
        }
        field[hatY][hatX] = hat;
    
        return field;
      }
    }

// Clear the screen
console.clear();

// Print a welcome message and prompt the player to set up the tiles for the maze
console.log("Welcome to Find Your Hat Maze!\n*********************************\n");

//Setting the tiles for the game
const gameDimensions = Field.gameDimensions();

// Create a 2D-array of the games field using gameDimensions' width and height
const createField = Field.createField(Number(gameDimensions.width), Number(gameDimensions.height));

// Instantiate gameField as the instance of Field class AND call startGame() method to begin the game
const gameField = new Field(createField);
gameField.startGame();