// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.


function longestCommonPrefix(strs) {
    let result = [];
    for (let i = 0; i < strs[0].length; i++) {
        let match = true;
        for (let j = 1; j < strs.length; j++) {
            console.log(strs[0][i] ,"== " ,strs[j][i])
           if(strs[0][i] !== strs[j][i]){
            match = false;
           } 
        }
        if(match == true){
            result.push(strs[0][i])
        }else{
            break;
        }
       
    }
    return result
};
let strs = ["flower","flow","flight","float"]
//  let strs = ["dog","racecar","car"]
console.log(longestCommonPrefix(strs))