// Given the array nums consisting of 2n elements in the form[x1, x2,..., xn, y1, y2,..., yn].
// Return the array in the form[x1, y1, x2, y2,..., xn, yn]

var shuffle = function(nums, n) {
  let answer = [];

  let i = 0;
  while(i < nums.length/2) {
    answer.push(nums[i], nums[n+i])
    i++;
  }

  return answer;
}



// var shuffle = function (nums, n) {
//   const length = nums.length;
//   let end = nums.splice(length-n);
//   let answer = [];

//   let i = 0;
//   while (i < length/2) {
//     answer.push(nums[i], end[i]);
//     i++;
//   }
//   return answer;
// };

export default shuffle;
