export function caesarCipher (string, key) {
    const array = Array.from(string);
    let result = '';
    if (key>=26) {
        key = key % 26;
    }
    for (let char of array) {
        const charCiphered = charCipher(char, key);
        result = result + charCiphered;
    }

    return result;
};

function charCipher (char, key) {
    if (isUpperCase(char) && isLetter(char)) {
        return charCipher(char.toLowerCase(), key).toUpperCase();
    };

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    alphabet = alphabet.concat(alphabet);
    const charIndex = alphabet.indexOf(char);

    // If "it isn't in the alphabet", different from "if it isn't a letter"
    if (charIndex === -1) {
        return char;
    };
    return alphabet[charIndex+key];
};

function isUpperCase(char) {
    const upperCase = char.toUpperCase();
    return upperCase === char;
};

function isLetter(c) {
  return c.toLowerCase() != c.toUpperCase();
}