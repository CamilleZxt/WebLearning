/**
 * 题目描述：给出一个字符串S，S中可能包含0-9和A-Z，现在我们将字符串S看作一个x进制的数字，那么字符串S就可以转化成一个十进制Sx。
 * 给定l和r（l<=r）,问Sl+Sl+1+...+Sr-1+Sr是奇数还是偶数？
 * 1<=S的总个数<=10e6
 * 2<=l<=r<=10e18
 * 涉及大数，可能要考虑溢出问题
 */


/**
 * [oddOrEven description]
 * @param  {string} str [description]
 * @param  {number} l   [description]
 * @param  {number} r   [description]
 * @return {number} 0/1    [description]
 */
function oddOrEven(str,l,r){

	let map = new Map([['A',10],['B',11],['C',12],['D',13],['E',14],['F',15],['G',16],['H',17],['I',18],['J',19],['K',20],['L',21],['M',22],['N',23],['O',24],['P',25],['Q',26],['R',27],['S',28],['T',29],['U',30],['V',31],['W',32],['X',33],['Y',34],['Z',35]]);
	// let map = new Map([['A',10]]);
	// map.set('A',11);
	// console.log(map);

	let res = new Array(r-l+1).fill(0);
	// console.log(res);

	for(let i=l;i<=r;i++){
		//如果进制是奇数，看记录多少个奇数的系数
		if(i&1){
			for(let s of str){
				if(map.has(s)){
					s = map.get(s);
				}
				//系数为奇数
				if(parseInt(s) & 1){
					res[i-l]= res[i-l]+1;
				}
			}
		}else{
			if(map.has(str[str.length-1])){
				res[i-l] += map.get(str[str.length-1]) & 1;
			}else{
				res[i-l] += parseInt(str[str.length-1]) & 1;
			}
		}
	}

	for(let j=0;j<res.length;j++){
		if(res[j]&1){
			res[j] = 1;
		}else{
			res[j] = 0;
		}
	}

	let count = 0;
	for(let j=0;j<res.length;j++){
		if(res[j] = 1){
			count++;
		}
	}

	if(count & 1){
		return 1;
	}else{
		return 0;
	}
}

let str1 = '4B';
let result = oddOrEven(str1,16,18);
console.log(result);