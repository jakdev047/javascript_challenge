// require file
const Reverse = require ('./challenge/reverse');
const ChallengeTwo = require ('./challenge/challangeTwo');

// inheritance class
const reverse = new Reverse;
const sessionTwo = new ChallengeTwo;

// reverse result
reverse.reverseString('Jubayer Alam Khan'); // nahK malA reyabuJ
reverse.isPallindrome('racecar'); // 'racecar' return true 
reverse.reverseIntiger(-123); // -321

// subString
reverse.subString('Javascript') // [indexStart, stringLength] => vas

// capitalizeLetter
reverse.capitalizeLetter('i love javascript') // I Love Javascript

// maxCharacter
console.log(reverse.maxCharacter('Javascript')) // a

// fizbuzz
reverse.fizBuzz(); // 1, 3(fizz), 5(buzz), 7, 9(fizz), 12, 15(fizzBuzz), 18(fizz) 

// longestWord
sessionTwo.longestWord('Hello there, my name is Jubayer'); // ['Jubayer']

// chunk array
console.log(sessionTwo.chunkArray([1,2,3,4,5,6,7],3)); // [[1,2,3],[4,5,6],[7]]

// flutten array
console.log(sessionTwo.fluttenArr([[1,2,3],[4,5,6],[7]])); // [1,2,3,4,5,6,7]