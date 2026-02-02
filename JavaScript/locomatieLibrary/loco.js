gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// here we write above the scroll code

var tl=gsap.timeline()
tl.to("#page1 #card1 ",{
    scale:0,
    delay:2,
    duration:2,
    opacity:0,
    rotate:960,
    stagger:1,
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 20",
        markers:true,
        scrube:true
    }
})
tl.from("#page2 #card2 ",{
    scale:0,
    delay:2,
    duration:2,
    opacity:0,
    rotate:-960,
    stagger:2,
     ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 20",
        markers:true,
        scrube:true
    }
})
tl.to("#page3 #card3 ",{
    scale:0,
    delay:2,
    duration:2,
    opacity:0,
    rotate:960,
    stagger:3, 
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 20",
        markers:true,
        scrube:true
    }
})
tl.to("#page3 h1",{
    x:"1000%",
    left:-1,
    delay:1,
    duration:60,
    opacity:2,
    ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 20",
        markers:true,
        scrube:true
    }
})
tl.from("#page4 #card4 ",{
    scale:0,
    delay:2,
    duration:2,
    opacity:0,
    rotate:-960,
    stagger:6, ScrollTrigger:{
        trigger:"#page1",
        scroller:"#main",
        start:"top 20",
        markers:true,
        scrube:true
    }
})