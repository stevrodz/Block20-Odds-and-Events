// TODO: this file! :)
// === State ===
const state = {
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

/** Add a number to the number bank */
function addNumber(number) {
  if (!isNaN(number) && number !== "") {
    // Check for valid number
    state.numberBank.push(Number(number)); // Add only valid numbers
  }
  render();
}

/** Sort the first number from the number bank */
function sortOne() {
  if (state.numberBank.length > 0) {
    const number = state.numberBank.shift(); // Remove the first number
    if (number % 2 === 0) {
      state.evenNumbers.push(number); // Even number
    } else {
      state.oddNumbers.push(number); // Odd number
    }
    render();
  }
}

/** Sort all numbers from the number bank */
function sortAll() {
  while (state.numberBank.length > 0) {
    sortOne(); // Keep sorting one at a time until all are moved
  }
}

/** Render the numbers in each category */
function render() {
  // Render number bank
  const numberBankOutput = document.querySelector("#numberBank output");
  numberBankOutput.textContent = state.numberBank.join(", ");

  // Render odd numbers
  const oddNumbersOutput = document.querySelector("#odds output");
  oddNumbersOutput.textContent = state.oddNumbers.join(", ");

  // Render even numbers
  const evenNumbersOutput = document.querySelector("#evens output");
  evenNumbersOutput.textContent = state.evenNumbers.join(", ");
}

// === Event Listeners ===
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent form submission from refreshing the page
  const numberInput = document.querySelector("#number").value; // Get input value
  addNumber(numberInput); // Add number to the bank
  document.querySelector("#number").value = ""; // Clear input field
});

document.querySelector("#sortOne").addEventListener("click", sortOne);
document.querySelector("#sortAll").addEventListener("click", sortAll);

// Initial render
render();
