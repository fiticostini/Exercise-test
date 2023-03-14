let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen (dollarValue) {
    return dollarValue * 153.48;
}

function fromEuroToDollar (euroValue) {
    return euroValue * 1.2;
}

function fromYenToPound (yenValue) {
    return yenValue * 0.0063;
}

let dollarValue = 153.48;
let euroValue = fromDollarToYen(dollarValue);
let yenValue = fromEuroToDollar(euroValue);
let resultado = fromYenToPound(yenValue);
console.log(resultado);

module.exports = {
    fromEuroToDollar : fromEuroToDollar,
    fromDollarToYen : fromDollarToYen,
    fromYenToPound : fromYenToPound,
};

