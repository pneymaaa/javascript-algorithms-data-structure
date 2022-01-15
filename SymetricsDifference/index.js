function sym(...args) {
    let newArgs = args;
    let newSet = [];
    symDiff(newArgs[0], newArgs[1]);

    if (newArgs.length > 2) {
        for (let i = 2; i < newArgs.length; i++) {
            symDiff(newSet[0], newArgs[i]);
        }
    }

    function symDiff(arg1, arg2) {
        let combine = arg1.concat(arg2).filter(i => !arg1.includes(i) | !arg2.includes(i));
        if (newSet.length != 0) newSet.length = 0;
        return newSet.push(combine);
    }

    return [...new Set(newSet[0].sort((a, b) => a - b))]
}


// function sym() {
//     let args = [];
//     for (let i = 0; i < arguments.length; i++) {
//         args.push(arguments[i]);
//     }

//     function symDiff(arr1, arr2) {
//         let result = [];

//         arr1.forEach(function (item) {
//             if (arr2.indexOf(item) < 0 && result.indexOf(item) < 0) {
//                 result.push(item);
//             }
//         })

//         arr2.forEach(function (item) {
//             if (arr1.indexOf(item) < 0 && result.indexOf(item) < 0) {
//                 result.push(item);
//             }
//         })

//         return result;
//     }

//     return args.reduce(symDiff); // reduce(callbackfn)
// }

// const diff = (arr1, arr2) => [
//     ...arr1.filter(i => !arr2.includes(i)),
//     ...arr2.filter(i => !arr1.includes(i))
// ];

// const sym = (...args) => [...new Set(args.reduce(diff))]

console.log(sym([1, 2, 3], [5, 2, 1, 4, 5]))