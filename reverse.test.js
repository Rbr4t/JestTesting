const reverse = require("./reverse");

test("reverses a word", () => {
    expect(reverse("hello")).toBe("olleh")
});

test("reverses multiple words", () => {
    expect(reverse("hello world")).toBe("dlrow olleh")
});

