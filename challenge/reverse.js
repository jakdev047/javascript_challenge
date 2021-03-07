class Reverse {
    constructor() { }

    reverseString(str) {
        // 1st method
        const strArray = str.split('').reverse().join('');

        // 2nd method
        let revStr = '';
        for (let i = str.length - 1; i >= 0; i--) {
            revStr += str[i];
        }

        // 3rd method
        let strRev = '';
        for (let char of str) {
            strRev = char + strRev;
        }

        // 4th method
        let stringRev = '';
        str.split('').forEach(function (char) {
            stringRev = char + stringRev;
        })

        // 5th method
        console.log(`Revese a string: ${str.split('').reduce((reverseStr, char) => char + reverseStr, '')}`);
    }

    isPallindrome(str) {
        // 1st method
        const revStr = str.split('').reverse().join('');
        const output = revStr === str ? true : false;

        console.log(`isPallindrome: ${output}`);
    }

    reverseIntiger(int) {
        // 1st method
        const revInt = parseInt(int.toString().split('').reverse().join('')) * Math.sign(int);

        console.log(`Reverse Intiger: ${revInt}`);
    }

    subString(str) {
        const result = str.substring(2, 5)
        console.log(`Substring: ${result}`);
    }

    capitalizeLetter(str) {
        // 1st method
        const strArr = str.toLowerCase().split(' ').map((itm) => {
            return itm.substring(0, 1).toUpperCase() + itm.substring(1).toLowerCase();
        }).join(' ');

        // for (let i = 0; i < strArr.length; i++) {
        //     let element = strArr[i];
        //     element = element.substring(0,1).toUpperCase() + element.substring(1).toLowerCase();
        // }

        // 2nd method
        const capitalizeString = str.replace(/\b[a-z]/gi, function (char) {
            return char.toUpperCase();
        });

        console.log(`Capitalize Letters: ${capitalizeString}`);
    }

    maxCharacter(str) {
        const charMap = {};
        let maxNum = 0;
        let maxCharacter = '';

        str.split('').forEach(function (itm) {
            if (charMap[itm]) {
                charMap[itm]++
            }
            else {
                charMap[itm] = 1
            }
        })

        /* 
            string to object

            ["j","a","v","a","s","c","r","i","p","t"]
            if(charMap[j]) {
                1+=1
            }
            else {
                1
            }
        */

        // return charMap;  // { J: 1, a: 2, v: 1, s: 1, c: 1, r: 1, i: 1, p: 1, t: 1 }

        for (let char in charMap) {
            if (charMap[char] > maxNum) {
                maxNum = charMap[char];
                maxCharacter = char;
            }
        }

        /* 
            max number & max Character
            
            charMap[j] > maxNum(0)
                maxNum = 1
                maxCharacter = j

            charMap[a] > maxNum(1)
                maxNum = 2
                maxCharacter = a

        */

        return maxCharacter;
        // console.log(`Maximum Character: ${charMap}`);
    }
}

module.exports = Reverse;