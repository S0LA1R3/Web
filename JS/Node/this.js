console.log(this === global)
console.log(this === module.exports)

function a(){
    console.log(this === global)
    console.log(module.exports === this)
}

const b = () => {
    console.log(this === global)
    console.log(this === module.exports)
}

a()
b()
