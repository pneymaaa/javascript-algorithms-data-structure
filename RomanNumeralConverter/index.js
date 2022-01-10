function convertToRoman(num) {
    const Roman = {
        "1": "I", "2": "II", "3": "III", "4": "IV", "5": "V",
        "6": "VI", "7": "VII", "8": "VIII", "9": "IX",
        "10": "X", "20": "XX", "30": "XXX", "40": "XL",
        "50": "L", "60": "LX", "70": "LXX", "80": "LXXX", "90": "XC",
        "100": "C", "200": "CC", "300": "CCC", "400": "CD",
        "500": "D", "600": "DC", "700": "DCC", "800": "DCCC", "900": "CM", "1000": "M"
    }; // create an object to store data converter number

    let newArr = [];
    let splitNum = 10;
    let numeralRoman = "";

    // split break into thousands, hundreds, tens and units
    while (num > splitNum / 10) {
        let splitting = num % splitNum - num % (splitNum / 10)
        if (splitting !== 0) newArr.unshift(splitting);
        splitNum *= 10;
    }

    // if it is 10, 100, 1000, 10000 etc the array length will zero because splitting will give 0
    if (newArr.length == 0) {
        numeralRoman += Roman[num];
    } else {
        // restore values from object using keys
        for (let i = 0; i < newArr.length; i++) {
            if (newArr[i] > 1000) {
                // Expecting that number will not higher than 10.000, so only add 'M' as much the number
                let newNum = newArr[i].toString().match(/[^0]*/)[0];
                for (let j = 1; j <= newNum; j++) {
                    numeralRoman += "M"
                }
            } else {
                numeralRoman += Roman[newArr[i]];
            }
        }
    }

    return numeralRoman;
}

console.log(convertToRoman(3999));