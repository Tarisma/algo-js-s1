/*class hero {
    constructor (name, pv, atk, def ) {
        this.name = Tarisma
        this.pv = pv
        this.atk = atk
        this.def = def
    }
    attackMonster(monster) {
        monster.hp -= this.atk
    }
}

class monster {
    constructor(name, pv) {
        this.name = name 
        this.pv = pv
    }
}

let samy = new hero("Samy", 100, 5, 7)

let Gnome = new monster ("Gnome", 100)

samy.attackMonster(Gnome) */


class pokemon {
    constructor (name, atk, def, hp, luck) {
        this.name = name
        this.atk = atk
        this.def = def
        this.hp = hp
        this.luck = luck
    }
    isLucky() {
        if (Math.random()<= this.luck ){
            return true
        }
        else{
            return false
        }
        

}
    attackOtherPokemon(pokemon) {
        if (this.isLucky() == false) {
            console.log(pokemon.name + " à raté son attaque, " + this.name + " s'en sort intact !")
        }
        else {
            pokemon.hp -= this.atk - pokemon.def
        }

    }
       
} 


//constructor (name, atk, def, hp, luck) 
let flagris = new pokemon("Flagris", 5, 2, 25, 0.1)

console.log(flagris)

let oxydia = new pokemon("Oxydia",3, 3, 30, 0.2) 

console.log(oxydia)

while ((oxydia.hp > 0) && (flagris.hp > 0)) {
    flagris.attackOtherPokemon(oxydia)
    console.log("Flagris attaque Onyxia !")
    console.log("Oxydia n'as plus que " + (oxydia.hp) + " points de vie.")
    if (oxydia.hp <= 0){
        console.log("Oxydia est défait et Flagris à gagné dans l'honneur !")
        break }
    if (oxydia.hp > 0)
     (oxydia.attackOtherPokemon)(flagris)
    console.log("Onyxia attaque Flagris !")
    console.log("Flagris n'as plus que " + (flagris.hp) + " points de vie.")
    if (flagris.hp <= 0){
        console.log("Flagris est défait et Oxydia à gagné dans l'honneur !")
        break}
    
}
