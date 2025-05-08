// function breakText(){
//     var h1 = document.querySelector("h1")
//     var h1Text = h1.textContent

//     var splittedText = h1.textContent.split("")

//     var clutter=""

//     splittedText.forEach(function(elem){
//         clutter += `<span>${elem}</span>`
//     })
//     h1.innerHTML=clutter
// }
// breakText()

// gsap.from("h1 span",{
//     y:70,
//     duration:0.8,
//     delay:0.5,
//     opacity:0,
//     stagger:0.15,
// })

// agar riya ko alag or shukla ko alag mtalb bich se tut kar text aye
function breakText(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent

    var splittedText = h1.textContent.split("")

    var clutter=""

    var halfValue=splittedText.length/2
    splittedText.forEach(function(elem,idx){
        if(idx<halfValue){
            
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }

    })
    h1.innerHTML=clutter
}
breakText()

gsap.from(".a",{
    y:50,
    duration:0.9,
    delay:1,
    stagger:0.15,
    opacity:0,
})

gsap.from(".b",{
    y:50,
    duration:0.9,
    delay:1,
    stagger:-0.15,
    opacity:0,
})