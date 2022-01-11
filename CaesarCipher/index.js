function rot13(str) {
    const ROT = {
        "A":"N","N":"A",
        "B":"O","O":"B",
        "C":"P","P":"C",
        "D":"Q","Q":"D",
        "E":"R","R":"E",
        "F":"S","S":"F",
        "G":"T","T":"G",
        "H":"U","U":"H",
        "I":"V","V":"I",
        "J":"W","W":"J",
        "K":"X","X":"K",
        "L":"Y","Y":"L",
        "M":"Z","Z":"M"
    } // create object to store data

    let newWord = "";

    for (let i = 0; i < str.length; i++) {
        if(/[^A-Z]/g.test(str[i])){ // it will handle non-alphabet, thus still the same character will not converted as ROT
            newWord += str[i];
        } else {
            newWord += ROT[str[i]];
        }
    }

    return newWord;

  }
  
  console.log(rot13("SERR PBQR PNZC!"));