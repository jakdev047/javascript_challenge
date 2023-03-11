class IntermediateAlgorithm {
  constructor() {}

  diffTwoArry(arr1, arr2) {
    let newArr = [];

    // 1st array loop
    for (let i = 0; i < arr1.length; i++) {
      const element = arr1[i];

      // If element is not found in arr2, add it to newArr
      if (arr2.indexOf(element) === -1) {
        newArr.push(element);
      }
    }

    // 2nd array loop
    for (let i = 0; i < arr2.length; i++) {
      const secondElement = arr2[i];

      // If secondElement is not found in arr2, add it to newArr
      if (arr1.indexOf(secondElement) === -1) {
        newArr.push(secondElement);
      }
    }

    return newArr;
  }
}

module.exports = IntermediateAlgorithm;
