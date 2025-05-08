var menu = document.querySelector("#nav i")
var cross = document.querySelector("#full i")

var tl = gsap.timeline()

tl.to("#full",{
    right:0,
    duration:0.7,
})
tl.from("#full h4",{
    x:100,
    duration:1.2,
    stagger:0.5,
    opacity:0,
})
tl.from("#full i",{
    opacity:0,
})
// nav ke ander ke icon par click karne par full wala div aye uske liye...

// tl.pause()

// menu.addEventListener("click",function(){
//     tl.play()
// })
// cross.addEventListener("click",function(){
//     tl.reverse()
// })