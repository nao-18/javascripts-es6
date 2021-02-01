let colors = [
    "red",
    "blue",
    "yellow"
]

colors.forEach(function (color) {
    console.log(color)
})


let numbers = [1, 2, 3, 4, 5]
let sum = 0

function adder(number) {
    sum += number
}

numbers.forEach(adder)

console.log(sum)



function handlePosts() {
    let posts = [
        { id: 23, title: 'JSニュース' },
        { id: 52, title: 'リファクター・シティ' },
        { id: 105, title: 'Rubyの良いところ' }
    ];

    function savePost(post) {
        //何か処理
    }

    // for (var i = 0; i < posts.length; i++) {
    //     savePost(posts[i]);
    // }
    posts.forEach(savePost)
}