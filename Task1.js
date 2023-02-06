function func(user) {
    for (let key in user) {
        if (user.hasOwnProperty(key)){
            console.log(`${key} = ${user[key]}`);
        }            
    }
}

const user = {
    name: 'Sergey',
    surname: 'Tarasov',
    city: 'Moscow',
    age: 27,
    work: 'developer'
}

func(user);
