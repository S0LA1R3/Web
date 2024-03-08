fetch("https://loginvalidatorapi-mmwp.onrender.com/")
.then(res => res.json())
.then(data => {
    console.log(data)
    console.log(JSON.stringify(data))
    console.log(data.message.toUpperCase())
})
