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

class Field{

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

console.log(createField)