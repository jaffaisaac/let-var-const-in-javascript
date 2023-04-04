// sscope in javascrip

// let and const are block scope ,can be only accesed inside parenthesis
// var is a globe scope
{
    let  a =10
    const b=`joy`
    var c =[1,2,3,4]
}
console.log(c ) //[1,2,3,4]
console.log(a)//a is not defined
console.log(b)//b is not defined