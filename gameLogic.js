
// Arrows not really necessary but cool
const Direction = Object.freeze({ 
    UP:     "↑", 
    DOWN:   "↓", 
    LEFT:   "←", 
    RIGHT:  "→", 
    STOPPED: ""
}) 

// Everything from the lower left corner of the sprite
class Sprite {
    /*
        Position values are from the lower left corner of the frame.
    */
    constructor(id, imageURL, innerContent,
                initXPosition, initYPosition, initDirection, 
                minXPosition, maxXPosition, minYPosition, maxYPosition, ) {
        
        this.ID = id;  // Element ID (str) -> Has to match your css id
        this.image = imageURL; // Image url (str)
        this.innerContent = innerContent;  // Content Inside div (text str or html str)

        this.initXPosition = initXPosition;  // (float)
        this.initYPosition = initYPosition;  // (float)
        this.initDirection = initDirection;  // (Direction)

        this.xPosition = initXPosition;  // (float)
        this.yPosition = initYPosition;  // (float)
        this.direction = initDirection;  // (Direction)

        this.MIN_X_POSITION = minXPosition; // (float)
        this.MAX_X_POSITION = maxXPosition; // (float)
        this.MIN_Y_POSITION = minYPosition; // (float)
        this.MAX_Y_POSITION = maxYPosition; // (float)

        
        // Render to screen
        this.updatePosition(this.xPosition, this.yPosition)
        this.updateImage(imageURL)
        this.updateInnerContent(innerContent)
        
    }


    get position(){
        return [this.xPosition, this.yPosition]
    }

    // Return min and max x position of the sprite
    get xBounds() {
        return [this.xPosition, this.xPosition + this.width]
    }

    // Return min and max y position of the sprite
    get yBounds() {
        return [this.yPosition, this.yPosition + this.height]
    }

    get width(){
        return document.getElementById(this.ID).offsetWidth;
    }

    get height(){
        return document.getElementById(this.ID).offsetHeight;
    }

    // Reset position and direction
    reset() {
        this.updatePosition(this.initXPosition, this.initYPosition)
        this.direction = this.initDirection
    }

    updateImage(imageURL) {
        this.image = imageURL;
        let sprite = document.getElementById(this.ID);
        sprite.src = imageURL
    }

    updatePosition(xPosition, yPosition) {
        let sprite = document.getElementById(this.ID)

        this.xPosition = xPosition
        this.yPosition = yPosition

        sprite.style.position = 'absolute'
        sprite.style.left = xPosition + 'px';
        sprite.style.bottom = yPosition + 'px';
    }

    updateXPosition(xPosition) {
        let sprite = document.getElementById(this.ID)

        this.xPosition = xPosition
        sprite.style.position = 'absolute'
        sprite.style.left = xPosition + 'px';
    }

    updateYPosition(yPosition) {
        let sprite = document.getElementById(this.ID)

        this.yPosition = yPosition
        sprite.style.position = 'absolute'
        sprite.style.bottom = yPosition + 'px';
    }

    updateInnerContent(content) {
        self.content = content
        let sprite = document.getElementById(this.ID)
        sprite.innerHTML = content
    }
}


class Game {
    constructor() {

        this.sprites = [] //  Type Sprite
        this.score = 0
    }

    // Add sprites to keep track of
    trackSprite (sprite) {
        this.sprites.push(sprite)
    }

    // Check if this sprite has collided with anything else in the game frame
    isCollision(sprite) {
        for (let checkSprite of this.sprites) {
            // Make sure it is not the current sprite (-2 for really touching)
            if (sprite.ID !== checkSprite.ID) {
                // Check if sprite is to the left or right of checkSprite 
                if (sprite.xBounds[1] < checkSprite.xBounds[0] || sprite.xBounds[0] > checkSprite.xBounds[1]) {
                    continue; // No collision on X axis
                }

                // Check if sprite is above or below checkSprite
                if (sprite.yBounds[1] < checkSprite.yBounds[0] || sprite.yBounds[0] > checkSprite.yBounds[1]) {
                    continue; // No collision on Y axis
                }

                // If we reach here, sprites are colliding
                return true;
                }
        }

        return false;
    }

}



// Script

let xOffset = 0
let smallOffset = 0
let yOffset = 0


