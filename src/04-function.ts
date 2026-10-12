function add(a: number, b: number): number{
    return a +b
}

function greet(name: string): string{
    return 'Hello, ' + name
}

function first(arr: number[]): number{
    return arr[0]
}

console.log(add(1,2))
console.log(greet('Alice'))
console.log(first([1,2,3]))

function greet2(name: string, greeting: string = 'Hello'):string{
    return `${greeting}, ${name}`
}

console.log(greet2('Bob','Hi'))

//2.4
function formatPrice(price: number, currency: string = '¥'): string{
    return `${currency}${price}`
}

function findUser(name: string, city?: string): string{
    return city ? `${name} from ${city}` : name
}

function max(...numbers: number[]): number{
    return Math.max(...numbers)
}

function logAll(...messages: string[]): void{
    messages.forEach(message => console.log(message))
}

//3.3
const formatPrice2 = (price: number, currency: string = '¥'): string => `${currency}${price}`

const findUser2 = (name: string, city?: string): string => city ? `${name} from ${city}` : name 

const max2 = (...numbers: number[]): number => Math.max(...numbers)

const logAll2 = (...messages: string[]): void => messages.forEach(message => console.log(message))

//4.4
const myList = [1,2,3,4,5]

// function addOne(list: number[]){
//     list.push(99)
// }
// addOne(myList)
// console.log(myList)

const user: { name: string } = { name: 'Alice' }

function rename(user: { name: string }, newName: string){
    user.name = newName
}
rename(user, 'Bob')
console.log(user.name)

function addOneSafe(list: number[]) {
  list = [...list, 99]
}
addOneSafe(myList)
console.log(myList)

//5.4
function addOne(list: number[]){
    list = [...list, 99]
}
function renameSafe(user: { name: string }, newName: string){
    const newUser = {...user}
    newUser.name = newName
}
function renameSafe2(user: { name: string }, newName: string): { name: string} {
    return {...user, name: newName}//同名属性，后面的覆盖前面的
}
