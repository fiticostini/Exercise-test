let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollars) {
    let yen = dollars * 106.58;
    return yen;
}

function fromEuroToDollar(euros) {
    let dollars = euros * 1.2;
    return dollars;
}

function fromYenToPound(yen) {
    let pound = yen * 0.0063;
    return pound;
}

