// Given an array nums.We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.

const runningSum = function (nums) {
  let answer = 0;
  return nums.map((val) => answer += val )
};

export default runningSum;
