const numbers = document.querySelectorAll('.main__span');
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i];
    let endCounter = number.textContent.replace(/[^0-9]/g, "")
    counter(endCounter, number);
}
function counter(endCounter, number) {
    let count = 0;
    let interval = setInterval(() => {
        number.textContent = ++count + "K+";
        if (count == endCounter) {
            clearInterval(interval);
        }
    }, 20);
}