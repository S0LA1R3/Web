const anonymous = process.argv.indexOf('-a') !== -1

if(anonymous){
    process.stdout.write('Hello, Anonymous!\n')
    process.exit()
}else{
    process.stdout.write('Enter your name: ')
    process.stdin.on('data', data => {
        const name = data.toString().replace('\n', '')

        process.stdout.write(`Hello, ${name}!!!\n`)
        process.exit()
    })
}
