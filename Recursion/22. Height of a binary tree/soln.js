class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function createSampleTree() {
    // Sample binary tree:
    //         1
    //       /   \
    //      2     3
    //     / \   / 
    //    4   5 6  
    let node4 = new TreeNode(4);
    let node5 = new TreeNode(5);
    let node6 = new TreeNode(6);
    let node2 = new TreeNode(2, node4, node5);
    let node3 = new TreeNode(3, node6, null);
    let root = new TreeNode(1, node2, node3);

    return root;
}

let root = createSampleTree();

function height(root){
    if(root === null) return 0;

    let heightOfLeftTree = height(root.left);
    let heightOfRightTree = height(root.right); 

    return 1 + Math.max(heightOfLeftTree, heightOfRightTree);
}

let treeHeight = height(root);
console.log(`Height of the binary tree is: ${treeHeight}`);