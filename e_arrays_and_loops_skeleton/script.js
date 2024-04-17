// ---------
// 1. ARRAYS
// ---------

// Basic array
// This is just an example, the best practice is to store a single data type to an array
const myArray = [1, 2, 3, 4, "Hello", true, null];
console.log(myArray)

// An array SHOULD be used with values of a single data type
const myArray2 = ["James", "Sam", "Xavier"];

// A) ARRAY PROPERTIES
console.log("Number of elements in mappedArray: " + myArray2.length)


// B) ARRAY METHODS

// i - map function of an array
// Implement your code here
const mappedArray = [1, 2, 3, 4, 5, 6];

// Callback function #1 as an arrow function:
const arrMultiplyBy10 = mappedArray.map(item => item * 10);

// Callback function #2 as an arrow function in its full form:
const arr2 = mappedArray.map((item)=>{return item * 10;});

// Callback function #3 as a conventional function:
const arr = mappedArray.map(function(item){ return item * 20; });

// Callback function #4, using a dedicated function within the arrow function:
function mulitplyBy20(a){
    return a * 20;
}
const arrMultiplyBy20 = mappedArray.map(item => mulitplyBy20(item));
console.log(arrMultiplyBy20);


// ii - filter function of an array
// Implement your code here

const vowels = ["a", "e", "i", "o", "u"];
const filteredVowels = vowels.filter(vowel => vowel == "a" || vowel == "u");
console.log(filteredVowels)

// iii - sort function of an array
// Implement your code here

const nums = [1, 2, 3, 4, 5, 6];
const names = ["James", "Chris", "Max", "Lennon"];

// Sort by descending order
// Implement your code here

const descendingNums = nums.sort((a, b)=> a > b ? -1 : 1);
console.log(descendingNums);

// Long-form of the above code:
const descendingNums2 = nums.sort((a,b)=>{
    if(a > b)
        return -1;
    else
        return 1;
})

console.log(descendingNums2)

// Sort by ascending order
// Implement your code here

const ascendingNames = names.sort((a, b) => a < b ? 1 : -1);
console.log(ascendingNames)

// Long-form of the above code:
const ascendingNames2 = names.sort((a, b)=>{
    if(a > b)
        return 1;
    else
        return -1;
});

console.log(ascendingNames2)

// iv - reduce function of an array
// Implement your code here

const numbers = [1, 2, 3, 4];
var productOfNums = numbers.reduce((a,b)=> a * b);
console.log(productOfNums);

// another approach of applying a reduce function of an array
// Implement your code here

function product(a, b){
    return a * b
}

const productOfNums2 = numbers.reduce((a, b) => (a, b));

// shorter form of code:
const productOfNums3 = numbers.reduce(product);
console.log(productOfNums3);

// v - pushing values into an existing array
const teamList = ["Tanna", "Shia Lyn", "Zhi Yan", "Francis"];
teamList.push("Muhaimin");
console.log("Team 1: " + teamList);

// const extractedMembers = teamList.splice(0,2); // remove a value starting from index and ends before index
// console.log(extractedMembers); //["Tanna", "Shia Lyn"]
// console.log(teamList); //["Zhi Yan", "Francis", "Muhaimin"]


const newTeamList = [...teamList.splice(0,2), "Colin", ...teamList];
console.log(newTeamList);

console.log(teamList.indexOf("Muhaimin"));
console.log(updatedTeamList);


// ---------
// 2. LOOPS
// ---------

// i - for loops (Simulate a countdown using a for loop)
// Implement your code here


// ii - for-each loop
// Implement your code here


// iii - do-while loop (execute first, check for the condition later)
// Implement your code here


// iv - while loop (check the conditions first before running the while loop)
// Implement your code here