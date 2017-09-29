function mouseMove(event) {
    var circle = document.getElementById("circle");
    circle.style.left = event.layerX + 25 + "px";
    circle.style.top = event.layerY + 25 + "px";
    var coord = circle.getBoundingClientRect();
    document.getElementById('x').innerHTML="x: " + event.layerX;
    document.getElementById('y').innerHTML="y: " + event.layerY;
}