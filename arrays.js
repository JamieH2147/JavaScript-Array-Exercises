
// ARRAYS EXERCISES


/* 1) 

Create an array of your breakfast​

Add an item to the end with push​

Add another item to the start​

Console.log the length of the array​ */


const myBreakfast = ['caviar', 'donuts', 'cheese', 'steak'];

myBreakfast.push('coffee');

myBreakfast.unshift('brocolli');

console.log(myBreakfast);
console.log(myBreakfast.length);

/* 2 )

Create a function that takes in an array as a parameter​

Return the last item of the array (This should work for an array of any length)​ */


const users = ['Jamie', 'Ethan', 'Max', 'Fred']

function returnlastItem(arr) {

  return arr[arr.length - 1];

}
console.log(returnlastItem(users));

/* 3 )

Create an array “musicGenres”, with items “Rock” and “Rap”.​

Append (add to the end) “Jazz” to the end.​

Replace the value in the middle of the array with “Classical”. Your code for finding the middle value should work for any arrays with an odd number of items.​

Prepend (add to start) “Blues” and “Reggae” to the array.​ */

const musicGenres = ['Rock', 'Rap'];

musicGenres.push('Jazz');

function replaceMiddleValue (arr) {

  if (arr.length%2 !== 0) {

    return arr[Math.floor(arr.length / 2)] = 'Classical';

} else {console.log(`Sorry, your array has even number of elements, it has no middle value`)}

}

musicGenres.unshift('Blues', 'regae');


replaceMiddleValue(musicGenres);
console.log(musicGenres);

/* 4 )

Create a function that takes in an array and sorts it into alphabetical order.​

Try sorting your breakfast array​ */

const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'black'];


function alphabetise (range) {

  return range.sort();

}

console.log(alphabetise(colours));























