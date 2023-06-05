const pessoa = {
    nome: 'amogus',
    idade: 18,
    endereco: {
        logradouro: 'Avenida Thais Carla',
        numero: 212
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, humor = 'feliz'} = pessoa
console.log(sobrenome, humor)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// const { conta: { ag, num } } = pessoa erro
