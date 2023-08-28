const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar()
module.exports['saudacao'] = 'Bom dia!'
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()

function Pessoa(){
    this.idade = 0
    self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000)
}
new Pessoa
