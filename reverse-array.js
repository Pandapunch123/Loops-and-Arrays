//With a for loop, create a JavaScript code that creates a new array in reverse order.

const count = [1, 2, 3];
const reversecount = [];
for (let i = count.length - 1; i >= 0; i--) {
  const valueAtIndex = count[i];
  reversecount.push(valueAtIndex);
}
console.log(reversecount);

const counts = [1, 3, 5, 7, 9, 11];
const reversecounts = [];
for (let i = counts.length - 1; i >= 0; i--) {
  const valueAtIndex = counts[i];
  reversecounts.push(valueAtIndex);
}
console.log(reversecounts);

const down = [20, 50, 30, 60, 200];
const reversedown = [];
for (let i = down.length - 1; i >= 0; i--) {
  const valueAtIndex = down[i];
  reversedown.push(valueAtIndex);
}
console.log(reversedown);

const countdown = [1, -1, 2, -3, 5, -8, 13];
const reversecountdown = [];
for (let i = countdown.length - 1; i >= 0; i--) {
  const valueAtIndex = countdown[i];
  reversecountdown.push(valueAtIndex);
}
console.log(reversecountdown);
