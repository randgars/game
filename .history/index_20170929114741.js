function mouseMove(event) {
    // debugger
    var circle = document.getElementById("circle");
    // debugger
    circle.offsetLeft = event.layerX;
    circle.offsetTop = event.layerY;
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}