const calculator = require("./calculator");

test("adds", () => {
    expect(calculator.add(1, 2)).toEqual(3)
});

test("subtracts", () => {
    expect(calculator.sub(1, 2)).toEqual(-1)
});

test("multiplies", () => {
    expect(calculator.mul(1, 2)).toEqual(2)
});

test("divides", () => {
    expect(calculator.div(1, 2)).toEqual(0.5)
});