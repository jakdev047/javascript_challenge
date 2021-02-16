class Reverse {
    constructor(){}

    reverseString(str){
        // 1st method
        const strArray = str.split('').reverse().join('');

        // 2nd method
        let revStr = '';
        for( let i = str.length-1; i >= 0; i-- ) {
            revStr += str[i];
        }

        // 3rd method
        let strRev = '';
        for( let char of str) {
            strRev = char + strRev;
        }

        // 4th method
        let stringRev = '';
        str.split('').forEach(function (char) {
            stringRev = char + stringRev;
        })

        // 5th method
        console.log(`Revese a string: ${str.split('').reduce( (reverseStr,char) => char + reverseStr,'')}`);
    }
}

module.exports = Reverse;