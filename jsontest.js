var add = function(a,b)
{return a + b}

var sub = function(a,b)
{return a - b}

var mult = function(a,b)
{return a * b}


var div = function(a,b)
{return a / b}

var squ = function(a)
{return a * a}

var math = {
  '+':add,
  '-':sub,
  '*':mult,
  '/':div,
  'x2':squ
}



// function repCalc(str){
// }

// console.log(repCalc())



// var regex = /(\d+)([\/*+-])?(\d+)?([\/*+-])?/

// var test = '61*1'.match(regex)

// console.log(test)

// function doSum(arr){
//  return math[arr[2]](Number(arr[1]),Number(+arr[3]))
// }

// console.log(doSum(test))



function extractBrackets(str){
  var obj = {0:[]}
  var open = false
  var count = 0
splitStr = str.split('')
splitStr.forEach(function(item){
  if(item==='('){
    open = true
    return}
  if(item === ')') {
    open = false
  count++
obj[count] = []}
  if(open === true){obj[count].push(item)}
 })
 return obj

}

console.log(extractBrackets('(6+3) * (7+5)'))
