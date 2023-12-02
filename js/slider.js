let swiper = new Swiper(".swiper--1", {
    pagination: {
        el: ".swiper-pagination-1",
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className + ' ' + className + '--' + (index + 1)}"></span>`;
        },
    },
});

let swiper2 = new Swiper(".swiper--2", {
    pagination: {
        el: ".swiper-pagination-2",
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet--active',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="${className + ' ' + className + '--' + (index + 1)}"></span>`;
        },
    },
});