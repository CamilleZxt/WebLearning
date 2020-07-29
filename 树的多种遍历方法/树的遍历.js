/**
/**
 * 树节点
 */
class TreeNode{
	constructor(value){
		this.value=value
		this.left = null
		this.right = null
	}
	
}

/**
 * [DLR 前序遍历]
 * @param {[TreeNode]} tree [树root]
 */
	function DLR(tree){
		if (!tree) {
			return ;
		}
		console.log(tree.value)
		if(tree.left){
			DLR(tree.left)
		}
		if(tree.right){
			DLR(tree.right)
		}
	}

	/**
	 * [LDR 中序遍历]
	 * @param {[TreeNode]} tree [树root]
	 */
	function LDR(tree){
		if (!tree) {
			return ;
		}
		if(tree.left){
			LDR(tree.left)
		}
		console.log(tree.value)
		if(tree.right){
			LDR(tree.right)
		}
	}

	/**
	 * [LRD 后序遍历]
	 * @param {[TreeNode]} tree [树root]
	 */
	function LRD(tree){
		if (!tree) {
			return ;
		}
		if(tree.left){
			LRD(tree.left)
		}	
		if(tree.right){
			LRD(tree.right)
		}
		console.log(tree.value)
	}

	/**
	 * [levelOrder 层次遍历]
	 * @param  {TreeNode} node1 [树root]
	 */
	function levelOrder(tree){
		if (!tree) {
			return ;
		}
		var result = [];

		let queue = [tree]
		let temp = [],res = [] // temp用于存储下一层级的节点，而res用户存储当前层级的值
		let p
		while(queue.length > 0|| temp.length > 0){
			if(queue.length === 0){// 当队列长度为0，说明当前层级所有节点已经访问过
				result.push(res)//保存当前层级的值
				queue = temp //访问下一层
				temp =[]
				res = []
			}

			p=queue.shift()
			if(p){
				res.push(p.value)
				console.log(p.value)
				temp.push(p.left)
				temp.push(p.right)
			}
		}
	}

	/**
	 * [sOrder 蛇形遍历]
	 * @param  {TreeNode} tree 
	 * @return {number[]} 
	 */
	function sOrder(tree){
		if(!tree) return []
		var result = [];

		let queue = [tree]
		let temp = [],res = [] // temp用于存储下一层级的节点，而res用户存储当前层级的值
		let p
		let flag = 1
		while(queue.length > 0|| temp.length > 0){	
			if(queue.length === 0){// 当队列长度为0，说明当前层级所有节点已经访问过
				flag = (flag === 1)?0:1
				if(flag === 1) 
					res = res.reverse()//翻转res
				result.push(res)//保存当前层级的节点值
				// result.push(res)
				queue = temp //访问下一层
				temp =[]
				res = []
				
			}

			p=queue.shift()
			if(p){
				res.push(p.value)
				temp.push(p.left)
				temp.push(p.right)
			}

		}
		return result
	}

	/**
	 * [serialize 序列化二叉树]
	 * @param  {TreeNode} root [description]
	 * @return {string} 
	 */
	function serialize(root) {
	    let result = ""
	    if(!root)
	        return "[]"
	    
	    const queue = [root]
	   	while(queue.length){
	        
	        const p = queue.shift()
	        if(p){
	            result += `${p.value},`
	            queue.push(p.left)
	            queue.push(p.right)
	        }else{
	            result += "null,";
	        }
	    }
	    result = result.substring(0,result.length-1)
	    return `[${result}]`
	};

	/**
	 * [deserialize 反序列化二叉树]
	 * @param  {string} data [description]
	 * @return {TreeNode}    
	 */
	function deserialize(data){
		if (data.length <= 2) {
		        return null;
		    }

		    const nodes = data.substring(1, data.length - 1).split(",");
		    const root = new TreeNode(parseInt(nodes[0]));
		    nodes.shift();

		    const queue = [root];
		    while (queue.length) {
		        const node = queue.shift();
		        // 第一个是左节点，节点为空，直接跳过
		        const leftVal = nodes.shift();
		        if (leftVal !== "null") {
		            node.left = new TreeNode(leftVal);
		            queue.push(node.left);
		        }
		        // 第二个是右节点，节点为空，直接跳过
		        const rightVal = nodes.shift();
		        if (rightVal !== "null") {
		            node.right = new TreeNode(rightVal);
		            queue.push(node.right);
		        }
		    }

		return root;
	}


let node1 = new TreeNode(16);
let node2 = new TreeNode(13);
let node3 = new TreeNode(20);
node1.left = node2;
node1.right = node3;

let node4 = new TreeNode(10);
let node5 = new TreeNode(15);
node2.left = node4;
node2.right = node5;

let node6 = new TreeNode(22);
node3.right = node6;

let node7 = new TreeNode(21);
let node8 = new TreeNode(26);
node6.left = node7;
node6.right = node8;
console.log("树的前序遍历")
console.log("------------------")
DLR(node1)
console.log("树的中序遍历")
console.log("------------------")
LDR(node1)
console.log("树的后序遍历")
console.log("------------------")
LRD(node1)
console.log("树的层次遍历")
console.log("------------------")
levelOrder(node1)
console.log("----------------------------------------")
console.log("树的s形遍历")
console.log("------------------")
console.log(sOrder(node1))

let node11 = new TreeNode(1)
let node12 = new TreeNode(2)
let node13 = new TreeNode(3)
node11.left = node12
node11.right = node13
let node14 = new TreeNode(4)
let node15 = new TreeNode(5)
node13.left = node14
node13.right = node15

console.log("树的序列化")
console.log("------------------")
console.log(serialize(node11))//[1,2,3,null,null,4,5,null,null,null,null]

console.log("树的反序列化")
console.log("------------------")
console.log(deserialize(serialize(node11)))//是整个树