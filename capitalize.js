const capitalize = (word) => {
    let words = word.split(" ")
    for(let i=0;i<word.split(" ").length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ")
}

module.exports = capitalize