const stringLength = require('./test');

test('to check the length of our sting', () => {
  expect(stringLength("yours")).toBeGreaterThanOrEqual(3.5);
});

test("to know string size", () => {
  expect(stringLength("how")).toBeLessThan(5);
})