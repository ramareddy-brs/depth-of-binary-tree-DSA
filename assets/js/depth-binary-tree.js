function calculateDepth() {
  const treeInput = document.getElementById('treeInput').value;

  const root = JSON.parse(treeInput);

  // Call the function to calculate the maximum depth
  const depth = maxDepth(root);

  // Display the result
  document.getElementById('result').innerText = 'Maximum Depth: ' + depth;
}

function maxDepth(root) {
  if (!root) {
    return 0;
  }

  const leftDepth = maxDepth(root.left);
  const rightDepth = maxDepth(root.right);

  return 1 + Math.max(leftDepth, rightDepth);
}
