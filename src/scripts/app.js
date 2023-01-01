const slidersRef = document.querySelectorAll("[data-js='slider']");


slidersRef.forEach(function (slider){
    const slidesRef = slider.querySelectorAll("[data-js='slide']");
    const leftBtnRef = slider.querySelector("[data-js='left-btn']");
    const rightBtnRef = slider.querySelector("[data-js='right-btn']");

    console.log(slidesRef);

    let translateValue = 0;
    let maxTranslate = (slidesRef.length - 1) * -100;


    function moveSlide (direction) {

        let slideWidth;
        let gap;

        slidesRef.forEach(function (slide){
            slideWidth = slide.offsetWidth;
        })

        let computedStyles = getComputedStyle(slider);
        gap = parseInt(computedStyles.gap);

        let totalGap = (gap / slideWidth) * 100;


        if (direction === 'left' && translateValue > maxTranslate) {
            translateValue = translateValue - (100 + totalGap);
            console.log(translateValue);
        }
        else if (direction === 'right' && translateValue < 0) {
            translateValue = translateValue + (100 + totalGap);
            console.log(translateValue);
        }

        slidesRef.forEach(function (slide){
            slide.style.transform = `translateX(${translateValue}%)`;
        })

    }

    leftBtnRef.addEventListener('click', function (){
        moveSlide('right');
        console.log('clickL');
    });
    rightBtnRef.addEventListener('click', function (){
        moveSlide('left');
        console.log('clickR');
    });
})



