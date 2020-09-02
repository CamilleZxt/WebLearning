/**
         * [verifyPostorder description]
         * @param  {[]} postorder [description]
         * @return {[boolean]}           [description]
         */
        var verifyPostorder = function(postorder) {
            if(postorder.length === 0 || postorder === null){
                return false;
            }

            var root = postorder[postorder.length-1];//数组的最后一个元素为树的根节点
            var i=0;
            while(i<postorder.length-1){
                if(postorder[i]>root){
                    break;
                }
                i++;
            }

            var j=i;
            while(j<postorder.length-1){
                if(postorder[j]<root){
                    return false;
                }
                j++;
            }

            let left = true;
            if(i>0){
                var leftTree = postorder.slice(0,i);
                left = verifyPostorder(leftTree);
            }

            let right = true;
            if(i<postorder.length-1){
                var rightTree = postorder.slice(i,postorder.length-1);
                right = verifyPostorder(rightTree);
            }

            return left&&right;
        };

        /**
         * [verifyPreorder description]
         * @param  {[]} preorder [description]
         * @return {[boolean]}          [description]
         */
        var verifyPreorder = function(preorder) {
            if(!preorder){
                return false;
            }

            var root = preorder[0];//数组的第一个元素为树的根节点

            var i=1;
            while(i<preorder.length){
                if(preorder[i]>root){
                    break;
                }
                i++;
            }

            var j=i;
            while(j<preorder.length){
                if(preorder[j]<root){
                    return false;
                }
                j++;
            }


            let left = true;
            if(i>1){
                var leftTree = preorder.slice(1,i);
                left = verifyPreorder(leftTree);
            }

            let right = true;
            if(i<preorder.length){
                var rightTree = preorder.slice(i,preorder.length);
                right = verifyPreorder(rightTree);
            }

            return left&&right;
        }
//测试是否是某二叉搜索树的后序遍历
// let nums = [4, 8, 6, 12, 16, 14, 10];
// console.log(verifyPostorder(nums));
//测试是否是某二叉搜索树的前序遍历
let preorder = [8,6,5,7,10,9,11];
console.log(verifyPreorder(preorder));