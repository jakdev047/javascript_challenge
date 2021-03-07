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

    chunkArray(arr,len){
        // initial chunked array
        const chunkedArr = [];

        // 1st process
        let i = 0;
        while (i < arr.length) {
            chunkedArr.push(arr.slice(i, i+len));

            //  increment index
            i += len;
        }

        // 2nd process
        arr.forEach(function(itm){
            // get last element
            const lastElement = chunkedArr[chunkedArr.length - 1];

            if(!lastElement || lastElement.length === len) {
                chunkedArr.push([itm])
            }
            else {
                lastElement.push(itm)
            }
        })

        return chunkedArr;
    }
}

module.exports = ChallengeTwo;