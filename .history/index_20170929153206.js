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
    var fieldTop = circleTop - 10;
    var fieldLeft = circleLeft - 10;
    var fieldBottom = circleBottom + 10;
    var fieldRight = circleRight + 10;

    // if (x < 0 || x > elem.clientWidth || y < 0 || y > elem.clientHeight) {
    //     circle.style.left = "calc(50% - 25px)";
    //     circle.style.top = "calc(50% - 25px)";
    // } else {
    //     circle.style.left = x - 25 + "px";
    //     circle.style.top = y - 25 + "px";
    // }
    if ((cursorX > fieldLeft &&  cursorX < fieldRight) && (cursorY > fieldTop && cursorY < fieldBottom)) {
        debugger
        circle.style.display = "none";
    } else {
        circle.style.display = "block";
    }

    document.getElementById('x2').innerHTML="x: " + cursorX;
    document.getElementById('y2').innerHTML="y: " + cursorY;
}