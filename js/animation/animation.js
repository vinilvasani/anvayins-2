$(document).ready(function() {
    //Function to get the path Length of a SVG path and set Dashoffest and Dasharray to the length of the path
    function getPathLength(el) {
        var pathLength = el.getTotalLength();
        // console.log(pathLength);
        el.style.strokeDashoffset = pathLength;
        el.style.strokeDasharray = pathLength;
    }   

    let pathsArray = document.querySelectorAll('.path');
    // console.log(pathsArray);

    pathsArray.forEach(path => getPathLength(path));

    var controller = new ScrollMagic.Controller();

    //Animation SVG Path 1 ('#path__1')

    new ScrollMagic.Scene({
        triggerElement: '#svg__path__1',
        duration: 450,
        offset: 350,
    })
    .setTween(TweenMax.to('#path__1', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //addIndicators()
    .addTo(controller);

    //Animation SVG Path 2 ('#path__2')

    new ScrollMagic.Scene({
        triggerElement: '#svg__path__2',
        duration: 450,
        offset: 350,
    })
    .setTween(TweenMax.to('#path__2', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //addIndicators()
    .addTo(controller);

    //Animation SVG Path 3 ('#path__3')

    new ScrollMagic.Scene({
        triggerElement: '#svg__path__3',
        duration: 450,
        offset: -50,
    })
    .setTween(TweenMax.to('#path__3', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //addIndicators()
    .addTo(controller);

    //Animation SVG Path 4 ('#path__4')

    new ScrollMagic.Scene({
        triggerElement: '#svg__path__4',
        duration: 450,
        offset: 400,
    })
    .setTween(TweenMax.to('#path__4', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //addIndicators()
    .addTo(controller);

    //Animation SVG Path 5 ('#path__5')

    new ScrollMagic.Scene({
        triggerElement: '#svg__path__5',
        duration: 450,
        offset: 350,
    })
    .setTween(TweenMax.to('#path__5', 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    //addIndicators()
    .addTo(controller);

    //Image Pop up animation start


    //Image 2
    new ScrollMagic.Scene({
        triggerElement: '#section__2',
        // duration: 450,
        offset: -200,
        reverse: false
    })
    .setTween(TweenMax.from('#section__image__2', 0.7, {opacity: 0, scale: 0.2}))
    // .addIndicators({name: "Image 2"})
    .addTo(controller);

    //Image 3
    new ScrollMagic.Scene({
        triggerElement: '#section__3',
        // duration: 450,
        offset: -70,
        reverse: false
    })
    .setTween(TweenMax.from('#section__image__3', 0.7, {opacity: 0, scale: 0.2}))
    // .addIndicators({name: "Image 3"})
    .addTo(controller);

    //Image 4
    new ScrollMagic.Scene({
        triggerElement: '#section__4',
        // duration: 450,
        offset: -170,
        reverse: false
    })
    .setTween(TweenMax.from('#section__image__4', 0.7, {opacity: 0, scale: 0.2}))
    // .addIndicators({name: "Image 4"})
    .addTo(controller);

     //Image 5
     new ScrollMagic.Scene({
        triggerElement: '#section__5',
        // duration: 450,
        offset: -100,
        reverse: false
    })
    .setTween(TweenMax.from('#section__image__5', 0.7, {opacity: 0, scale: 0.2}))
    // .addIndicators({name: "Image 5"})
    .addTo(controller);





    //Image Pop up animation stop






    // Text Content Animation Start
    //Tribe Details Page Animation
    var t1 = new TimelineMax();
    var t2 = new TimelineMax();
    var t3 = new TimelineMax();
    var t4 = new TimelineMax();
    var t5 = new TimelineMax();

    var controller = new ScrollMagic.Controller();


    //Animation for Section 1
    t1.from("#section__1 .state__name", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
      .from("#section__1 h1", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
      .from("#section__1 p", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
      .from("#section__1 .section__tags__container", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
      .from("#section__1 .read__more__link", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
      .from("#section__1 .back__button", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
      new ScrollMagic.Scene({
        triggerElement: '#section__1',
        // duration: '80%',
        offset: 0,
        reverse: false
    })
        .setTween(t1)
        //.addIndicators()
        .addTo(controller)

         //Animation for Section 2
    t2.from("#section__2 .state__name", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    .from("#section__2 h1", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__2 p", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__2 .section__tags__container", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__2 a", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    new ScrollMagic.Scene({
      triggerElement: '#section__2',
      // duration: '80%',
      offset: -40,
      reverse: false
  })
      .setTween(t2)
      //.addIndicators()
      .addTo(controller)

        //Animation for Section 3
    t3.from("#section__3 .state__name", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    .from("#section__3 h1", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__3 p", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__3 .section__tags__container", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__3 a", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    new ScrollMagic.Scene({
      triggerElement: '#section__3',
      // duration: '80%',
      offset: -40,
      reverse: false
  })
      .setTween(t3)
      //.addIndicators()
      .addTo(controller)

          //Animation for Section 4
    t4.from("#section__4 .state__name", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    .from("#section__4 h1", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__4 p", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__4 .section__tags__container", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__4 a", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    new ScrollMagic.Scene({
      triggerElement: '#section__4',
      // duration: '80%',
      offset: -40,
      reverse: false
  })
      .setTween(t4)
      //.addIndicators()
      .addTo(controller)

             //Animation for Section 5
    t5.from("#section__5 .state__name", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    .from("#section__5 h1", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__5 p", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__5 .section__tags__container", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut },'-=0.15')
    .from("#section__5 a", 0.45, { y: 30, opacity: 0, ease: Power2.easeOut })
    new ScrollMagic.Scene({
      triggerElement: '#section__5',
      // duration: '80%',
      offset: -40,
      reverse: false
  })
      .setTween(t5)
      //.addIndicators()
      .addTo(controller)







    // Text Content Animation End








    //Test Figure Animation
    // TweenMax.from('.stacked__images', 0.8, {delay: 5,opacity: 0, scale: 0});




    

    // //Stacked Images (polaroid) animation function
    // function animateStackedImages(image__number) {
        
    //     topImage[0].style.transform = `scale(1.1) rotate(-1deg)`;
    //     topImage[0].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

    //     bottomImage[0].style.transform = `scale(1.1) rotate(-15deg)`;
    //     bottomImage[0].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    // }

    // //Stacked Images (polaroid) disanimation function
    // function disanimateStackedImages() {
        
    //     topImage[0].style.transform = `rotate(-5deg)`;
    //     topImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

    //     bottomImage[0].style.transform = `rotate(-8deg)`;
    //     bottomImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    // }

    //     var imageOne = []
    //     var imageTwo = []
    // // For loop using `template literal` 
    // for(var i = 0; i <= 4; i++){
    //     imageOne[i] = document.querySelector(`figure[id="top__image__${i + 1}"]`);
    //     imageTwo[i] = document.querySelector(`figure[id="bottom__image__${i + 1}"]`);

    //     console.log(imageOne[i]);

    //     imageOne[i].addEventListener("mouseover", function() {
        
    //         imageOne[i].style.transform = `scale(1.1) rotate(-1deg)`;
    //         imageOne[i].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;
    
    //         imageTwo[i].style.transform = `scale(1.1) rotate(-15deg)`;
    //         imageTwo[i].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    //     });

    //     imageTwo[i].addEventListener("mouseover", function() {
        
    //         imageOne[i].style.transform = `scale(1.1) rotate(-1deg)`;
    //         imageOne[i].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;
    
    //         imageTwo[i].style.transform = `scale(1.1) rotate(-15deg)`;
    //         imageTwo[i].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    //     });

    //     imageOne[i].addEventListener("mouseout", function(){
    //         imageOne[i].style.transform = `rotate(-5deg)`;
    //         imageOne[i].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

    //         imageTwo[i].style.transform = `rotate(-8deg)`;
    //         imageTwo[i].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    //     });

    //     imageTwo[i].addEventListener("mouseout", function(){
    //         imageOne[i].style.transform = `rotate(-5deg)`;
    //         imageOne[i].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

    //         imageTwo[i].style.transform = `rotate(-8deg)`;
    //         imageTwo[i].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    //     });
    // }









    // Stacked Images (polaroid) Hover animation start
    //Selecting individual stacked images
    let topImage = document.querySelectorAll('.stacked__images__2');
    let bottomImage = document.querySelectorAll('.stacked__images__1');

    //Image 1
    //Mouse Over animation => animateStackedImages()
    $('#top__image__1').on('mouseover',  function() {
        
        topImage[0].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[0].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[0].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[0].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__1').on('mouseover', function() {
        
        topImage[0].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[0].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[0].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[0].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    //Mouse Out animation => disanimateStackedImages()
    $('#top__image__1').on('mouseout', function() {
        
        topImage[0].style.transform = `rotate(-5deg)`;
        topImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[0].style.transform = `rotate(-8deg)`;
        bottomImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__1').on('mouseout', function() {
        
        topImage[0].style.transform = `rotate(-5deg)`;
        topImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[0].style.transform = `rotate(-8deg)`;
        bottomImage[0].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });







    //Image 2
    //Mouse Over animation => animateStackedImages()
    $('#top__image__2').on('mouseover',  function() {
        
        topImage[1].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[1].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[1].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[1].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__2').on('mouseover', function() {
        
        topImage[1].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[1].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[1].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[1].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    //Mouse Out animation => disanimateStackedImages()
    $('#top__image__2').on('mouseout', function() {
        
        topImage[1].style.transform = `rotate(-5deg)`;
        topImage[1].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[1].style.transform = `rotate(-8deg)`;
        bottomImage[1].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__2').on('mouseout', function() {
        
        topImage[1].style.transform = `rotate(-5deg)`;
        topImage[1].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[1].style.transform = `rotate(-8deg)`;
        bottomImage[1].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });




    //Image 3
    //Mouse Over animation => animateStackedImages()
    $('#top__image__3').on('mouseover',  function() {
        
        topImage[2].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[2].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[2].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[2].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__3').on('mouseover', function() {
        
        topImage[2].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[2].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[2].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[2].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    //Mouse Out animation => disanimateStackedImages()
    $('#top__image__3').on('mouseout', function() {
        
        topImage[2].style.transform = `rotate(-5deg)`;
        topImage[2].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[2].style.transform = `rotate(-8deg)`;
        bottomImage[2].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__3').on('mouseout', function() {
        
        topImage[2].style.transform = `rotate(-5deg)`;
        topImage[2].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[2].style.transform = `rotate(-8deg)`;
        bottomImage[2].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });







     //Image 4
    //Mouse Over animation => animateStackedImages()
    $('#top__image__4').on('mouseover',  function() {
        
        topImage[3].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[3].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[3].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[3].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__4').on('mouseover', function() {
        
        topImage[3].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[3].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[3].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[3].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    //Mouse Out animation => disanimateStackedImages()
    $('#top__image__4').on('mouseout', function() {
        
        topImage[3].style.transform = `rotate(-5deg)`;
        topImage[3].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[3].style.transform = `rotate(-8deg)`;
        bottomImage[3].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__4').on('mouseout', function() {
        
        topImage[3].style.transform = `rotate(-5deg)`;
        topImage[3].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[3].style.transform = `rotate(-8deg)`;
        bottomImage[3].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });






     //Image 5
    //Mouse Over animation => animateStackedImages()
    $('#top__image__5').on('mouseover',  function() {
        
        topImage[4].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[4].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[4].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[4].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__5').on('mouseover', function() {
        
        topImage[4].style.transform = `scale(1.1) rotate(-1deg)`;
        topImage[4].style.boxShadow = `-4px 8px 8px 4px rgba(0,0,0,0.35)`;

        bottomImage[4].style.transform = `scale(1.1) rotate(-15deg)`;
        bottomImage[4].style.boxShadow = `-1px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    //Mouse Out animation => disanimateStackedImages()
    $('#top__image__5').on('mouseout', function() {
        
        topImage[4].style.transform = `rotate(-5deg)`;
        topImage[4].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[4].style.transform = `rotate(-8deg)`;
        bottomImage[4].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });
    $('#bottom__image__5').on('mouseout', function() {
        
        topImage[4].style.transform = `rotate(-5deg)`;
        topImage[4].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;

        bottomImage[4].style.transform = `rotate(-8deg)`;
        bottomImage[4].style.boxShadow = `-2px 5px 8px 2px rgba(0,0,0,0.35)`;
    });

    // Stacked Images (polaroid) Hover animation end

});

