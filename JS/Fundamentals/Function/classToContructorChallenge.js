class Pessoa{
    constructor(name){
        this.name = name
    }

    falar(){
        console.log(`Meu nome é ${this.name}`)
    }
}

const p1 = new Pessoa('John')
p1.falar()

function pessoa(name){
    this.name = name

    this.falar = () => console.log(`Meu nome é ${this.name}`)
}

p2 = new pessoa('Senna')
p2.falar()
p2.name = 'John'
p2.falar()
