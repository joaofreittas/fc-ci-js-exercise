const math = require('../math.js')

test("sum successfully", () => {
    expect(35).toBe(math.sum(10, 25));
});

test("sub successfully", () => {
    expect(15).toBe(math.sub(25, 10));
});

test("sum successfully", () => {
    expect(250).toBe(math.mult(10, 25));
});

test("sub successfully", () => {
    expect(3).toBe(math.div(30, 10));
});