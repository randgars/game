function mouseMove(event) {
    var circle = document.getElementById("circle");
    circle.style.left = event.layerX + "px";
    circle.style.top = event.layerY + "px";
    var coord = circle.getBoundingClientRect();
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}