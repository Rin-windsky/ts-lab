let num1 = 10
let num2 = num1
num2 = 20
console.log('A:',num1,num2)

let str1 = 'hello'
let str2 = str1
str2 = 'world'
console.log('B:',str1,str2)

const user1 = {name: '小明'}
const user2 = user1
user2.name = '小红'
console.log('C:',user1.name,user2.name)

const arr1 = [1,2,3]
const arr2 = arr1
arr2.push(4)
console.log('D:',arr1,arr2)