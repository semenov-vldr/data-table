let str = "AAAABBBCCDAABBB";

function uniqueInOrder (iterable) {
  let arrSrt = iterable.split('');

 let filterArr = arrSrt.filter(el => el === "A" || "B")

  return filterArr
}




//console.log(uniqueInOrder(str))
//
//
// // uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// // uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// // uniqueInOrder([1,2,2,3,3])       == [1,2,3]
