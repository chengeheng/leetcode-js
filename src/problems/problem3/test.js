/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	let arr = s.split("");
	let res = 0;
	while (arr.length > 0) {
		let middleArr = [];
		let i = 0;
		while (arr[i] && middleArr.indexOf(arr[i]) < 0) {
			middleArr.push(arr[i]);
			i++;
		}
		arr.splice(0, 1);
		if (res < middleArr.length) res = middleArr.length;
	}
	return res;
};

var input = "asda";
var output = lengthOfLongestSubstring(input);
console.log(output);
