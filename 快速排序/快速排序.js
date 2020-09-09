/**
 * 快速排序
 */


/**
 * [quickSort description]
 * @param  {number[]} arr [description]
 * @param  {number} i   [description]
 * @param  {number} j   [description]
 * @return {void}     [description]
 */
function quickSort(arr,from,to){

	let i = from
	let j = to
	if(i >= j) return 

	//选基点
	let base = arr[from]

	while(i<j){
		//从右往左找小于base的
		while(arr[j] > base && i<j){
			j--;
		}
		//从左往右找大于base的
		while(arr[i] <= base && i<j){
			i++;
		}

		//将两者交换
		if(i<j){
			let temp = arr[j]
			arr[j] = arr[i]
			arr[i] = temp
		}

		

	}//当i=j时，退出循环

	//此时需要将base与当前i/j的数据交换
	//base选取的是数组第一个元素
	
	arr[from] = arr[i]
	arr[i] = base

	//至此，第一轮结束
	//base将数组一分为二，base左边元素小于base，base右边元素大于base
	//再对base左部分和右部分分别递归
	console.log(arr)
	quickSort(arr,from,i-1)
	quickSort(arr,i+1,to)
}


//测试
let arr = [25,84,21,47,15,27,68,35,20]
// console.log(arr)
quickSort(arr,0,arr.length-1)
// console.log(arr)