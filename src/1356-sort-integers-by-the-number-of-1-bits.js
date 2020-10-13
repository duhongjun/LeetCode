// 给你一个整数数组 arr 。请你将数组中的元素按照其二进制表示中数字 1 的数目升序排序。
// 如果存在多个数字二进制中 1 的数目相同，则必须将它们按照数值大小升序排列。
// 请你返回排序后的数组。

// 示例 1：

// 输入：arr = [0,1,2,3,4,5,6,7,8]
// 输出：[0,1,2,4,8,3,5,6,7]
// 解释：[0] 是唯一一个有 0 个 1 的数。
// [1,2,4,8] 都有 1 个 1 。
// [3,5,6] 有 2 个 1 。
// [7] 有 3 个 1 。
// 按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]
// 示例 2：

// 输入：arr = [1024,512,256,128,64,32,16,8,4,2,1]
// 输出：[1,2,4,8,16,32,64,128,256,512,1024]
// 解释：数组中所有整数二进制下都只有 1 个 1 ，所以你需要按照数值大小将它们排序。
// 示例 3：

// 输入：arr = [10000,10000]
// 输出：[10000,10000]

// 解题思路1: 将所有数字都转换为二进制数然后升序排列, 然后根据1的数量进行排序.

/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    const match1 = a.toString(2).match(/1/g) || []
    const match2 = b.toString(2).match(/1/g) || []
    if (match1.length === match2.length) {
      return a - b
    }
    return match1.length - match2.length
  })
};

// 解题思路2: 利用位运算, 更高效
var sortByBits = function (arr) {
  // 汉明重量: 一串符号中非零符号的个数
  const hammingWeight = n => {
    let count = 0
    while (n) {
      // 按位与: 同位的值都为1, 才返回1, 否则返回0
      // 所以相邻的两个数 n 和 n-1进行按位与, 每次都会去掉最右边的一个1, 直到按位与的结果为0
      n &= n - 1
      count++
    }
    return count
  }
  return arr.sort((a, b) => {
    const len1 = hammingWeight(a)
    const len2 = hammingWeight(b)
    if (len1 === len2) {
      return a - b
    }
    return len1 - len2
  })
};


console.log(sortByBits([2, 3, 5, 7, 11, 13, 17, 19]))