// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

const isValid = function (s) {
  let valid = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s.length % 2 !== 0) {
      return false;
    }

    if (valid[s[i]]) {
      stack.push(s[i]);
    } else {
      let last = stack.pop();
      debugger;
      console.log(last, "last" + i);
      console.log(valid[last], "last[bab]" + i);

      if (s[i] !== valid[last]) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

let s = "()[]{}";
let s2 = "(]";
let s3 = "()";
let s4 = "(";

let result = isValid(s);
console.log(result);
