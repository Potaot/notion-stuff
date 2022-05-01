window.onload = function onLoad() {
    var today = new Date();
    var end = new Date(2022, 4, 30);
    var start = new Date(2022, 3, 24);
    var today = today.getTime() - start.getTime()
    var end = end.getTime() - start.getTime();
    var bar = new ProgressBar.Circle(container, {
        color: '#000',
        strokeWidth: 4,
        trailWidth: 1,
        easing: 'easeInOut',
        duration: 1400,
        text: {
            autoStyleContainer: false
        },
        from: { color: '#f00', width: 4 },
        to: { color: '#09f', width: 4 },
        step: function (state, circle) {
            circle.path.setAttribute('stroke', state.color);
            circle.path.setAttribute('stroke-width', state.width);

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText('');
            } else {
                circle.setText(value);
            }

        }
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = '2rem';

    bar.animate(today/end);
};
