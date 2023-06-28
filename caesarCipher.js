const caesarCipher = (str, fac) => {
    let new_word = ""
    str.split("").forEach(char => {
        if(!"#¤%&/()!=?*_-:.;, ".includes(char)) {
            new_word += String.fromCharCode(char.charCodeAt() + fac > 122 ? char.charCodeAt() + fac - 26 : char.charCodeAt() + fac)        
        } else {
            new_word += char
        }
    });

    return new_word;
}

module.exports = caesarCipher