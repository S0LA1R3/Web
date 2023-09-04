// funciona assim como o for in em python
array = ['a', 'b', 'c']
for(let a of array){
    console.log(a)
}

object = {
    a: 'b',
    c: 'd',
    f: 'e'
}

for(let [key, vl] of Object.entries(object)){
    console.log(key, vl)
}
