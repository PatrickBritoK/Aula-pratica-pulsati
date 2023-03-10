const Keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false,
        hold: false
    },
    space: {
        pressed: false
    },
}


window.addEventListener("keydown", e => {
    let key = e.key
    
    switch(key){
        case "ArrowLeft":
        case "a":
            Keys.a.pressed = true
            break

        case "ArrowRigth":
        case "d":
            Keys.d.pressed = true
            break

        case "ArrowUp":
        case "w":
            Keys.w.pressed = true
            break 

        case "z":
        case " ":
            Keys.space.pressed = true 
    }
})

window.addEventListener("keyup", e => {
    let key = e.key
    
    switch(key){
        case "ArrowLeft":
        case "a":
            Keys.a.pressed = false
            player.lastKeyPressed = key
            break

        case "ArrowRigth":
        case "d":
            Keys.d.pressed = false
            player.lastKeyPressed = key
            break

        case "ArrowUp":
        case "w":
            Keys.w.pressed = false
            Keys.w.hold = false
            break 
    }
})
function handleControl(){
    movement()

    function movement(){
        player.velocity.x = 0

        if (Keys.a.pressed && ["a", "ArrowLeft"].includes(player.lastKeyPressed)){
            player.velocity.x = -1.5 * 3.4
        }

        if (Keys.d.pressed && ["d", "ArrowRight"].includes(player.lastKeyPressed)){
            player.velocity.x = 1.5 * 3.4
        }

        if (Keys.w.pressed && !Keys.w.hold){
            player.jump()
            Keys.w.hold = true
        }
    }
}