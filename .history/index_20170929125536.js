var elem;
window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event) {
    var x = event.clientX - elem.offsetLeft;
    var y = event.clientY - elem.offsetTop;

    var circle = document.getElementById("circle");
    // debugger
    if (x < 0 || x > elem.clientWidth || y < 0 || y > elem.clientHeight) {
        circle.style.left = "calc(50% - 25px)";
        circle.style.top = "calc(50% - 25px)";
    } else {
        circle.style.left = x - 25 + "px";
        circle.style.top = y - 25 + "px";
    }

    document.getElementById('x2').innerHTML="x: " + x;
    document.getElementById('y2').innerHTML="y: " + y;
}