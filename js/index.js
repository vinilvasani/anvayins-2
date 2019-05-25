$(document).ready(function(){
    console.log("It Works!")
    var menuButton = document.querySelector('#menu__icon');
    menuButton.addEventListener('click', function(){
        console.log('Pressed');
        var navLinks = document.querySelector('#nav__links');
        navLinks.classList.toggle("mobile__menu");

        
    })
});

// //Lightbox
// var lightbox = new SimpleLightbox({
//     items: ['/assets/images/Resized/7.webp', '/assets/images/Resized/5.webp', '/assets/images/Resized/9.webp','/assets/images/Resized/4.webp','/assets/images/Resized/8.webp','/assets/images/Resized/6.webp',]
// });

// //Even Listener LightBox
// var lightboxImages = document.querySelectorAll('.lightbox__image');
// lightboxImages.forEach((image,index) => {
//     image.addEventListener("click", function(){
//         lightbox.showPosition(index);
//     });
// })