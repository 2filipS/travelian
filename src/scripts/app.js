const slidersRef = document.querySelectorAll("[data-js='slider']");
const tripsRef = document.querySelectorAll('[data-js="trip"]');


slidersRef.forEach(function (slider) {
    const slidesRef = slider.querySelectorAll("[data-js='slide']");
    const leftBtnRef = slider.querySelector("[data-js='left-btn']");
    const rightBtnRef = slider.querySelector("[data-js='right-btn']");
    console.log(slider.previousElementSibling)
    const navLeftBtnRef = slider.previousElementSibling.querySelector("[data-js='nav-left-btn']");
    const navRightBtnRef = slider.previousElementSibling.querySelector("[data-js='nav-right-btn']");

    console.log(navLeftBtnRef, navRightBtnRef);

    console.log(slidesRef);

    let translateValue = 0;
    let maxTranslate = (slidesRef.length - 1) * -100;


    function moveSlide(direction) {

        let slideWidth;
        let gap;

        slidesRef.forEach(function (slide) {
            slideWidth = slide.offsetWidth;
        })

        let computedStyles = getComputedStyle(slider);
        gap = parseInt(computedStyles.gap);

        let totalGap = (gap / slideWidth) * 100;


        if (direction === 'left' && translateValue > maxTranslate) {
            translateValue = translateValue - (100 + totalGap);
            console.log(translateValue);
        } else if (direction === 'right' && translateValue < 0) {
            translateValue = translateValue + (100 + totalGap);
            console.log(translateValue);
        }

        slidesRef.forEach(function (slide) {
            slide.style.transform = `translateX(${translateValue}%)`;
        })

    }

    leftBtnRef.addEventListener('click', function () {
        moveSlide('right');
        console.log('clickL');
    });
    rightBtnRef.addEventListener('click', function () {
        moveSlide('left');
        console.log('clickR');
    });
    if (navLeftBtnRef) {
        navLeftBtnRef.addEventListener('click', function () {
            moveSlide('right');
            console.log('NavClickL');
        });
    }

    if (navRightBtnRef) {
        navRightBtnRef.addEventListener('click', function () {
            moveSlide('left');
            console.log('NavClickR');
        });
    }
})

tripsRef.forEach(function (trip){
    trip.addEventListener('click', function (){
        tripsRef.forEach(function (otherTrips){
            otherTrips.classList.remove('active')
        })
        trip.classList.add('active');
    })
})



