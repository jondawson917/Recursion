/** product: calculate the product of an array of numbers. */

function product(nums, out = 1, i = 0) {
  if (nums.length === i) return out;
  out *= nums[i];
  return product(nums, out, i + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, out = 0, i = 0) {
  if (words.length === i) return out;

  if (words[i].length > out) out = words[i].length;
  return longest(words, out, i + 1);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, out = "", i = 0) {
if(i >= str.length) return out;
 
 out+=str[i];

  return everyOther(str, out, i + 2);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, out = false, i = 0) {
  if (str.length === i) return out;
  str = str.toLowerCase();
  let middleIdx = Math.floor(str.length / 2);
  console.log(middleIdx)
  if (i !== middleIdx || str.length === 1) {
    if ((str[i] === str[str.length - i - 1]) || str.length === 1) {
     
      out = true;
    } else {
      out = false;
      return out;
    }
  }
  return isPalindrome(str, out, i + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (arr.length === i) return -1;

  if (arr[i] === val) return i;

  return findIndex(arr, val, i + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, out = "", i = 0) {
  if (str.length === i) return out;
  str = str.toLowerCase();
  out += str[str.length - 1 - i];

  return revString(str, out, i + 1);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, out=[]) {
  
  for (key in obj){
    if (typeof obj[key] === "string") out.push(obj[key]);
    if (typeof obj[key] === "object") out.push(...gatherStrings(obj[key]));
  }
return out;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, leftIdx = 0, rightIdx = arr.length - 1) {
if(rightIdx<leftIdx) return -1;

let middleIdx = Math.floor((rightIdx + leftIdx) / 2);
let middleVal = arr[middleIdx];


if(middleVal === val){
  return middleIdx;
}
else if(middleVal > val){
 return binarySearch(arr, val, leftIdx, middleIdx-1);
}
else if(middleVal < val){
 return binarySearch(arr, val, middleIdx+1, rightIdx);
}
else return -1;

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
