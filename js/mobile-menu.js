let body = document.querySelector('body'),
    menu = document.querySelector('.mobile-menu'),
    burger = document.querySelector('.header__menu');
window.addEventListener('click', function (event) {
    if (event.target === burger) {
        if (!burger.classList.contains('header__menu_active')) {
            burger.classList.add('header__menu_active')
            body.classList.add('mobile-modal-show');
        } else {
            burger.classList.remove('header__menu_active')
            body.classList.remove('mobile-modal-show');
        }
    } else if (event.target.classList.contains('mobile-modal__link')) {
        burger.classList.remove('header__menu_active')
        body.classList.remove('mobile-modal-show');
    }
});