if (window.innerWidth <= 600) {
    xOffset = 80
    smallOffset = 35
    yOffset = 60
}

gameText = new Sprite(
    'gameText', '', 'Press the space bar or tap to jump!',
    50 - smallOffset, 85 , Direction.STOPPED, 
    0, 0, 0, 0
)

frog = new Sprite(
    'frog', 'assets/FrogSit.png', '',
    100 - xOffset, 0, Direction.UP, 
    100, 100, 0, 200 - yOffset
)

// Start and end mushroom off screen
shroom = new Sprite(
    'shroom', 'assets/ShroomPink.png', '',
    window.innerWidth , 0, Direction.LEFT, 
    -100, window.innerWidth, 0, 0
)

// Start off screen and bring to screen when died
gameOverText = new Sprite(
    'gameOver', 'assets/GameOver.png', '',
   -300, 20 , Direction.STOPPED, 
   -300,  window.innerWidth/2 - 145/2, 0, 0
)

// Start off screen and bring to screen when died
score = new Sprite(
    'score', '', 'Score: 0',
    window.innerWidth - 200 + xOffset, 85 , Direction.STOPPED, 
    0, 0, 0, 0
)


game = new Game()

game.trackSprite(frog)
game.trackSprite(shroom)

let restart = false;

let enable = true;



// Jump frog when space bar pressed
document.addEventListener('keydown', function(event) {
    restart = true;
    if (event.key === ' ') {
        gameText.updateInnerContent('') // Take away content when start jumping
        if (enable) moveFrog(frog);
        enable = true;
    }
});


// Jump frog when space bar or when the screen is tapped
document.addEventListener('touchstart', function(event) {
    gameText.updateInnerContent('') // Take away content when start jumping
    restart = true;
    if (enable) moveFrog(frog);
    enable = true;
    // Prevent the default touch behavior like scrolling
    // event.preventDefault();
});

// Start Shroom Movement
moveShroom(shroom)

// Start checking crash
checkCollision()



// Check crash + count score
function checkCollision() {
    setTimeout(function() {
        

        // End game if collision
        if (game.isCollision(shroom)) {
            restart = false
            shroom.direction = Direction.STOPPED;
            frog.direction = Direction.STOPPED;
            frog.updateImage('assets/FrogDead.png')
            gameOverText.updateXPosition(gameOverText.MAX_X_POSITION)
            enable = false;

            checkRestart()
        }

        checkCollision()

    }, 5); // Updates at half the speed of the other threads
}

function checkRestart() {
    setTimeout(function() {

        if (restart) {
            frog.reset()
            frog.updateImage('assets/FrogSit.png')
            shroom.reset()
            gameOverText.reset()
            game.score = 0
            
        }else checkRestart()

    }, 5); // Updates at half the speed of the other threads


}

// Modify frog's position
function moveFrog() {
    // Call recursively forever
    setTimeout(function() {
        if (frog.direction !== Direction.STOPPED) {
            frog.updateImage('assets/FrogJump.png')
            newYPos = frog.position[1]
            
            if (frog.direction === Direction.DOWN) newYPos -= 4
            else newYPos += 4.5

            if (newYPos >= frog.MAX_Y_POSITION) frog.direction = Direction.DOWN
            else if (newYPos <= frog.MIN_Y_POSITION) frog.direction = Direction.UP
            
            frog.updateYPosition(newYPos)

            // Only allow 1 jump at a time
            if (newYPos > frog.MIN_Y_POSITION) moveFrog(frog); // Recursively call while jumping
            else {
                frog.updateImage('assets/FrogSit.png')
            }
        }
    }, 10); // Frog updated every 10 msec
    
}

// Modify Mushrooms position (And add points)
function moveShroom() {
    // Call recursively forever
    setTimeout(function() {

        if (shroom.direction !== Direction.STOPPED) {
            game.score += 0.01
            score.updateInnerContent("Points: " + Math.round(game.score))


            let newXPosition = shroom.position[0] - 5
            if (newXPosition <= shroom.MIN_X_POSITION) newXPosition = shroom.MAX_X_POSITION

            shroom.updateXPosition(newXPosition)
            
        }
        moveShroom(shroom);
    }, 10); // Shroom updated every msec
    
}





