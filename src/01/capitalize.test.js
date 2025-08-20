import { capitalize } from "./capitalize";

test('exists', () => {
    expect(capitalize).toBeDefined();
});

test ('returns first letter capitalized of a set of strings', () => {
    const listOfString = [
        { input: 'banana', expected: 'B'},
        { input: 'fuck you', expected: 'F'},
        { input: 'shabadada', expected: 'S'}
    ];
    listOfString.forEach((string)=>{
        expect(capitalize(string.input)).toBe(string.expected);
    })
});

test ('returns undefined if the input is not a string', () => {
    expect(capitalize(5)).toBeUndefined();
    expect(capitalize(['chouchou'])).toBeUndefined();
})