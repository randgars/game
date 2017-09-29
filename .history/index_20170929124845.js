var elem;
window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event) {
    var x = event.clientX - elem.offsetLeft;
    var y = event.clientY - elem.offsetTop;

    var circle = document.getElementById("circle");
    circle.style.left = x - 25 + "px";
    circle.style.top = y - 25 + "px";

    document.getElementById('x2').innerHTML="x: " + x;
    document.getElementById('y2').innerHTML="y: " + y;
}