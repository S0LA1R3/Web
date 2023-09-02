function createPerson(){
    return{
        name: 'Jalim',
        idade: 29
    }
}

console.log(createPerson())

function createProduct(name, price){
    return{
        name,
        price,
        discount: 0.1
    }
}

console.log(createProduct('Cimitar', 129))
