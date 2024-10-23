

let snakeCanvas = document.getElementById('snake-canvas')
let ctx = snakeCanvas.getContext('2d')

let foodX;
let foodY;
let score = 0
let changingDirection = false
let goX = +10
let goY = 0
let GameOverElement = document.querySelector('.snake_gameOver')
let retryBtn = document.getElementById('snakeRetry')
let resetScore = document.getElementById('snakeReset')
let randomNumber = (min , max) => Math.round((Math.random() * (max - min) + min) / 10 ) * 10;


let snakeBody =  [
    { x : 170 ,  y  : 150}, 
    { x : 160 ,  y  : 150},
    { x : 150 ,  y  : 150},
    { x : 140 ,  y  : 150},
    { x : 130 ,  y  : 150}
]

let clearCanvas = () => {
    ctx.strokeStyle = 'black'
    ctx.fillStyle = 'white'

    ctx.fillRect( 0 , 0 , snakeCanvas.width , snakeCanvas.height)
    ctx.strokeRect(0 , 0 , snakeCanvas.width , snakeCanvas.height)
}

window.addEventListener('keydown' , (e) => {
    
    if (changingDirection) return
    changingDirection = true
    if (e.key == 'ArrowRight' && goX != -10) {
        goX = +10
        goY = 0
    }
    if (e.key == 'ArrowLeft' && goX != +10) {
        goX = -10
        goY = 0
    }
    if (e.key == 'ArrowUp' && goY != +10) {
        goX = 0
        goY = -10
    }
    if (e.key == 'ArrowDown' && goY != -10) {
        goX = 0
        goY = +10
    }
})


let creatFood = () => {
    foodX = randomNumber(0 , snakeCanvas.width - 10)
    foodY = randomNumber(0 , snakeCanvas.width - 10)
    snakeBody.forEach(snakePart => {
        if(snakePart.x == foodX && snakePart.y == foodY) {
            creatFood()
        }
    })

}


let advanceSnake = () => {
    const snakeHead = { x : snakeBody[0].x + goX , y : snakeBody[0].y + goY}
    snakeBody.unshift(snakeHead)
    if (snakeHead.x == foodX && snakeHead.y == foodY) {     
        score += 10
        document.getElementById('snake-score').innerHTML = score
        
        creatFood()
    } else {
        snakeBody.pop()  
    }
}

let drawSnake = () => {
    snakeBody.forEach(snakePart => {
        ctx.fillStyle = 'lightGreen'
        ctx.strokeStyle = 'black'
        ctx.fillRect(snakePart.x , snakePart.y , 10 , 10)
        ctx.strokeRect(snakePart.x , snakePart.y , 10 , 10)
    })
}

creatFood()

let drawFood = () => {
    ctx.fillStyle = 'red'
    ctx.strokeStyle = 'black'
    ctx.fillRect( foodX , foodY , 10 , 10)
    ctx.strokeRect( foodX , foodY , 10 , 10)
}

function endGame() {
    for (let i = 1; i < snakeBody.length; i++) {
        if (snakeBody[0].x == snakeBody[i].x && snakeBody[0].y == snakeBody[i].y) return true
    }
    const hitRightWall = snakeBody[0].x > snakeCanvas.width - 10
    const hitLeftWall = snakeBody[0].x < 0
    const hitTopWall = snakeBody[0].y < 0
    const hitBottomWall = snakeBody[0].y > snakeCanvas.height - 10

    return hitRightWall || hitLeftWall || hitTopWall || hitBottomWall
}

let gameInterval = setInterval(() => {
    if(endGame()) {   
        GameOverElement.classList.add('gameOver_active')
        if (score > localStorage.getItem('snakeScore')) {
            localStorage.setItem('snakeScore' , score)
            document.querySelector('.gameOver_best').innerHTML = `New Best Score`
        } else {
            document.querySelector('.gameOver_best').innerHTML = `Best Score : ${localStorage.getItem('snakeScore')}`
        }
        document.querySelector('.gameOver_score').innerHTML = `Your Score Was : ${score}`
        clearInterval(gameInterval)
        return
    }
    clearCanvas()
    drawFood()
    advanceSnake()
    drawSnake()
    changingDirection = false
},1);

resetScore.addEventListener('click' , function() {
    localStorage.setItem('snakeScore' , 0)
})

retryBtn.addEventListener('click', function() {
    GameOverElement.classList.remove('gameOver_active')

    score = 0
    document.getElementById('snake-score').innerHTML = 0
    goX = +10
    goY = 0
    snakeBody =  [
        { x : 170 ,  y  : 150}, 
        { x : 160 ,  y  : 150},
        { x : 150 ,  y  : 150},
        { x : 140 ,  y  : 150},
        { x : 130 ,  y  : 150}
    ]
    clearCanvas()
    drawFood()
    advanceSnake()
    drawSnake()
    changingDirection = false
    gameInterval = setInterval(() => {
        if(endGame()) {   
            GameOverElement.classList.add('gameOver_active')
            if (score > localStorage.getItem('snakeScore')) {
                localStorage.setItem('snakeScore' , score)
                document.querySelector('.gameOver_best').innerHTML = `New Best Score`
            } else {
                document.querySelector('.gameOver_best').innerHTML = `Best Score : ${localStorage.getItem('snakeScore')}`
            }
            document.querySelector('.gameOver_score').innerHTML = `Your Score Was : ${score}`
            clearInterval(gameInterval)
            return
        }
        clearCanvas()
        drawFood()
        advanceSnake()
        drawSnake()
        changingDirection = false
    }, 100);
})





