//mapは新しい配列作成で使う

let numbers = [1, 2, 3, 4, 5]

let doubled = numbers.map(function (number) {
    return number * 2
})

console.log(doubled)


let cars = [
    {type: "軽自動車", price: "安い"},
    {type: "高級車", price: "高い"}
]

let prices = cars.map(function (car) {
    return car.price
})

console.log(prices)


//practice
let images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
];

let heights = images.map(function (image) {
    return image.height
})

console.log(heights)


let trips = [
    { distance: 34, time: 10 },
    { distance: 90, time: 50 },
    { distance: 59, time: 25 }
];

let speeds = trips.map(function (trip) {
    return trip.distance / trip.time
});

console.log(speeds)



function pluck(array, property) {
    // pluck関数の中身を実装してください
    return array.map(function (object) {
        return object[property]
    })
}

let colorObjects = [{ color: '赤' }, { color: '青' }, { color: '黄色' }];

let colorNames = pluck(colorObjects, 'color');
console.log(colorNames)
