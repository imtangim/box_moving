const mydiv = document.getElementById("mydiv")

window.addEventListener("keydown",move)
let x = 0
let y = 0

function move(event){
    switch (event.key) {
        case "ArrowDown":
            y+=5;
            mydiv.style.top = y+"px"
            break;
        case "ArrowUp":
            y-=5;
            mydiv.style.top = y+"px"
            break;
        case "ArrowRight":
            x-=5
            mydiv.style.right = x+"px"
            break;
        case "ArrowLeft":
            x+=5
            mydiv.style.right = x+"px"
            break;
        default:
            x=0
            y=0
            mydiv.style.top = y+"px"
            mydiv.style.right = x+"px"
            break

    }
}

