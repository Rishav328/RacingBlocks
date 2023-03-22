const WIDTH  = window.innerWidth;
const HEIGHT = window.innerHeight;
let vel = 1
let user_vel = 10
let winner = null
let start = false
let gameOver = false

let block_ai = {
    x : (WIDTH / 2) - (WIDTH / 4),
    y : (HEIGHT - 100),
    width: 50,
    height: 50
}

let user = {
    x : (WIDTH / 2) + (WIDTH / 4),
    y : (HEIGHT - 100),
    width: 50,
    height: 50
}

function setup() {
    createCanvas(WIDTH, HEIGHT);
    background('black')
}

function draw() {
    if (!gameOver) {
        gameWindow()
    } else {
        scoreWindow()
    }
}

function gameWindow() {
    background('black')

    stroke('black')
    textSize(32);
    fill(0, 102, 153)
    text('F I N I S H   L I N E', ((WIDTH / 2) - 100), 55);

    stroke('white')
    line(0, 90, WIDTH, 90)

    fill('green')
    rect(block_ai.x, block_ai.y, block_ai.width, block_ai.height)

    fill('red')
    rect(user.x, user.y, user.width, user.height)

    if (start){
    
        block_ai.y -= vel

        if (block_ai.y <= 35) { 
            vel = 0
            gameOver = true
            winner = "AI"
        }
    }
}

function scoreWindow() {
    textSize(25)
    background('white')
    fill('black')
    text('GAME OVER - '+winner+" wins", WIDTH / 5, HEIGHT / 2)
    text('Refresh TO RESTART!!!', 10, 50)

}

function mouseClicked() {
    start = true
    user.y -= user_vel;
    if (user.y <= 35) {
        user_vel = 0
        gameOver = true
        winner = "YOU"
    }
}