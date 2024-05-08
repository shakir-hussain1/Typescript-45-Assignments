// 22. Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
// Intentional error created (at index 5 no item available so it will show undefined)
var evenNumbers = [2, 4, 6, 8, 10];
console.log(evenNumbers[5] + "\n");
// Error corrected (at index 4 item is avalable so it will show 10)
console.log(evenNumbers[4]);
