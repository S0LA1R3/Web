function bestStudent(students){
    const medias = Object.values(students).map(function(e){
        media = e.reduce(function(a, e){
            return a + e
        }) / e.length

        return media.toFixed(2)
    })

    let maior = 0
    medias.forEach(function(e){
        if(e > maior){
            maior = e
        }
    })

    return {
        nome: Object.keys(students)[medias.indexOf(maior)],
        media: maior
    }
}

students = {
    Joao: [8, 7.6, 4.3, 6.9],
    Ana: [9, 10, 7.6, 5.3],
    Ramon: [2, 5, 6, 8]
}

console.log(bestStudent(students))
