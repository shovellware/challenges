import runningSum from '../runningSum';

const testCases = [
  [1, 2, 3, 4],
  [2, 3, 2],
  [9, 4, 13, 5, 99, 23, 7, 19],
  [1, 2, 1],
  [8, 0, 1],
  [22, 23]
]
const nums = [1, 2, 3, 4];

test('Outputs [1, 3, 6, 10]', () => {
  expect(runningSum(testCases[0])).toEqual(expect.arrayContaining([1, 3, 6, 10]));
});

test('Outputs [2, 5, 7]', () => {
  expect(runningSum(testCases[1])).toEqual(expect.arrayContaining([2, 5 ,7]));
});

test('Outputs [9, 13, 26, 31, 130, 153, 160, 179]', () => {
  expect(runningSum(testCases[2])).toEqual(expect.arrayContaining([9, 13, 26, 31, 130, 153, 160, 179]));
});

test('Outputs [1, 3, 4]', () => {
  expect(runningSum(testCases[3])).toEqual(expect.arrayContaining([1, 3, 4]));
});

test('Outputs [8, 8, 9]', () => {
  expect(runningSum(testCases[4])).toEqual(expect.arrayContaining([8, 8, 9]));
});


test('Outputs [22, 45]', () => {
  expect(runningSum(testCases[5])).toEqual(expect.arrayContaining([22, 45]));
});