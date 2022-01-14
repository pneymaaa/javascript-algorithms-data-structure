function checkCashRegister(price, cash, cid) {
  let change = cash - price;
  let nameIdx = {
    0: "PENNY",
    1: "NICKEL",
    2: "DIME",
    3: "QUARTER",
    4: "ONE",
    5: "FIVE",
    6: "TEN",
    7: "TWENTY",
    8: "ONE HUNDRED",
  };
  let moneyIdx = {
    0: 0.01,
    1: 0.05,
    2: 0.1,
    3: 0.25,
    4: 1,
    5: 5,
    6: 10,
    7: 20,
    8: 100,
  };

  let newChange = [];
  let result = {};

  let money = cid.flatMap((item) => item.filter((i) => typeof i == "number"));
  let sumMoney = money.reduce((prev, val) => prev + val);

  if (sumMoney == change) {
    newChange = cid;
    result["status"] = "CLOSED";
  } else {
    for (let i = money.length - 1; i >= 0; ) {
      let tempMoney = money[i];
      while (change < tempMoney) {
        tempMoney -= moneyIdx[i];
      }
      if (tempMoney <= 0) {
        i--;
      } else {
        change = (change % tempMoney).toFixed(2);
        newChange.push([
          nameIdx[i],
          parseFloat(tempMoney.toFixed(2).toString()),
        ]);
        i--;
      }
    }
    if (change != 0) newChange = [];

    if (newChange.length == 0) {
      result["status"] = "INSUFFICIENT_FUNDS";
    } else if (newChange.length > 0) {
      result["status"] = "OPEN";
    }
  }

  result["change"] = newChange;

  return result;
}

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0],
//["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

//console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0],
// ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

//{status: "OPEN", change: [["TWENTY", 60], ["TEN", 20],
//["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2],
//["PENNY", 0.04]]}
//16.74

//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05],
//["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55],
//["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
//return {status: "OPEN", change: [["QUARTER", 0.5]]}
//96.74
