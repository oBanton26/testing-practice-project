import { reverseString } from "./reverseString";

test ('exists', () => {
    expect(reverseString).toBeDefined();
});

test ('string to be returned reversed', () => {
    expect(reverseString('shit')).toBe('tihs');
    expect(reverseString('google')).toBe('elgoog');
    expect(reverseString('kayak')).toBe('kayak');
});