export {}

const arr1 = [1, 2, 3]

const arr2 = ['a', 'b', 'c']


function first<T>(arr: T[]): T | undefined {
    return arr[0]
}

function last<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1]
}

function wrap<T>(value: T): T[] | undefined {
    return [value]
}

const a = first(arr1)
const b = first(arr2)
const c = last(arr1)
const d = last(arr2)
const e = wrap(5)
const f = wrap('hello')

console.log(a) // Output: 1
console.log(b) // Output: 'a'
console.log(c) // Output: 3 
console.log(d) // Output: 'c'
console.log(e) // Output: [5]
console.log(f) // Output: ['hello']

console.log(first([]))

