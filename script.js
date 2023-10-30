// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
let numbers = {
    I : 1
  ,  V : 5
  ,  X : 10
 ,   L : 50
 ,   C : 100
,    D : 500
,    M : 1000,
}
function romanToInt(roman){
let result = 0;
for (let i = 0; i < roman.length; i++) {
  if(numbers[roman[i]]< numbers[roman[i+1]]){
    result -= numbers[roman[i]]
  }
  else{
    result += numbers[roman[i]]
  }
}
return result
}
// console.log(romanToInt("III"))
// console.log(romanToInt("LVIII"))
// console.log(romanToInt("MCMXCIV"))