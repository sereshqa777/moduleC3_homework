function checkPropInObj(str, obj){
    if (str in obj) return true;
    else return false
}

const obj = {
    name: 'Sergey',
    age: 27,
    city: 'Moscow'
}

const str = 'name';

console.log(checkPropInObj(str, obj));
