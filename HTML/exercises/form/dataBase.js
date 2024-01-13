const sequence = {
    _id: 1,
    get id() {return this._id++}
}

const users = {}

function setUser(user){
    if(!user.id) user.id = sequence.id
    users[user.id] = user
    return user
}

function getUsers(){
    return Object.values(users)
}

function changeUser(newUser){
    const thisId = Object.entries(users).forEach(user => {
        if(user.name === newUser.name){
            newUser.id = user.id
            users[user.id] = newUser
        }
    })

    return users
}

module.exports = {setUser, getUsers, changeUser}
