const mydiv = document.getElementsByClassName("mydiv")


try {
    document.createEvent("TouchEvent")
    let p = document.getElementById("title1")
    let p1 = document.getElementById("title2")
    p1.style.display = "none"


    
    mydiv[0].addEventListener("touchstart", e => {
        e.preventDefault()
            ;[...e.changedTouches].forEach(touch => {
                mydiv[0].id = touch.identifier
                p.style.display = "none"
            })

    })

    window.addEventListener("touchmove", e => {
        ;[...e.changedTouches].forEach(touch => {
            mydiv[0].style.top = `${touch.pageY}px`
            mydiv[0].style.left = `${touch.pageX}px`
        })
    })
    mydiv[0].addEventListener("touchend", e => {
        console.log("end")
            ;[...e.changedTouches].forEach(touch => {
                const dot = document.getElementById(touch.identifier)
                mydiv[0].style.top = `${touch.pageY}px`
                mydiv[0].style.left = `${touch.pageX}px`
                p.style.display = "block"
            })

    })

} catch (error) {
    let p = document.getElementById("title1")
    let p1 = document.getElementById("title2")
    p.style.display = "none"
    p1.style.display = "block"
    window.addEventListener("keydown", move)
    let x = 0
    let y = 0
    function move(event) {
        switch (event.key) {
            case "ArrowDown":
                y += 5;
                mydiv[0].style.top = y + "px"
                break;
            case "ArrowUp":
                y -= 5;
                mydiv[0].style.top = y + "px"
                break;
            case "ArrowRight":
                x -= 5
                mydiv[0].style.right = x + "px"
                break;
            case "ArrowLeft":
                x += 5
                mydiv[0].style.right = x + "px"
                break;
            default:
                x = 0
                y = 0
                mydiv[0].style.top = y + "px"
                mydiv[0].style.right = x + "px"
                break

        }
        p1.style.display = "none"
    }
}





// touch code
// document.addEventListener("touchstart", e => {
//     ;[...e.changedTouches].forEach(touch => {
//         const dot = document.createElement("div")
//         dot.classList.add("dot")
//         dot.style.top = `${touch.pageY}px`
//         dot.style.left = `${touch.pageX}px`
//         dot.style.backgroundColor = "red"

//         dot.id = touch.identifier
//         document.body.append(dot)
//     })
// })
// document.addEventListener("touchmove", e => {
//     ;[...e.changedTouches].forEach(touch => {
//         const dot = document.getElementById(touch.identifier)
//         dot.style.top = `${touch.pageY}px`
//         dot.style.left = `${touch.pageX}px`
//     })
// })
// document.addEventListener("touchend", e => {
//     console.log("end")
//         ;[...e.changedTouches].forEach(touch => {
//             const dot = document.getElementById(touch.identifier)
//             dot.remove()
//         })

// })
