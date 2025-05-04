
var initialPath =`M 10 100 Q 500 100 490 100`
var finalPath =`M 10 100 Q 500 100 490 100`

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    let bounds = string.getBoundingClientRect();
    let x = dets.clientX - bounds.left;
    let y = dets.clientY - bounds.top;

    let path = `M 10 100 Q ${x} ${y} 490 100`;

    gsap.to("svg path", {
        attr: { d: path },
        duration: 0.3,
        ease: "power3.out",
        overwrite :"auto"
    });
});

string.addEventListener("mouseleave",function(){
    
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.5,
        ease:"elastic.out(1,0,2)"
    })
})

string.addEventListener("mouseenter",function(){
    console.log("enter")

})   
string.addEventListener("mouseleave",function(){
    console.log("leave")
}) 

