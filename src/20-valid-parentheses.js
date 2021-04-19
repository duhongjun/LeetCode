// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：
// 输入：s = "()"
// 输出：true

// 示例 2：
// 输入：s = "()[]{}"
// 输出：true

// 示例 3：
// 输入：s = "(]"
// 输出：false

// 示例 4：
// 输入：s = "([)]"
// 输出：false

// 示例 5：
// 输入：s = "{[]}"
// 输出：true

// 解题思路： 使用栈存储括号，闭合了则清除对应项

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let arr = s.split('')
  // 奇数不可能是合法的
  if (arr % 2) return false
  const map = new Map([['}', '{'], [']', '['], [')', '(']])
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    // 说明是右括号
    if (map.has(item)) {
      if (!stack.length || stack.pop() !== map.get(item)) {
        return false
      }
    } else {
      stack.push(item)
    }
  }
  return !stack.length
};

console.log(isValid('{[([])]}'))
