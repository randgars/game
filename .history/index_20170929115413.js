function mouseMove(event) {
    var circle = document.getElementById("circle");
    debugger
    circle.style.left = event.layerX;
    circle.style.top = event.layerY;
    var coord = circle.getBoundingClientRect();
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}