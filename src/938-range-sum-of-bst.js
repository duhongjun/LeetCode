// https://leetcode-cn.com/problems/range-sum-of-bst/
// 给定二叉搜索树的根结点 root，返回值位于范围 [low, high] 之间的所有结点的值的和。
// 输入：root = [10,5,15,3,7,null,18], low = 7, high = 15
// 输出：32
// 输入：root = [10,5,15,3,7,13,18,1,null,6], low = 6, high = 10
// 输出：23

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function (root, low, high) {
  // 解题思路：遍历树，将满足区间范围的节点值累加即可
  let sum = 0
  function match(node) {
    if (!node) return
    if (node.val < low) {
      match(node.right)
    } else if (node.val > high) {
      match(node.left)
    } else {
      sum += node.val
      match(node.left)
      match(node.right)
    }
  }
  match(root)
  return sum
};