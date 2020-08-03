/**
 * 剑指offer09：两个队列实现一个栈
 */

/**
 * [CStack 定义队列结构]
 */
function CStack(){
	this.queue1 = [];
	this.queue2 = [];
}

/**
 * [push 压入栈]
 * @param  {number} value
 * @return {void} 
 */
CStack.prototype.push = function(value) {
    this.queue1.push(value)
};

/**
 * [pop 弹出栈]
 * @return {number}
 */
CStack.prototype.pop = function(){
	if(this.queue1.length){
		let len = this.queue1.length-1;
		for(let i=0;i < len;i++){
			this.queue2.push(this.queue1.shift())
		}
		return this.queue1.shift()
	}
	
	if(this.queue2.length){
		for(let i=0;i<this.queue2.length-1;i++){
			this.queue1.push(this.queue2.shift())
		}
		return this.queue2.shift()
	}

	return -1
}

//测试
var obj = new CStack()
obj.push(1)
obj.push(2)
obj.push(3)
console.log(obj.queue1)//[1,2,3]
console.log(obj.queue2)//[]

var param_2 = obj.pop()
console.log(param_2)//3
console.log(obj.queue1)//[]
console.log(obj.queue2)//[1,2]

var param_3 = obj.pop()
console.log(param_3)//2
console.log(obj.queue1)//[1]
console.log(obj.queue2)//[]

obj.push(4)
console.log(obj.queue1)//[1,4]
console.log(obj.queue2)//[]

var param_4 = obj.pop()
console.log(param_4)//4
console.log(obj.queue1)//[]
console.log(obj.queue2)//[1]
