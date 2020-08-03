/**
 * 剑指offer:08
 * 题目描述:给定一个二叉树和其中一个节点，如何找出中序遍历序列的下一个节点？
 * 树的节点除了左右子节点的指针，还有指向父节点的指针
 */


/**
 * [TreeNode 树的节点定义]
 * @param {[type]} val [description]
 */
function TreeNode(val){
	this.val = val;
	this.left = null;
	this.right = null;
	this.parent = null;
}

function getNextNode(node){
	if(node == null)
		return null;

	let nextNode = new TreeNode();

	//node节点有右子树，则一直沿着右子节点的左树往下遍历，找最后一个左节点，即为node的下一个节点
	if(node.right != null){
		let rightNode = node.right;

		while(rightNode.left != null)
			rightNode = rightNode.left;

		nextNode = rightNode;
	}else if (node.parent != null) {
		//node没有右子树，但有父节点
		//若node是其父节点的左子节点，则父节点就是下一个节点
		//若node是其父节点的右子节点，则向上遍历，找到节点m，其父节点为n，m是n的左子节点，则n即为下一个节点
		let currentNode = node;
		let parentNode = node.parent;
		
		while(parentNode != null && currentNode == parentNode.right){
			currentNode = parentNode;
			parentNode = parentNode.parent
		}

		nextNode = parentNode;
	}
	return nextNode;
}

let node1 = new TreeNode('a');
let node2 = new TreeNode('b');
let node3 = new TreeNode('c');
node1.left = node2;
node1.right = node3;
node2.parent = node1;
node3.parent = node1;

let node4 = new TreeNode('d');
let node5 = new TreeNode('e');
node2.left = node4;
node2.right = node5;
node4.parent = node2;
node5.parent = node2;

let node6 = new TreeNode('f');
let node7 = new TreeNode('g');
node3.left = node6;
node3.right = node7;
node6.parent = node3;
node7.parent = node3;
let node8 = new TreeNode('h');
let node9 = new TreeNode('i');
node5.left = node8;
node5.right = node9;
node8.parent = node5;
node9.parent = node5;

console.log(getNextNode(node2).val);//h
console.log(getNextNode(node4).val);//b
console.log(getNextNode(node9).val);//a


