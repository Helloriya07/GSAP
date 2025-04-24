// gsap.to("#box1", {
//     x: 1000,
//     duration: 1.5,
//     delay: 0.5,
//     backgroundColor: "blue",
//     borderRadius: "50%",
//     rotate: 360,
//     repeat: -1,
//     yoyo: true,
// })
// gsap.to("#box2", {
//     x: 1000,
//     duration: 1.5,
//     delay: 0.5,
//     backgroundColor: "yellow",
//     borderRadius: "50%",
//     rotate: 360,
//     repeat: -1,
//     yoyo: true,
// })
// gsap.to("#box3", {
//     x: 1000,
//     duration: 1.5,
//     delay: 0.5,
//     backgroundColor: "pink",
//     borderRadius: "50%",
//     rotate: 360,
//     repeat: -1, //infinite time chalega
//     yoyo: true, //initial to final then reverse
// })

// gsap.from("h1", {
//     opacity: 0,
//     y: 30,
//     duration: 1,
//     delay: 1,
//     stagger: 0.5,

// })
// var tl= gsap.timeline() //timeline ka concept...
// tl.from("h1",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.5,
// })
// tl.from("h4",{
//     y:-30,
//     opacity:0,
//     duration:1,
//     delay:0.5,
//     stagger:0.2,
// })
// gsap.registerPlugin(ScrollTrigger);
// gsap.from("#page1 #box",{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     repeat:-1,
    
// })
// gsap.from("#page2 h1",{
//     opacity:0,
//     duration:2,
//     x:200,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         start:"top 50%"
//  }
// });
// gsap.from("#page2 h2",{
//     opacity:0,
//     duration:2,
//     x:-200,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//          start:"top 60%"
//     }
// });
// gsap.from("#page2 #box",{
//     opacity:0,
//     duration:2,
//     x:500,
//     scrollTrigger:{
//         trigger:"#page2 #box",
//         scroller:"body",

//          start:"top 60%",
//          end :"top 30%",
//          scrub:3,
//     }
// });
gsap.to("#page2 h3",{
    transform:"translate(-150%)",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -100%",
        scrub:2,
        pin:true,
    }
})