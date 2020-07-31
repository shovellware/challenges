import twoSum from '../twoSum';

const testCases = [
	{
		target: 9,
		nums: [2, 7, 11, 15]
	},
	{
		target: 6,
		nums: [3, 2, 3]
	},
	{
		target: 6,
		nums: [3, 2, 4]
	},
	{
		target: 12,
		nums: [11, 7, 8, 2, 29, 16, 4, 33, 10]
	}
];

test('Outputs [0, 1]', () => {
    expect(twoSum(testCases[0].nums, testCases[0].target)).toEqual(expect.arrayContaining([0, 1]));
});

test('Outputs [0, 2]', () => {
	expect(twoSum(testCases[1].nums, testCases[1].target)).toEqual(expect.arrayContaining([0, 2]));
});

test('Outputs [1, 2]', () => {
	expect(twoSum(testCases[2].nums, testCases[2].target)).toEqual(expect.arrayContaining([1, 2]));
});

test('Outputs [2, 6]', () => {
	expect(twoSum(testCases[3].nums, testCases[3].target)).toEqual(expect.arrayContaining([2, 6]));
});
