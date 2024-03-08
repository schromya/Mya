
// Arrows not really necessary but cool
const Direction = Object.freeze({ 
    UP:     "↑", 
    DOWN:   "↓", 
    LEFT:   "←", 
    RIGHT:  "→", 
}) 

// Everything from the lower left corner of the sprite
class Sprite {
    /*
        Position values are from the lower left corner of the frame.
    */
    constructor(id, imageURL,
                initXPosition, initYPosition, initDirection, 
                minXPosition, maxXPosition, minYPosition, maxYPosition, ) {
        
        this.ID = id;  // Element ID (str) -> Has to match your css id
        this.image = imageURL; // Image url (str)
        this.MIN_X_POSITION = minXPosition; // (float)
        this.MAX_X_POSITION = maxXPosition; // (float)
        this.MIN_Y_POSITION = minYPosition; // (float)
        this.MAX_Y_POSITION = maxYPosition; // (float)
        this.xPosition = initXPosition;  // (float)
        this.yPosition = initYPosition;  // (float)
        this.direction = initDirection;  // (Direction)
        
        // Render to screen
        this.updatePosition(this.xPosition, this.yPosition)
        this.updateImage(imageURL)
        
    }


    get position(){
        return [this.xPosition, this.yPosition]
    }

    // Return min and max x position of the sprite
    get xBounds() {
        return [this.XPosition, this.XPosition + this.width]
    }

    // Return min and max y position of the sprite
    get yBounds() {
        return [this.YPosition, this.YPosition + this.height]
    }

    get width(){
        return document.getElementById(this.ID).offsetWidth;
    }

    get height(){
        return document.getElementById(this.ID).offsetHeight;
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

    updateYPosition(yPosition,) {
        let sprite = document.getElementById(this.ID)

        this.yPosition = yPosition
        sprite.style.position = 'absolute'
        sprite.style.bottom = yPosition + 'px';
    }
}


class Game {
    constructor() {

        this.sprites = [] //  Type Sprite
    }

    // Add sprites to keep track of
    addSprite (sprite) {
        this.sprites.push(sprite)
    }

    // Check if this sprite has collided with anything else in the game frame
    isCollision(sprite) {
        for (checkSprite of this.sprites) {
            // Make sure it is not the current sprite
            if (sprite.ID !== checkSprite.ID) {
                
                if (sprite.ID.xBounds[0] >= checkSprite.ID.xBounds[0] &&
                    sprite.ID.xBounds[1] <= checkSprite.ID.xBounds[1]) return true;
                if (sprite.ID.yBounds[0] >= checkSprite.ID.yBounds[0] &&
                    sprite.ID.yBounds[1] <= checkSprite.ID.yBounds[1]) return true;
            }
        }

        return false;
    }

}



// Script

frog = new Sprite(
    'frog', 'assets/FrogSit.png',
    100, 100, Direction.UP, 
    100, 100, 100, 400
)

shroom = new Sprite(
    'shroom', 'assets/ShroomPink.png',
    screen.width - 200, 100, Direction.LEFT, 
    100, screen.width - 200, 100, 100
)


// Start Mushroom
moveShroom(shroom)

// Jump frog when space bar pressed
document.addEventListener('keydown', function(event) {
    if (event.key === ' ') {
        frog.updateYPosition(frog.MIN_Y_POSITION);
        jumpFrog(frog);
    }
});




// Modify frog's position
function jumpFrog(sprite) {
    // Call recursively forever
    setTimeout(function() {
        
        sprite.updateImage('assets/FrogJump.png')
        newYPos = sprite.position[1]
        
        if (sprite.direction === Direction.DOWN) newYPos -= 4
        else newYPos += 4.5

        if (newYPos >= sprite.MAX_Y_POSITION) sprite.direction = Direction.DOWN
        else if (newYPos <= sprite.MIN_X_POSITION) sprite.direction = Direction.UP
        
        sprite.updateYPosition(newYPos)

        if (newYPos > sprite.MIN_Y_POSITION) jumpFrog(sprite); // Recursively call while jumping
        else {
            sprite.updateImage('assets/FrogSit.png')
        }

        
    }, 10); // Frog updated every 10 msec
    
}

// Modify Mushrooms position
function moveShroom(sprite) {
    // Call recursively forever
    setTimeout(function() {
        let newXPosition = sprite.position[0] - 5
        
        if (newXPosition <= sprite.MIN_X_POSITION) newXPosition = sprite.MAX_X_POSITION

        sprite.updateXPosition(newXPosition)
        moveShroom(sprite);
    }, 10); // Shroom updated every msec
    
}





