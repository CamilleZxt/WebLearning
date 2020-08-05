//【剑指Offer】面试题13：机器人的运动范围——JS实现
/*题目描述：
地上有一个m行和n列的方格。一个机器人从坐标0,0的格子开始移动，每一次只能向左，右，上，下四个方向移动一格，但是不能进入行坐标和列坐标的数位之和大于k的格子。 
例如，当k为18时，机器人能够进入方格（35,37），因为3+5+3+7 = 18。但是，它不能进入方格（35,38），因为3+5+3+8 = 19。请问该机器人能够达到多少个格子？
*/
//已知输入
//k为阈值
//rows为总行数
//cols为总列数
//即rows行cols列


//初始化各个值，主调用函数
function moveCount(k,rows,cols){
	if(k<0 || rows<0 || cols<0)
		return false;
	//将每个坐标初始化为false，表示机器人不能进入该坐标，若之后isCheck判断能进入，则改为true
	//定义visited，避免计算重复的坐标
	var visited = new Array();
	for(let i=0;i<rows;i++){
		visited[i] = new Array();
		for(let j=0;j<cols;j++){
			visited[i][j] = false;
		}
	}

	// console.log(visited);
		
	//从(0,0)开始
	return moveToAround(k,rows,cols,0,0,visited);
}

//机器人能进入方格后是，是否可以进入周围的四个坐标,计数
function moveToAround(k,rows,cols,row,col,visited){
	let count = 0;
	if(isCheck(k,rows,cols,row,col,visited)){
		//isCheck通过，能到达该坐标
		visited[row][col] = true;
		//递归上下左右四个位置，求总的能到达的范围
		count = 1 + moveToAround(k,rows,cols,row-1,col,visited) + moveToAround(k,rows,cols,row+1,col,visited) + moveToAround(k,rows,cols,row,col-1,visited)+ moveToAround(k,rows,cols,row,col+1,visited);
	}
	return count;
}


//判断机器人能否进入方格
function isCheck(k,rows,cols,row,col,visited){
	if(row>=0 && col>=0 && row<rows && col<cols && getDigitSum(row,col)<=k && !visited[row][col])
		return true;
	return false;
}


//将row和col转化为数字相加，判断是否超过阈值k
function getDigitSum(row,col){
	var sum = 0;
	var str = row + '' + col;
	for(let i=0;i<str.length;i++){
		//除以1，将字符转化为数字
		sum += Number(str.charAt(i));

	}
	return sum;
}


//测试
console.log(moveCount(7,2,3))
//21