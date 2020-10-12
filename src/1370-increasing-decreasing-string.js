// 给你一个字符串 s ，请你根据下面的算法重新构造字符串：

// 从 s 中选出 最小 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最小 的字符，且该字符比上一个添加的字符大，将它 接在 结果字符串后面。
// 重复步骤 2 ，直到你没法从 s 中选择字符。
// 从 s 中选出 最大 的字符，将它 接在 结果字符串的后面。
// 从 s 剩余字符中选出 最大 的字符，且该字符比上一个添加的字符小，将它 接在 结果字符串后面。
// 重复步骤 5 ，直到你没法从 s 中选择字符。
// 重复步骤 1 到 6 ，直到 s 中所有字符都已经被选过。
// 在任何一步中，如果最小或者最大字符不止一个 ，你可以选择其中任意一个，并将其添加到结果字符串。
// 请你返回将 s 中字符重新排序后的 结果字符串 。

// 提示：
// 1 <= s.length <= 500
// s 只包含小写英文字母。

// 示例 1：

// 输入：s = "aaaabbbbcccc"
// 输出："abccbaabccba"
// 解释：第一轮的步骤 1，2，3 后，结果字符串为 result = "abc"
// 第一轮的步骤 4，5，6 后，结果字符串为 result = "abccba"
// 第一轮结束，现在 s = "aabbcc" ，我们再次回到步骤 1
// 第二轮的步骤 1，2，3 后，结果字符串为 result = "abccbaabc"
// 第二轮的步骤 4，5，6 后，结果字符串为 result = "abccbaabccba"

// 解题思路1：先给字符串排好序，然后封装一个处理函数, 递归处理即可;
// 处理函数的主要区别就是先从大到小拼接, 再从小到大拼接.
/**
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let strArr = s.split('').sort()

  function parse(strArr, flag) {
    let res = ''
    let temp = ''
    if (strArr.length === 0) return ''
    strArr = strArr.filter((item) => {
      if (temp !== item) {
        temp = item
        flag ? res += item : res = item + res
        return false
      }
      return true
    })
    return res + parse(strArr, !flag)
  }

  return parse(strArr, true)
};

// 解题思路2: 利用Map有序的特点, 先将整个str循环添加到map中, 然后循环map, 和上面的方法大同小异

var sortString = function (s) {
  const map = new Map()
  s.split('').sort().forEach((item) => {
    let val = map.get(item) || 0
    map.set(item, val + 1)
  })

  function parse(flag) {
    let res = ''
    if (map.size === 0) return ''

    for (let [key, value] of map) {
      flag ? res += key : res = key + res
      if (value > 1) {
        map.set(key, value - 1)
      } else {
        map.delete(key)
      }
    }
    return res + parse(!flag)
  }

  return parse(true)
};

// 解题思路3: 构建一个数组桶, 不断正反遍历插入结果数组
var sortString = function (s) {
  const arrs = new Array(26).fill(0)
  const result = []
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  for (let i = 0, len = s.length; i < len; i++) {
    // a 从97开始, 处理成0, 便于使用
    const code = s[i].charCodeAt() - 97
    arrs[code] += 1
  }
  while (result.length < s.length) {
    for (let i = 0; i < 26; i++) {
      if (arrs[i] === 0) continue
      result.push(alphabet[i])
      arrs[i] -= 1
    }
    for (let i = 25; i >= 0; i--) {
      if (arrs[i] === 0) continue
      result.push(alphabet[i])
      arrs[i] -= 1
    }
  }
  return result.join('')
};
console.log(sortString('aaaabbbbcccc'))