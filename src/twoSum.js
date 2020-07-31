// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.

const twoSum = (nums, target) => {
  let i = 0;
  for (i; i < nums.length; i++) {
    let firstValue = target - nums[i];
    let secondIndex = nums.indexOf(firstValue, i+1);
    if (secondIndex >= 0) {
      return [i, secondIndex]
    }
  }
};

export default twoSum;
