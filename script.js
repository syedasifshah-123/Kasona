const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


// function cursorMouseFollower() {
    
//     window.addEventListener("mousemove", function(dets) {
//         document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px)`;
//     });

// }

// cursorMouseFollower();








function circleChaptaKaro() {

    var timeout;
    var xscale = 1;
    var yscale = 1;

    var xprev = 0;
    var yprev = 0;

    window.addEventListener("mousemove", function (dets) {
        
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8, 1.2, dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8, 1.2, dets.clientY - yprev);

        xprev = dets.clientX;
        yprev = dets.clientY;

        cursorMouseFollowers(xscale, yscale);

        timeout = setTimeout(function () { 
            document.querySelector(".cursor",).style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1, 1)`;
        }, 100);

    });

}


function cursorMouseFollowers(xscale, yscale) {

    window.addEventListener("mousemove", function (dets) {
        document.querySelector(".cursor").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}


cursorMouseFollowers();
circleChaptaKaro();