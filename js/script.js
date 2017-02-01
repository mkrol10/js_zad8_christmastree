function drawChristmasTree(heightTree) {
    for (var i = 0; i < heightTree; i++) {
        var star = '';

        for (var j = 0; j < heightTree - i; j++) {
            star += ' ';
        }
        for (var j = 0; j <= i * 2; j++) {
            star += '*';
        }

        console.log(star);
    }
}

var drawChristmasTree5 = drawChristmasTree(50);