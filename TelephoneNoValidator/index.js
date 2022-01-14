function telephoneCheck(str) {
    let a = /\(/g.test(str);
    let b = /\)/g.test(str);

    // to prevent only one bracket, create conditional if it has two brackets it will return test the regex otherwise return false
    if ((a === true && b === true) || (a === false && b === false)) {
        //since the phone number only for US and if it provided in the case, so use ^1?
        return /^1?[\(|\s)]?[\(|\s]?\d{3}[\)]?[-|\s]?\d{3}[-|\s]?\d{4}$/gm.test(str);
    } else {
        return false;
    }
}

console.log(telephoneCheck("555-555-5555"));


