let ans = 10;
let ansString = "ten";

let userInput = prompt("Guess the number between 0 - 20. Press q or Q to quit.");

while (userInput.toUpperCase() !== "Q") {
  switch (userInput.toLowerCase()) {
    case ansString:
    case String(ans): // Convert ans to string for comparison
      alert("You are correct!!");
      break;
    case "":
      userInput = prompt("Your answer is empty. Please try again.");
      break;
    case userInput < ans: // No need for separate comparison
      userInput = prompt("Too low. Please try again.");
      break;
    case userInput > ans: // No need for separate comparison
      userInput = prompt("Too high. Please try again.");
      break;
    default:
      userInput = prompt("Wrong answer. Guess again. Press q or Q to quit.");
      break;
  }
}
