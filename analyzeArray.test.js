const analyzeArray = require("./analyzeArray")

test("analyzes correctly with information", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toStrictEqual({
        "average": 3,
        "min": 1,
        "max": 5,
        "length": 5
    })
});

test("analyzes correctly with no information", () => {
    expect(analyzeArray([])).toStrictEqual({
        "average": 0,
        "min": 0,
        "max": 0,
        "length": 0
    })
});