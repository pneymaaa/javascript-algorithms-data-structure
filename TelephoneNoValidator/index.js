function telephoneCheck(str) {
    let a = /\(/g.test(str);
    let b = /\)/g.test(str);

    if ((a === true && b === true) || (a === false && b === false)) {
        return /^1?[\(|\s)]?[\(|\s]?\d{3}[\)]?[-|\s]?\d{3}[-|\s]?\d{4}$/gm.test(str);
    } else {
        return false;
    }
}

console.log(telephoneCheck("555-555-5555"));


