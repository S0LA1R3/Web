valor = 'Global'

function global(){
    console.log(valor)
}

function local(){
    local = 'Local'
    global()
}

local()
