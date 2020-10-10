// 给你一个字符串 s 和一个 长度相同 的整数数组 indices 。

// 请你重新排列字符串 s ，其中第 i 个字符需要移动到 indices[i] 指示的位置。

// 返回重新排列后的字符串。

// 输入：s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// 输出："leetcode"
// 解释：如图所示，"codeleet" 重新排列后变为 "leetcode" 。

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

// 思路1: 循环处理, 每次把当前字母放到正确的位置即可
var restoreString = function (s, indices) {
  let result = s
  for (let i = 0, len = s.length; i < len; i++) {
    const pos = indices[i]
    result = result.slice(0, pos) + s.charAt(i) + result.slice(pos + 1)
  }
  return result
};

// 思路2: 新建一个数组, 每次处理一个字母, 最后转成字符串
var restoreString = function (s, indices) {
  let result = []
  for (let i = 0, len = s.length; i < len; i++) {
    result[indices[i]] = s[i]
  }
  return result.join('')
};

console.log(restoreString1('codeleet', [4, 5, 6, 7, 0, 2, 1, 3]))
