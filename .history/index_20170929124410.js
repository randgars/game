window.onload = function() {
    var elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove, true);
}

function mouseMove(event, second, third, some) {
    // var circle = document.getElementById("circle");
    // circle.style.left = event.layerX - 25 + "px";
    // circle.style.top = event.layerY - 25 + "px";
    // var coord = circle.getBoundingClientRect();
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;

    document.getElementById('x2').innerHTML="x: " + (e.clientX - slider.offsetLeft);
    document.getElementById('y2').innerHTML="y: " + (e.clientY - slider.offsetTop);

    event.stopPropagation()
}