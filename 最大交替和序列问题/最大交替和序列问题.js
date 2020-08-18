/**
 * 字节跳动笔试
 * 给定一个长度为N的整数序列A1，A2,A3,...,AN,找出一段连续子序列，使得该段连续子序列的交替和最大。
 * 本题中，序列A_p,A_p+1,...,A_q的交替序列和被定义为A_(p)-A_(p+1)+ ... + (-1)^(q-p)*A_q
 */

function maxAlternateSum(nums){
	if(nums.length < 2){
		return nums[0];
	}

	var maxSum = [];
	maxSum[0] = nums[0];

	var max = nums[0];
	var p = 1;

	for(let i=1;i<nums.length;i++){
		var q = i+1;
		maxSum[i] = Math.max(nums[i],Math.pow(-1,q-p)*nums[i]+maxSum[i-1]);
		max = Math.max(max,maxSum[i]);
		
		if(nums[i] > Math.pow(-1,q-p)*nums[i]+maxSum[i-1]){
			//说明需要舍弃前面的
			p = i + 1;
		}
	}
	return max;
}

var nums = [2,3,-2,4,5,-6];
console.log(maxAlternateSum(nums));


