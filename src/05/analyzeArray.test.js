import { experiments } from "webpack";
import { analyzeArray } from "./analyzeArray";

test ('accepts only arrays', ()=>{
    expect(analyzeArray([26,6,2000])).toBeDefined();
    expect(analyzeArray(5)).not.toBeDefined();
});

test ('gives average of the array', ()=>{
    expect(analyzeArray([1,2,3]).average).toBe(2);
    expect(analyzeArray([10,20,30]).average).toBe(20);
});

test ('only accepts arrays with numbers', ()=>{
    expect(analyzeArray(['fuck', 'you', 5, 'times'])).toBeUndefined();
});

test ('gives min', ()=>{
    expect(analyzeArray([2,8,98,17]).min).toBe(2);
    expect(analyzeArray([299,8,7,17]).min).toBe(7);
});

test ('gives max', ()=>{
    expect(analyzeArray([2,98,6,7776]).max).toBe(7776);
    expect(analyzeArray([2,98,6,777]).max).toBe(777);
});

test ('gives length', ()=>{
    expect(analyzeArray([8,7,1,65]).length).toBe(4);
    expect(analyzeArray([8,7,1,65,8,90]).length).toBe(6);
})