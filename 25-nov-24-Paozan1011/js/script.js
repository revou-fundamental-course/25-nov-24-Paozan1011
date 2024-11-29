function calculate() {
    let display = document.calc.display;
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}