function drawChristmasTree(n) {
    for (var k = 0; k < n; k++) {
        var star = '';

        for (var l = 0; l < n - k; l++) {
            star += ' ';
        }
        for (var l = 0; l <= k * 2; l++) {
            star += '*';
        }

        console.log(star);
    }

}

var drawChristmasTree5 = drawChristmasTree(50);