let arr = new Array (1,2,3);
// console.log(arr);

let arr2 = new Array(3);

for (let index = 0; index < arr2.length; index++) {
    arr2[index] = index + 1;
    
}

// console.log(arr2);

const width = 5;
const height = 2;

const field2D = new Array(height).fill("0").map(element => new Array("░", "░"));
// console.log(field2D);

// for (let index = 0; index < height; index++) {
//     console.log("index at " + index + " has an array of: [" + field2D[index] + "].")
// }


const field2D_v2 = new Array(height).fill("0").map(element => new Array(width));
console.log(field2D_v2);

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