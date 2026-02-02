
/*
SCROLLTRIGGER PROPETY AS NORMAL AND OBJECT FROM 
1 PIN PROPERTY 
 */
gsap.from("#page1 #circle" ,{
    scale:0,
    delay:.8,
    duratation:5,
    rotate:676,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroll:"body",
        markers:true,
        start:"top 2%",
        end:"top 60%",
        //scrub:"true",
    }
})
gsap.from("#page2 #circle" ,{
    scale:0,
    delay:.8,
    duratation:5,
    rotate:676,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroll:"body",
        markers:true,
        start:"top 5%",
        end:"top 60%",
        //scrub:"true",
    }
})
gsap.from("#page3 #circle" ,{
    scale:0,
    delay:.8,
    duratation:5,
    rotate:676,
    scrollTrigger:{
        trigger:"#page1 #circle",
        scroll:"body",
        markers:true,
        start:"top 9%",
        end:"top 60%",
        //scrub:"true",
    }
})