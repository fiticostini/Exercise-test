const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js')

test('One euro should be 1.206 dollars', function() {
    expect(fromEuroToDollar(3.5)).toBe(4.2);
})

test('One dollar should be 153.48 yenes', function() {
    expect(fromDollarToYen(1)).toBe(153.48);
})

test('One yen should be 0.0063 pounds', function() {
    expect(fromYenToPound(1000)).toBe(6.3);
})
