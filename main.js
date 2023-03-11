// require file
const Reverse = require("./challenge/reverse");
const ChallengeTwo = require("./challenge/challangeTwo");
const IntermediateAlgorithm = require("./challenge/intermediateAlgorithm");

// inheritance class
const reverse = new Reverse();
const sessionTwo = new ChallengeTwo();
const iAlgorithm = new IntermediateAlgorithm();

// reverse result
reverse.reverseString("Jubayer Alam Khan"); // nahK malA reyabuJ
reverse.isPallindrome("racecar"); // 'racecar' return true
reverse.reverseIntiger(-123); // -321

// subString
reverse.subString("Javascript"); // [indexStart, stringLength] => vas

// capitalizeLetter
reverse.capitalizeLetter("i love javascript"); // I Love Javascript

// maxCharacter
console.log(reverse.maxCharacter("Javascript")); // a

// fizbuzz
reverse.fizBuzz(); // 1, 3(fizz), 5(buzz), 7, 9(fizz), 12, 15(fizzBuzz), 18(fizz)

// longestWord
sessionTwo.longestWord("Hello there, my name is Jubayer"); // ['Jubayer']

// chunk array
console.log(sessionTwo.chunkArray([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3],[4,5,6],[7]]

// flutten array
console.log(sessionTwo.fluttenArr([[1, 2, 3], [4, 5, 6], [7]])); // [1,2,3,4,5,6,7]

// isAnagram
console.log(sessionTwo.isAnagram("elbow", "below")); // true

// letterChanges
console.log(sessionTwo.letterChanges("hello")); // ifmmp

// diffTwoArry
console.log(iAlgorithm.diffTwoArry([1, 2, 3, 5], [1, 2, 3, 4, 5])); // [4]

// seekDestroy
console.log(iAlgorithm.seekDestroy([1, 2, 3, 1, 2, 3], 2, 3)); // [1,1]
