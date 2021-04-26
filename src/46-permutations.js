// 给定一个 没有重复 数字的序列，返回其所有可能的全排列。
// 输入: [1,2,3]
// 输出:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

// 思路：循环整个数组，将每个数提到第一位，然后将剩下的数字进行全排列。递归即可得出答案
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function permute(nums) {
    let res = []
    perm(nums, 0, nums.length - 1, res)
    return res
}

var perm = function (nums, p, q, result) {
    if (p === q) {
        result.push(nums.slice(0))
        return
    }
    for (let i = p; i <= q; i++) {
        swap(nums, p, i)
        perm(nums, p + 1, q, result)
        swap(nums, p, i)
    }
    return result
};

function swap(arr, p, q) {
    let temp = arr[p]
    arr[p] = arr[q]
    arr[q] = temp
}

console.log(permute([1]))