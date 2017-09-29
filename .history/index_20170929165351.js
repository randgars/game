var elem;
var circle;
var pointX;
var pointY;
var cursorX;
var cursorY;
var pointY;
var pointY;
var pointY;
var circleTop;
var circleLeft;
var circleBottom;
var circleRight;
var value;
var fieldTop;
var fieldLeft;
var fieldBottom;
var fieldRight;

var clicksCounter = 0;

window.onload = function() {
    elem = document.getElementById("wrapper");
    elem.addEventListener("mousemove", mouseMove);
    elem.addEventListener("click", removeClick);

    circle = document.getElementById("circle");
    circle.addEventListener("click", addClick);

    setTimeout(function() {
        alert("GAME OVER!");
    }, 10000);
}

function addClick() {
    event.stopPropagation()
    return clicksCounter++;
}

function removeClick() {
    if (clicksCounter == 0) {
        return;
    }
    return clicksCounter--;
}

function mouseMove() {
    
    // cursor coordinates
    cursorX = event.clientX - elem.offsetLeft;
    cursorY = event.clientY - elem.offsetTop;
    
    // circle coordinates
    circleTop = circle.offsetTop;
    circleLeft = circle.offsetLeft;
    circleBottom = circle.offsetTop + circle.clientHeight;
    circleRight = circle.offsetLeft + circle.clientWidth;

    //protective field coordinates
    value = 0;
    fieldTop = circleTop - value;
    fieldLeft = circleLeft - value;
    fieldBottom = circleBottom + value;
    fieldRight = circleRight + value;

    // if (x < 0 || x > elem.clientWidth || y < 0 || y > elem.clientHeight) {
    //     circle.style.left = "calc(50% - 25px)";
    //     circle.style.top = "calc(50% - 25px)";
    // } else {
    //     circle.style.left = x - 25 + "px";
    //     circle.style.top = y - 25 + "px";
    // }
    pointX = getRandomPoint(0, elem.clientWidth + 1);
    pointY = getRandomPoint(0, elem.clientHeight + 1);

    if ((cursorX > fieldLeft &&  cursorX < fieldRight) && (cursorY > fieldTop && cursorY < fieldBottom)) {
        circle.style.top = pointY + "px";
        circle.style.left = pointX + "px";
    }

    document.getElementById('x').innerHTML="cursor x: " + cursorX;
    document.getElementById('y').innerHTML="cursor y: " + cursorY;
    document.getElementById('x2').innerHTML="point x: " + pointX;
    document.getElementById('y2').innerHTML="point y: " + pointY;

    document.getElementById('counter').innerHTML="clicks: " + clicksCounter;
}


function getRandomPoint(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}