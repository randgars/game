function mouseMove(event) {
    // debugger
    var circle = document.getElementById("circle");
    debugger
    circle.clientLeft = event.layerX;
    circle.clientTop = event.layerY;
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}