/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	let result = [];
	nums.forEach((item, index) => {
		let nextIndex = nums.indexOf(target - item);
		if (
			nextIndex !== -1 &&
			result.indexOf(index) < 0 &&
			index !== nextIndex
		) {
			result.push(index, nextIndex);
		}
	});
	return result;
};

var nums = [3, 2, 4];

var target = 6;
console.log(twoSum(nums, target));
