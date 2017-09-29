function mouseMove(event) {
    // debugger
    var circle = document.getElementById("circle");
    document.getElementById('x').innerHTML="x: " + event.layerX
    document.getElementById('y').innerHTML="y: " + event.layerY
    
}