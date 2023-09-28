let names = []


names.push("Vincent")
names.push("Paul")
names.push("Arthur")



for(let i = 0; i < names.length; i++ ) {
    console.log(i)
}

names.forEach(name => {
    name += " va à la pêche "
    console.log(name)
})

console.log(names)


let user = {
    firstName : "Gabriel",
    lastName : "Monier",
    age : 28,
    isActive: true,
    isTired : true,
    isRich : false,
    messages : ["Bonjour", "Non, j'aime pas"]
}

console.log(user)
console.log(user.age)
console.log(user.firstName)

let sentence = user.firstName + "a" + user.age + "ans."

/* Créer un user qui a un firstName, un lastName, une passion, une année de naissance */
/* Créer une variable History pour concaténer le prénom, le nom, la passion puis l'année de naissance*/