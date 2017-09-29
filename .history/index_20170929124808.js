var elem;
window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event) {
    var circle = document.getElementById("circle");
    circle.style.left = event.layerX - 25 + "px";
    circle.style.top = event.layerY - 25 + "px";
    var coord = circle.getBoundingClientRect();
    var x = event.clientX - elem.offsetLeft;
    var y = event.clientY - elem.offsetTop;
    document.getElementById('x2').innerHTML="x: " + x;
    document.getElementById('y2').innerHTML="y: " + y;

    event.stopPropagation()
}