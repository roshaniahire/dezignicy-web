
gsap.from(
    "#right",
    {
        x: -100,
        opacity: 0,
        duration: 1
    }
)

gsap.from(
    "#left",
    {
        x: 100,
        opacity: 0,
        duration: 1
    }
)

gsap.from(
    ".fly-text",
    {
        y: -150,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".fly-text",
            scroll: 'body',
            start: "top 70%",
            // markers:true
        }
    }
);






let h1 = document.getElementById('scrollText');

document.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    // console.log(scrollPosition);
    h1.style.translate = -scrollPosition + 'px';
});


gsap.from(".box", {
    y: 40,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.box',
        scroll: 'body',
        start: 'top 98%',
        // markers:true
    }
}
);