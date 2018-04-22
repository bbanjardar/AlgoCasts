const reverse = require('./index');

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string 1', () => {
  expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse reverses a string 2', () => {
  expect(reverse('  abcd')).toEqual('dcba  ');
});
