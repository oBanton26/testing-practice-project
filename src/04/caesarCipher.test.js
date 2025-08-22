import { caesarCipher } from "./caesarCipher";

test('works with basic lower string words', ()=>{
    expect(caesarCipher('shoot',6)).toBe('ynuuz');
    expect(caesarCipher('abc', 3)).toBe('def');
});

test('loops over the alphabet', ()=>{
    expect(caesarCipher('xyz',3)).toBe('abc');
});

test('works with big keys', ()=>{
    expect(caesarCipher('abc', 25)).toBe('zab');
    expect(caesarCipher('xyz', 75)).toBe('uvw');
});

test('accepts and cipher characters in capitals', ()=>{
    expect(caesarCipher('aBc', 3)).toBe('dEf');
});

test('accepts special characters and dont modify them', ()=>{
    expect(caesarCipher('ab c', 9)).toBe('jk l');
    expect(caesarCipher('ab!c', 9)).toBe('jk!l');
    expect(caesarCipher('échange', 9)).toBe('élqjwpn');
});

test('works with full sentences', ()=>{
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})