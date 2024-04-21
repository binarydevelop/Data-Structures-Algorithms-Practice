function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
 }
 
 function invertBinaryTree(root){
    if(root == null) return null;

      let temp = root.left;
      root.left = root.right;
      root.right = temp;

      invertBinaryTree(root.left);
      invertBinaryTree(root.right);
    return root;
 }
 
 
const tree = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
const invertedTree = invertBinaryTree(tree);
console.log(invertedTree);

// https://leetcode.com/problems/invert-binary-tree/submissions/