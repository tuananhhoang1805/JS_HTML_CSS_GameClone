let gameOver = false
let score = 0
let currentMole
let currentPlant

window.onload = () => {
    setGame()
}


const newGame = () => {
    
}
const setGame = () => {
    console.log("Start Game")

    for(let i = 0 ; i < 9; i++ ){
        let title = document.createElement("div")
        title.id = i.toString()
        document.querySelector("#board").appendChild(title)
        
        
        title.addEventListener("click", selectTile)
    }

    setInterval(getMole , 1000)
    setInterval(getPlant , 2000)

   
}



const getRandom = () => {
    let num = Math.floor(Math.random() * 9)

    return num.toString()
}


const getMole = () => {
    if(gameOver){
        return;
    }

    if(currentMole){
        currentMole.innerHTML = ""
    }
    
    let mole = document.createElement("img")
    mole.src = "./Image/monty-mole.png"
    let num = getRandom()
    if(currentPlant && currentPlant.id == num){
        return 
    }

    currentMole = document.getElementById(num)
    currentMole.appendChild(mole)
}

const getPlant = () => {
    if(gameOver){
        return;
    }

    if(currentPlant){
        currentPlant.innerHTML = ""
    }
    
    let plant = document.createElement("img")
    plant.src = "./Image/piranha-plant.png"
    let num = getRandom()
    if(currentMole && currentMole.id == num){
        return 
    }

    currentPlant = document.getElementById(num)
    currentPlant.appendChild(plant)
}



function selectTile() {
    if(this == currentMole){
        score += 10

        document.querySelector('#score').innerHTML = score.toString()

    }

    else if( this == currentPlant){
        document.querySelector('#score').innerHTML = "Game over " + score.toString()

        gameOver = true

        
    }

    if(gameOver){
        const buttonNewGame = document.querySelector("#newGame")
    
        buttonNewGame.style.display = "block"
    
        buttonNewGame.addEventListener("click", () => {
            window.location.reload();
        })
    }

}


