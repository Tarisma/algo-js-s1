
let playlist = ["Eye of the Tiger", "Fear of the Dark", "Renaissance", "Anissa", "Wake me Up"]

console.log(playlist)

class passager {
    constructor (name, sanity) {
        this.name = name
        this.sanity = sanity
    }
    Travel(musics = []) {
        let taxiChangeNbr = 0
        let redLightNbr = 0

        while (redLightNbr < 30 && John.sanity > 0) {
            redLightNbr ++
            let hasard = Math.floor(Math.random()*4)
            
            if (hasard == 3) {
                John.sanity -= 1
                taxiChangeNbr += 1
                console.log("John à changé " + taxiChangeNbr + " fois de taxi. Il lui reste " + John.sanity + " points de santé mentale.")
                console.log(" John à entendu " + musics[3] + " s'est énervé et à changé de taxi.")
            }
            else {
                console.log(musics[hasard] + "passe à la radio et John est content. :D")
            }
            if (John.sanity === 0) {
                console.log("JOHN EXPLOSE !!!!!")
                break
            }

            if (redLightNbr === 30) {
                console.log("John est arrivé à destination. Il peut réécouter la musique qu'il veut !")
             break   

            }   
           
        }
    }
}

let John = new passager ("John", 10)

console.log(John)

John.Travel(playlist)
