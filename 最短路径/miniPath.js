// 递归
function process1(matrix,i){
	 // 到达A退出递归
        if (i == 0) {
            return 0;
        }
        // 状态转移
        else{
            let distance = 999;
            for(let j=0; j<i; j++){
                if(matrix[j][i]!=0){
                    let d_tmp = matrix[j][i] + process1(matrix, j);
                    if (d_tmp < distance){
                        distance = d_tmp;
                    }
                }
            }
            return distance;
        }

}

function miniPath1(matrix){
	return process1(matrix, matrix[0].length-1);
}


const m = [[0,5,3,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,3,6,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,8,7,6,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,6,8,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,3,5,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,3,3,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,8,4,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,2,2,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,3,5,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,5,2,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,6,6,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,4],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3]]
console.log(miniPath1(m))

