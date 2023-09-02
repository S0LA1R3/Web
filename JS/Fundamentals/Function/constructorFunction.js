function car(maxSpeed = 200, acceleration = 5){
    this.actualSpeed = 0

    this.accelerate = () => {
        if (this.actualSpeed + acceleration <= acceleration){
            this.actualSpeed += acceleration
        }else{
            this.actualSpeed = acceleration
        }
    }

    this.getActualSpeed = () => this.actualSpeed
}

const uno = new car
console.log(uno.getActualSpeed())
uno.accelerate()
console.log(uno.getActualSpeed())

const ferrari = new car(400, 30)
ferrari.accelerate()
console.log(ferrari.getActualSpeed())
