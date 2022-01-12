function telephoneCheck(str) {
    // let a = /\(/g.test(str);
    // let b = /\)/g.test(str);
    // let newArr = [a, b];

    return /^1?[\((?=\d{3}\))|\s]?[\((?=\d{3}\))|\s]?\d{3}[(?<=\(\d{3}))\)]?[-|\s]?\d{3}[-|\s]?\d{4}$/gm.test(str);
}

console.log(telephoneCheck("555-555-5555"));