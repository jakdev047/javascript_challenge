class ChallengeTwo {
    constructor() { }

    longestWord(sen){
        // 1st process

        // create filter array
        const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);

        // sort by length
        const sorted = wordArr.sort((a,b)=> {return b.length - a.length}) // high to low

        // if multiple words, put into array
        const longestWordArr = sorted.filter((itm)=>{
            return itm.length === sorted[0].length;
        });

        // check if more than one array val
        if ( longestWordArr.length === 1) {
            console.log(`Longest Word: ${longestWordArr[0]}`);
        }
        else {
            console.log(`Longest Word: ${longestWordArr}`);
        }
    }
}

module.exports = ChallengeTwo;