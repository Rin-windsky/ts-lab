const original = {
    name: 'A',
    address: {city: '杭州'}
}

const copy = {...original}
copy.address.city = '上海'

console.log('original.address.city:', original.address.city) 
