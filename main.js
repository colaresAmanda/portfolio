
function rotateHeroIcons() {
    // this function was create to main the icons "fixed" without rotate with the parent div
    var block = document.querySelectorAll(".hero-icon"),
        increase = Math.PI * 2 / block.length,
        x = 0, y = 0, angle = 0;

    for (var i = 0; i < block.length; i++) {
        var elem = block[i];
        x = 120 * Math.cos(angle) + 110;
        y = 120 * Math.sin(angle) + 110;
        elem.style.position = 'absolute';
        elem.style.left = x + 'px';
        elem.style.top = y + 'px';
        var rot = 90 + (i * (360 / block.length));
        angle += increase;
    }
}

function init() {
    rotateHeroIcons()
}

init()