window.addEventListener('click', function (e) {
    let container = this.document.querySelector('body');
    let x = e.pageX;
    let y = e.pageY;
    let pulse = this.document.createElement('div');
    pulse.classList.add('pulse');
    pulse.style.left = (x - 10) + "px";
    pulse.style.top = (y - 10) + "px";
    pulse.classList.add('pulse-active');
    container.append(pulse);
    pulse.addEventListener('animationend', function () {
        pulse.remove();
    });
});

