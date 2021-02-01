//find 見つかった時点で次の処理はされない
//1
// let users = [
//     {name: "二郎"},
//     {name: "一郎"},
//     {name: "三郎"},
// ]
//
// let foundUser = users.find(function (user) {
//     return user.name === "二郎"
// })
//
// console.log(foundUser)

//2
function Car(model) {
    this.model = model
}

let cars = [
    new Car("アクア"),
    new Car("プリウス"),
    new Car("ノート"),
]

let foundCar = cars.find(function (car) {
    return car.model === "プリウス"
})

console.log(foundCar)


//3
let posts = [
    {id: 1, title: "初めて投稿しました。"},
    {id: 2, title: "二回目の投稿しました。"},
    {id: 3, title: "三回目の投稿しました。"},
]

let comment = {
    postId: 2,
    content: "いいね〜"
}

function postForComment(posts, comment) {
    return posts.find(function (post) {
        return post.id === comment.postId
    })
}

console.log(postForComment(posts, comment))


//practice1
let users = [
    { id: 1, admin: false },
    { id: 2, admin: false },
    { id: 3, admin: true }
];

let admin = users.find(function (user) {
    return user.admin === true
});
console.log(admin)



//practice2
let accounts = [
    { balance: -10 },
    { balance: 12 },
    { balance: 0 }
];

let account = accounts.find(function (account) {
    return account.balance === 12
});
console.log(account)