let toppart = $('.top-bart');
let nav = $('.navbar');
let slider = $('.carousel-item');
$(slider).css({
    height: `${window.innerHeight - ($(toppart).innerHeight() + $(nav).innerHeight())}px`
});
window.onresize = function () {
    $(slider).css({
        height: `${window.innerHeight - ($(toppart).innerHeight() + $(nav).innerHeight())}px`
    });
};
$('.carousel').carousel({
    interval: 0
});

let li = document.querySelectorAll('.work ul li');
li.forEach(item => {
    item.addEventListener('click' , function() {
        li.forEach(i => {
            i.classList.remove('active');
        });
        item.classList.add('active');
        let selector = item.getAttribute('data-class');
        if (selector === 'all') {
            $('.work .images .col-md').css('opacity', '1');
        } else {
            $('.work .images .col-md').css('opacity' , '.1')
            $(selector).css('opacity', '1');
        }
    })
});

let element = $('.table.main');

window.onresize = function () {
    if (window.innerWidth < 992) {
        $(element).css({
            transform: 'translateY(0)'
        })
    } else {
        $(element).css({
            transform: 'translateY(-15px)'
        }) 
    }
}