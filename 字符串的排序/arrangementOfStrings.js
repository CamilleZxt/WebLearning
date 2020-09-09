//【剑指offer38】字符串的排列
//输入一个字符串，打印出该字符串中字符的所有排列。
​//你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

function permutation(s){
	let set = new Set([]);//ES6中Set数组可以去重
	function swap(str1,str2){
		if(!str2) return;
	    let str3 = str2[0];
		str2 = str2.slice(1);
		for(let i=0;i<=str1.length;i++){
			set.add(str1.slice(0,i)+str3+str1.slice(i,str1.length)+str2);
			swap(str1.slice(0,i)+str3+str1.slice(i,str1.length),str2)
		}
	}

	swap('',s);
	return Array.from(set); 
}

//test 
console.log(permutation("abc"));//["abc", "bac", "cba", "bca", "cab", "acb"]
console.log(permutation("aba"));//["aba", "baa", "aab"]