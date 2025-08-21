import { calculator } from "./calculator";

test('exists', () => {
    expect(calculator).toBeDefined();
});

test('adds two numbers', () => {
    expect(calculator.add(26, 14)).toBe(40);
    expect(calculator.add(6, 78)).toBe(84);
});

test('sustract two numbers', ()=>{
    expect(calculator.substract(26,6)).toBe(20);
    expect(calculator.substract(89,29)).toBe(60);
});

test('divides two numbers', ()=>{
    expect(calculator.divide(80,4)).toBe(20);
    expect(calculator.divide(45,3)).toBe(15);
    expect(calculator.divide(0, 6767)).toBe(0);
})

test('prevents dividing by 0', ()=> {
    expect(calculator.divide(56, 0)).toBeUndefined();
})

test('multiplies two numbers', ()=>{
    expect(calculator.multiply(2,3)).toBe(6);
    expect(calculator.multiply(10,9)).toBe(90);
})