//【剑指offer49】丑数问题
/**题目描述
把只包含质因子2、3和5的数称作丑数（Ugly Number）。例如6、8都是丑数，但14不是，因为它包含质因子7。 
习惯上我们把1当做是第一个丑数。求按从小到大的顺序的第N个丑数。
*/

/**
解题思路：
丑数一定由另一个丑数乘以2或者乘以3或者乘以5得到，那么我们从1开始乘以2,3,5，就得到2,3,5三个丑数，从这三个丑数出发乘以2,3,5就得到4，6,10,6，9,15,10,15,25九个丑数，我们发现这种方式得到的丑数有重复的数据。再来看题目，说从小到大的顺序输出第n个丑数，所以我们可以从每次计算后的结果里面取到最小的一个丑数，那关键是怎么每次都取到最小的一个丑数？我们创建一个数组，用存放丑数，再创建三个指针，分别代表乘以2，乘以3，乘以5的丑数位置，然后再让这个丑数乘以2，3，5后的结果比较大小，取最小的一个放进数组，同时移动相应的位置。
*/

//解法一：按顺序判断每个整数是不是丑数
//判断一个数是不是整数
function isUglyNumber(number){
	while(number%2 == 0){
		number = number/2;
	}
	while(number%3 == 0){
		number = number/3;
	}
	while(number%5 == 0){
		number = number/5;
	}

	return ((number == 1)?true:false);
}
 console.time('getUglyNumber_solution1');//开始计时
//按顺序判断每个整数
function getUglyNumber_solution1(index){
	if(index <=  0){
		return 0;
	}

	var number = 0;
	var uglyFound = 0;
	while(uglyFound < index){
		number = number + 1;
		if(isUglyNumber(number)){
			uglyFound = uglyFound + 1;
			// console.log(uglyFound + ":" + number);//打印出每个丑数
		}
	}

	return number;
}

//测试解法1
console.log(getUglyNumber_solution1(1500));
//解法一：对每个整数都进行了计算是不是丑数，时间效率低
console.timeEnd('getUglyNumber_solution1');//结束计时，用来测试解法一花费的时间


// 
// 解法二：创建数组保存已经找到的丑数，用空间来换时间
 console.time('getUglyNumber_solution2');//开始计时
function getUglyNumber_solution2(index){
	if(index <= 0){
		return 0;
	}
	//前6个数都是丑数：1，2，3，4，5，6
	if(index < 7){
		return index;
	}

	//计算下一个丑数的位置
	let p2=0,p3=0,p5=0;
	let res = [] ; //存放排好序的丑数
	res[0]=1;
	for(let i=1;i<index;i++){
		//取最小值
		res[i] = Math.min(res[p2]*2,Math.min(res[p3]*3,res[p5]*5));

		//移动相应位置
		if(res[i] === res[p2]*2) p2++	
		if(res[i] === res[p3]*3) p3++	
		if(res[i] === res[p5]*5) p5++	
	}
	return res[index-1];
}


//测试解法2
console.log(getUglyNumber_solution2(1500));
console.timeEnd('getUglyNumber_solution2');//结束计时，用来测试解法二花费的时间