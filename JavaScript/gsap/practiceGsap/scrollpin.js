gsap.from("page1 #img1",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page1",
        scroller:"body",
        markers:true,
        start:"top 0",
        end:"top -10%",  // here could pin ele of parent 
        scrub:true,
        pin:true,
    }
}) 