
var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var img = document.querySelector("#image")

main.addEventListener("click",function(){
    console.log("event performed")
})
main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.6,
        ease:"back.out",
    })
})
img.addEventListener("mouseenter",function(){
    cursor.innerHTML="View More"
gsap.to(cursor,{
    scale:4,
    backgroundColor: "rgba(224, 221, 221, 0.863)",
})
})
img.addEventListener("mouseleave",function(){
    cursor.innerHTML=""
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "white",
    })
    })
