var page1Animation = function () {

    tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button", {
        y: -40,
        opacity: 0,
        delay: 1,
        duration: 0.7,
        stagger: 0.15
    })
    tl.from(".centre-part1 h1", {
        x: -500,
        opacity: 0,
        duration: 0.7,
    })
    tl.from(".centre-part1 p", {
        x: -200,
        opacity: 0,
        duration: 0.7,
    })
    tl.from(".centre-part1 button", {
        x: -500,
        opacity: 0,
        duration: 0.7,
    })
    tl.from(".centre-part2 img", {
        opacity: 0,
        duration: 0.5,

    }, "-=0.3")

    tl.from(".section-bottom h4", {
        opacity: 0,
        y: 150,
        stagger: 0.5,
        duration: 0.6,


    })
}


// gsap.from(".services h3",{
// x:-10,
// opacity:0,
// duration:0.5,
// scrollTrigger:{
//     trigger:".services h3", //timeline bana kar scrollertrigger lagayegi to har section ke liye bar bar code nhi likhna padega.
//     scrolller:"body",
//     markers:true,
//     start:"top 50%",
// }
// })
function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".section2",
            scroller: "body",
            // markers: true,
            start: "top 50%",
            end: "top 0%",
            scrub: 2,
    
        }
    })
    tl2.from(".services", {
        y: 30,
        opacity: 0,
    })
    
    //Line1
    
    tl2.from(".elem.line1.left", {
        x:-300,
        opacity: 0,
        duration:1,
    }, "anim")
    
    tl2.from(".elem.line1.right", {
        x:300,
        opacity: 0,
        duration:1,
    },"anim")
    
    //Line2
    
    tl2.from(".elem.line2.left", {
        x:-300,
        opacity: 0,
        duration:1,
    }, "anim1")
    
    tl2.from(".elem.line2.right", {
        x:300,
        opacity: 0,
        duration:1,
    }, "anim1")
}

page1Animation()
page2Animation()
