/**【剑指 Offer 58 - I. 翻转单词顺序】
 * 给定一个字符串，逐个翻转字符串中的每个单词。
 * 例如，输入："This is a good example"，输出："example good a is This"。如果有多余的空格需要删除。
 */

/**
 * 思路1：该题分为拆模块和做翻转两部分
 * 拆模块：利用字符串的split方法
 * 做翻转：一个for循环
 */

function reverseString(reverseStr){
	if(reverseStr == "")
		return "";
	var str = reverseStr.split(' ').filter(item => item !="");
	
	var i=0;
	var j=str.length-1;

	while(i!=j && i+1!=j){
		let temp = str[i];
		str[i] = str[j];
		str[j] = temp;
		i++;
		j--;
	}

	return str.join(" ");

}
console.log(reverseString('This is   a good example'));


