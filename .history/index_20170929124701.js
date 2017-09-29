var elem;
window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event) {
    // var circle = document.getElementById("circle");
    // circle.style.left = event.layerX - 25 + "px";
    // circle.style.top = event.layerY - 25 + "px";
    // var coord = circle.getBoundingClientRect();
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
    debugger
    document.getElementById('x2').innerHTML="x: " + (event.clientX - elem.offsetLeft);
    document.getElementById('y2').innerHTML="y: " + (event.clientY - elem.offsetTop);

    event.stopPropagation()
}