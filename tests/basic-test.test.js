const sum = require('../src/basic-file');

test('basic addition test in jest',() => {
	expect(sum(1,2)).toBe(3);
});
