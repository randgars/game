var elem;
window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event) {
    var circle = document.getElementById("circle");

    // cursor coordinates
    var cursorX = event.clientX - elem.offsetLeft;
    var cursorY = event.clientY - elem.offsetTop;
    
    // circle coordinates
    var circleTop = circle.offsetTop;
    var circleLeft = circle.offsetLeft;
    var circleBottom = circle.offsetTop + circle.clientHeight;
    var circleRight = circle.offsetLeft + circle.clientWidth;

    //protective field coordinates
    var value = 0;
    var fieldTop = circleTop - value;
    var fieldLeft = circleLeft - value;
    var fieldBottom = circleBottom + value;
    var fieldRight = circleRight + value;

    // if (x < 0 || x > elem.clientWidth || y < 0 || y > elem.clientHeight) {
    //     circle.style.left = "calc(50% - 25px)";
    //     circle.style.top = "calc(50% - 25px)";
    // } else {
    //     circle.style.left = x - 25 + "px";
    //     circle.style.top = y - 25 + "px";
    // }
    var pointX = getRandomPoint(0, elem.clientWidth + 1);
    var pointY = getRandomPoint(0, elem.clientHeight + 1);

    if ((cursorX > fieldLeft &&  cursorX < fieldRight) && (cursorY > fieldTop && cursorY < fieldBottom)) {
        circle.style.top = pointY + "px";
        circle.style.left = pointX + "px";
    } else {
        // circle.style.visibility = "visible";
    }

    function getRandomPoint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    document.getElementById('x').innerHTML="cursor x: " + cursorX;
    document.getElementById('y').innerHTML="cursor y: " + cursorY;
    document.getElementById('x2').innerHTML="point x: " + pointX;
    document.getElementById('y2').innerHTML="point y: " + pointY;
}