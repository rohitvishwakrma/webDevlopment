var tl=gsap.timeline()

tl.from("#nav h3",{
    y:-50,
    opacity:0,
    delay:0.4,
    duration:1,
    stagger:1,
})
tl.from("#main h1",{
    x:-500,
    opacity:0,
    delay:0.8,
    duration:5,
    stagger:1,

})
tl.from("#main #img1",{
    x:100,
    rotate:-45,
    delay:0.4,
    duration:2,
    opacity:0,
})
tl.from("#main #img2",{
    x:100,
    rotate:-45,
    delay:0.4,
    duration:2,
    opacity:0,
})
tl.from("#main #img3",{
    x:100,
    rotate:-45,
    delay:0.4,
    duration:2,
    opacity:0,
})