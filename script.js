
var gp = gsap.timeline()

gp.to("#box1", {
    x : "70vw",
    duration : 4,
    delay : 1,
    scale : 0.7,
    rotate : "360deg",
    backgroundColor : "limegreen",
    textContent : "c"
})
gp.to("#box2", {
    x : "70vw",
    duration : 3,
    scale : 0.6,
    rotate : "360deg",
    backgroundColor : "yellow",
    textContent : "a"
})
gp.to("#box3", {
    x : "70vw",
    duration : 2,
    scale : 0.5,
    rotate : "360deg",
    backgroundColor : "royalblue",
    textContent : "b"
})

