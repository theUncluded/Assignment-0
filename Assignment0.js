//Rich Palestri

/*
Q0)
function greetFriend(name) {
  return console.log('Hello %s', name);
}
  // Do not edit this line;
  module.exports = greetFriend;
 
  greetFriend("Vivian");

*/

/*
Q1)
 function titleCaseEdit(title) {
 var splitSent = title.split(" ");
 
 for (let i=0; i<splitSent.length; i++){
   splitSent[i] = splitSent[i][0].toUpperCase()+ splitSent[i].substr(1);
 }
 
 splitSent.join(" ");
 return console.log(splitSent);
}
 
titleCaseEdit("the cow jumped over the moon");
*/

/*
Q2)
function subtractFive(num){
  return num-5;
}
 
console.log(subtractFive(21));
*/

/*
Q3)
function cutInHalfAndFloor(num){
  num= num/2;
  num= num - .5;
  return num;
}
 
console.log(cutInHalfAndFloor(23));
*/

/*
Q4)
 function countOfAllBooleans(arr) {
  var numOfBool=0;
  for(var i=0;i<arr.length; i++){
    if(arr[i]==true || arr[i]==false)
      numOfBool++;
  }
  return numOfBool;
}
 
console.log(countOfAllBooleans(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))
*/

/*
Q5)
 function countOfAllBooleansAndStrings(arr) {
  var numOfBoolAndString=0;
  for(var i=0;i<arr.length; i++){
    if(arr[i]==true || arr[i]==false || typeof arr[i]==='string' || arr[i] instanceof String)
      numOfBoolAndString++;
  }
  return numOfBoolAndString;
}
 
console.log(countOfAllBooleansAndStrings(["hello", "world", 3, "nice", 99, Infinity, -Infinity, true, true, true, false]))
*/

/*
Q6)
function countOfAllNumbersSmallerThanTarget(nums){
  var countOfNumsSmaller=0;
  nums.target = 18;
  for(var i =0; i<nums.length; i++){
    if(nums[i] < nums.target)
      countOfNumsSmaller++;
  }
  return countOfNumsSmaller;
}
 
console.log(countOfAllNumbersSmallerThanTarget([1,5,3,2,20,18], 18));

*/


/*
Q7)
function countOfAllIndexMatchingNumbers(nums){
  var index =0;
  var count =0;
 
  for(var i=0; i<nums.length;i++){
    if(index==nums[i]){
      count++;
    }
 
    index++;
  }
  return count;
}
 
console.log(countOfAllIndexMatchingNumbers([0,1,2,3,4,5,77]))
*/

/*
Q8)
function sumOfAllEvenNumbers(nums){
  var countOfEven=0;
  for(var i=0;i<nums.length;i++){
    if(nums[i]%2==0)
      countOfEven++;
  }
  return countOfEven;
}
 
console.log(sumOfAllEvenNumbers([2,4,6,7,8,9,10]));

*/

/*
Q9)
function sumOfAllOddNumbers(nums){
  var countOfOdd=0;
  for(var i=0;i<nums.length;i++){
    if(nums[i]%2==1 || nums[i]==1)
      countOfOdd++;
  }
  return countOfOdd;
}
 
console.log(sumOfAllOddNumbers([2,4,6,7,8,9,10]));
*/

/*
Q10)
function sumOfNumsWithinARange(nums,start,end){
 
  start = nums[0];
  end = nums[nums.length];
 
  var count=0;
  for(var i=0;i<nums.length;i++){
    if(nums[i] < end && nums[i] > start){
        count++;
    }
  }
  return count;
}
 
console.log(sumOfNumsWithinARange([2,4,6,9,11]));
*/
/*
Q11)
 function sumOfMinimumAndMaximum(nums) {
   var min, max;
  for(var i=0;i<nums.length;i++){
    for(var j=nums.length;j>=0;j--){
      if(nums[j]>nums[i])
        max=nums[j];
      else if (nums[j] < nums[i])
        min=nums[j];
    }
  }
  return min+max;
  }
 
 
console.log(sumOfMinimumAndMaximum([2,5,9]));

*/
/*
Q12
function fizzBuzz(start,end){
for(var i = start; i<=end;i++){
  if(i%3==0 && i%5==0)
    console.log("FizzBuzz ");
  else if(i%3==0)
    console.log("Fizz ");
  else if(i%5==0)
  console.log("Buzz ");
  else
  console.log(i);
}  
}
 
fizzBuzz(1,20);
 
// I see you're a Tom Scott viewer, love his videos!

*/
/*
Q13
function isPalindrome(word){
  var boolCount = 0;
 
  var newString = "";
  for (var i = word.length - 1; i >= 0; i--) {
      newString += word[i];
  }
 
  for(var i=0; i<word.length;i++){
    if(word[i]==newString[i])
      boolCount++;
  }
 
 
 
  if(boolCount==word.length)
  return true;
  else
  return false;
 
}
 
if(isPalindrome("Teflon")==true)
console.log("True");
else
console.log("False");

*/
/*Q14
function frequencyCounter(word){
  for(var i=0;i<word.length;i++){
    console.log(word.charAt(i), i);
  }
}

frequencyCounter("apple");
*/
/*Q15
class MySolution {
  countDownSum(num){
    var sum=num;
    for(var i=num;i>0;i--){
      sum = sum + i;
    }
    return sum-num;
  }
}

let studentSolution = new MySolution();
console.log(studentSolution.countDownSum(6));
*/
 /*Q16
function productOfAnyAmountOfNumbers(...args) {
  var product=1;
  let argArr= args;
    for(var i=0;i<args.length;i++)
      product=argArr[i]*argArr[i+1];
                                                                this is wrong, struggling with ...args in the function
    return product;
  }


console.log(productOfAnyAmountOfNumbers([3,2,4]))
*/
//Q17
/* Q18
function pairSum(nums,target){
  if(nums[0]+nums[1]==target)
  return true;
  else
  return false;
}
if (pairSum([5,5],10)==true)
  console.log("True");
  */
 /*Q19 
 class MySolution{
   constructor(){
     this.flag=false;
   }

   binarySearch(nums,target){
     for(var i=0; i<nums.length; i++){
       if(nums[i]==target){
         console.log("True");
        return true;
       }
     }
     return false;
   }
 }

 let studentSolution = new MySolution();
 studentSolution.binarySearch([1,2,3,4,5],5);
 */