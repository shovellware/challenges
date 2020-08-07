import shuffle from '../shuffleArray';

const testCases = [
  {
    nums: [2, 5, 1, 3, 4, 7],
    n: 3
  },
  {
    nums: [1, 2, 3, 4, 4, 3, 2, 1],
    n: 4
  },
  {
    nums: [1, 1, 2, 2],
    n:  2
  }
]

test('Outputs [2, 3, 5, 4, 1, 7]', () => {
  expect(shuffle(testCases[0].nums, testCases[0].n)).toStrictEqual([2, 3, 5, 4, 1, 7]);
});

test('Outputs [1,4,2,3,3,2,4,1]', () => {
  expect(shuffle(testCases[1].nums, testCases[1].n)).toStrictEqual([1, 4, 2, 3, 3, 2, 4, 1]);
});

test('Outputs [1, 2, 1, 2]', () => {
  expect(shuffle(testCases[2].nums, testCases[2].n)).toStrictEqual([1, 2, 1, 2]);
});
