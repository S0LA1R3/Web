for (var i = 1; i <= 10; i++)
    console.log(i)
console.log('i = ', i)

for (let c = 1; c <= 10; c++)
    console.log(c)
// console.log('c = ', c) erro

const funcs = []
for (var i = 0; i < 10; i++) {
    funcs.push(function() {
        console.log(i)
    })
}

funcs[2]()
funcs[8]()
