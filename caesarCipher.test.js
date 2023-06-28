const caesarCipher = require("./caesarCipher")

test("ciphers one word, with factor of 1", () => {
    expect(caesarCipher("word", 1)).toBe("xpse")
});

test("no overflow", () => {
    expect(caesarCipher("zzz", 1)).toBe("aaa")
});

test("different key", () => {
    expect(caesarCipher("hello world", 11)).toBe("spwwz hzcwo")
});


test("punctuation", () => {
    expect(caesarCipher("Hello, world!", 5)).toBe("Mjqqt, btwqi!")
});



