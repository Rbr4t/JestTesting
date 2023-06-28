const capitalize = require("./capitalize.js")

test("capitalizes a word", () => {
    expect(capitalize("hello")).toBe("Hello")
});

test("capitalizes multiple words", () => {
    expect(capitalize("hello world")).toBe("Hello World")
})

test("doesn't capitalize anything", () => {
    expect(capitalize("112")).toBe("112")
})