function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function maxDepth(root) {
  if (root === null) {
      return 0;
  }

  let leftDepth = maxDepth(root.left);
  let rightDepth = maxDepth(root.right);
  
  return Math.max(leftDepth, rightDepth) + 1;
}

let root = new TreeNode(1);
root.left = new TreeNode(9);
root.right = new TreeNode(20);
root.right.left = new TreeNode(15);
root.right.right = new TreeNode(7);

let result = maxDepth(root);
console.log(result); 