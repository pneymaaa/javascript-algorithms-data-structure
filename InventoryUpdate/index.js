function updateInventory(arr1, arr2) {
    let currInventory = {}; // create empty object to store key and value from two array (after concatenation)
    let newArr = arr1.concat(arr2); // concatenate two array
    for (let i = 0; i < newArr.length; i++) { // looping newArray and adding them to the object form - {'name':'number'}
        if(currInventory.hasOwnProperty(newArr[i][1])) {
            currInventory[newArr[i][1]] += newArr[i][0];
        } else {
            currInventory[newArr[i][1]] = newArr[i][0];
        }
    }

    // sorting function the object alphabetically
    Object.filter = (obj) =>
        Object.keys(obj)
                .sort((a, b) => a.localeCompare(b))
                .reduce((res, key) => (res[key] = obj[key], res), {});

    let resArr = []; // this empty list to store new array after sorting the object
    let newObj = Object.filter(currInventory); // sorting the object

    // looping newObject and push them to the resArr where the index of key is one, 
    // and the value is zero (in the first)
    for (let key in newObj) { 
        resArr.push([newObj[key], key]);
    }

    return resArr; //this is the result of list [['number','name'],...]
}

// Example inventory lists
var curInv = [
    [5, "Microphone"],
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"]
];

var newInv = [
    [7, "Toothpaste"],
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"]
];

updateInventory(curInv, newInv);