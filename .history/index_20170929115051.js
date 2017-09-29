function mouseMove(event) {
    var circle = document.getElementById("circle");
    circle.offsetLeft = event.layerX;
    circle.offsetTop = event.layerY;
    var coord = circle.getBoundingClientRect();
    debugger
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}