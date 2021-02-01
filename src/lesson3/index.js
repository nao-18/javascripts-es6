//filter

let products = [
    {name: "きゅうり", type: "野菜", quantity: 0, price: 12},
    {name: "みかん", type: "フルーツ", quantity: 0, price: 0},
    {name: "きゅうり", type: "野菜", quantity: 30, price: 12},
    {name: "いちご", type: "フルーツ", quantity: 0, price: 2},
    {name: "きゅうり", type: "野菜", quantity: 0, price: 12},
]

let filteredProducts = products.filter(function (product) {
    return product.type === "フルーツ"
})

console.log(filteredProducts)


//野菜 かつ 量が0より多い かつ 値段が10より大きい
let filteredProduct2 = products.filter(function (product) {
    return product.type === "野菜" && product.quantity > 0 && product.price > 10
})

console.log(filteredProduct2)


//実践
let post = {
    id: 4, title: '初めての投稿です。'
}

let comments = [
    {postId: 4, content: "いいですね〜"},
    {postId: 3, content: "へえ〜"},
    {postId: 4, content: "OKデス"},
]

function commentsForPost(post, comments) {
    return comments.filter(function (comment) {
        return comment.postId === post.id
    })
}

console.log(commentsForPost(post, comments))


//practice1
let numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

let filteredNumbers = numbers.filter(function (number) {
    return number > 50
})
console.log(filteredNumbers)

//practice2
let users = [
    { id: 1, admin: true },
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
];

let filteredUsers = users.filter(function (user) {
    return user.admin === true
});
console.log(filteredUsers)
