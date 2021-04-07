document.addEventListener('DOMContentLoaded', function () {
    makeSlider();
});

function makeSlider() {
    var html5Slider = document.getElementById('html5');
    var inputNumber = document.getElementById('output-number');
    
    noUiSlider.create(html5Slider, {
        start: 0,
        connect: true,
        step: 1,
        range: {
            'min': 0,
            'max': 20
        },
        format: wNumb({
            decimals: 0
        })
    });
    
    html5Slider.noUiSlider.on('update', function (values) {
        var value = values[0];
        inputNumber.textContent = value; 
    });
    // inputNumber.addEventListener('change', function () {
    //     html5Slider.noUiSlider.set(this.value);
    // });
}
