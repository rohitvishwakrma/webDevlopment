var tl=gsap.timeline()
tl.from("#page2 h1",{
  /*   x:"-100%", */
    transform:"translateX(-125%)",
    opacity:0,
    scale:0,
    delay:0.4,
    duration:2,
    /* top:"20%", */
    scrollTriger:{
    trigger:"#page2",
    scroller:"h1",
    start:"top 0",
    end:"top -100%",
    marker:true,
    scrub:true,
    pin:true,
}
})
tl.to("#page3 h2",{
    opacity:0,
    x:"100%",
    delay:.1,
    duration:22,
    stagger:6,
    textHieght:25,
})