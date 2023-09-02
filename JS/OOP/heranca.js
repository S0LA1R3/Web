Object.prototype.d = 'd'
const grandFather = {a: 'a'}
const father = {__proto__: grandFather, b: 'b', c: 'd'}
const son = {__proto__: father, c: 'c'}

console.log(son.c, son.b, son.a, son.d)

const carro = {
    actualSpeed: 0,
    maxSpeed: 200,
    accelerate(delta){
        if(delta + this.actualSpeed < this.maxSpeed){
            this.actualSpeed += delta
        }else{
            this.actualSpeed = this.maxSpeed
        }
    },
    displaySpeed(){
        return `${this.actualSpeed}mp/h of ${this.maxSpeed}!`
    }
}

const lamborghini = {
    model: 'Galliardo',
    maxSpeed: 300
}

const porsche = {
    model: '480 Spider',
    maxSpeed: 300,
    displaySpeed(){
        return `${this.model}: ${super.displaySpeed()}`
    }
}

Object.setPrototypeOf(lamborghini, carro)
Object.setPrototypeOf(porsche, carro)

console.log(lamborghini, porsche)
lamborghini.accelerate(200)
console.log(lamborghini.displaySpeed())
porsche.accelerate(100)
console.log(porsche.displaySpeed())
