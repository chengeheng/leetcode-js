/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
	var num = [];
	nums1.concat(nums2);
	num = nums1.concat(nums2);
	num.sort((a, b) => a - b);
	if (num.length % 2 == 1) return num[(num.length - 1) / 2];
	else return (num[num.length / 2 - 1] + num[num.length / 2]) / 2;
};

var input = [[1, 2, 3], [2, 4]];
var output = findMedianSortedArrays(...input);
console.log(output);
