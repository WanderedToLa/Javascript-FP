const products = [
    {name: 'short sleeve' , price: 15000},
    {name: 'long sleeve' , price: 50000},
    {name: 'phone case' , price: 20000},
    {name: 'hoodie' , price: 65000},
    {name: 'pants' , price: 125000},
]

let names = []
for (const item of products) {
    names.push(item.name)
}
console.log(names , 'names')

let prices = []
for (const item of products) {
    prices.push(item.price)
}
console.log(prices , 'prices')

/**
 * @description
 * Functional Programming 에서 주의할 사항은
 * 최대한 인자와 return 값으로 상호간 소통 할 것
 */

const map = (f , iter) => {
    let res = [];
    for (const a of iter) {
        res.push(f(a))
    }
    return res
}

map(p => p.name , products)