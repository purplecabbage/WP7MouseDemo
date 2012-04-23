

// Element.prototype.aEL = Element.prototype.addEventListener;
// Element.prototype.addEventListener = function(evtName)
// {
//     console.log("adding event listener :: " + evtName);
//     this.aEL.apply(this,arguments);
// }



document.addEventListener("deviceready",onDeviceReady,false);

// once the device ready event fires, you can safely do your thing! -jm
function onDeviceReady()
{
    document.getElementById("welcomeMsg").innerHTML += "Cordova is ready! version=" + window.device.cordova;
    console.log("onDeviceReady. You should see this message in Visual Studio's output window.");

    document.getElementById("topFrame").addEventListener("mousedown",function(e) {
            console.log("topFrame.mousedown");
            e.preventDefault();
    });

    sliderThumb.addEventListener("mousedown",onSliderMouseDown);
}

var startPos;
var elemPos;
var maxX;

function onSliderMouseDown(e)
{
    //console.log("onSliderMouseDown " +  sliderThumb.offsetLeft);
    e.preventDefault();

    elemPos = {x:sliderThumb.offsetLeft,
    y:sliderThumb.offsetTop};

    maxX = sliderBG.offsetWidth -  sliderThumb.offsetWidth;

    //console.log("elemPos = " + JSON.stringify(elemPos));

    startPos = {x:e.clientX, y:e.clientY};
    window.addEventListener("mousemove",onSliderMouseMove);
    window.addEventListener("mouseup",onSliderMouseUp);

}

function onSliderMouseMove(e)
{
    //console.log("onSliderMouseMove");
    var newX =  elemPos.x + e.clientX - startPos.x;
    newX = Math.max(newX,0);
    newX = Math.min(newX,maxX);

    var value = Math.round(newX / maxX * 100);
    sliderVal.innerText = value + "%";
    sliderThumb.style.left =  newX + "px"
}

function onSliderMouseUp(e)
{
    window.removeEventListener("mousemove",onSliderMouseMove);
    window.removeEventListener("mouseup",onSliderMouseUp);
}




//var canvas, context, tool;
// // Find the canvas element.
// canvas = document.getElementById('imageView');
// console.log("canvas = " + canvas);
// if (!canvas) {
// console.log('Error: I cannot find the canvas element!');
// return;
// }

// if (!canvas.getContext) {
// console.log('Error: no canvas.getContext!');
// return;
// }

// // Get the 2D canvas context.
// context = canvas.getContext('2d');
// if (!context) {
// console.log('Error: failed to getContext!');
// return;
// }

// console.log("context = " + context);
/*
context.lineWidth = 2;
context.fillStyle = 'rgba(255,128,0,1)';
context.strokeStyle = 'rgba(128,128,0,1)';
context.beginPath();
context.moveTo(0,0);
context.lineTo(100,100);
context.stroke();
*/
// Attach the mousedown, mousemove and mouseup event listeners.
// canvas.addEventListener('mousedown', evCanvasDown, false);

// var lastX = context.canvas.width * Math.random();
// var lastY = context.canvas.height * Math.random();
// var hue = 0;
// function line() {
// context.save();
// context.translate(context.canvas.width/2, context.canvas.height/2);
// context.scale(0.9, 0.9);
// context.translate(-context.canvas.width/2, -context.canvas.height/2);
// context.beginPath();
// context.lineWidth = 5 + Math.random() * 10;
// context.moveTo(lastX, lastY);
// lastX = context.canvas.width * Math.random();
// lastY = context.canvas.height * Math.random();
// context.bezierCurveTo(context.canvas.width * Math.random(),
// context.canvas.height * Math.random(),
// context.canvas.width * Math.random(),
// context.canvas.height * Math.random(),
// lastX, lastY);

// hue = hue + 10 * Math.random();
// context.strokeStyle = 'hsl(' + hue + ', 50%, 50%)';
// context.shadowColor = 'white';
// context.shadowBlur = 10;
// context.stroke();
// context.restore();
// }

//setInterval(line, 50);

// function blank() {
// context.fillStyle = 'rgba(0,0,0,0.1)';
// context.fillRect(0, 0, context.canvas.width, context.canvas.height);
// }
// //setInterval(blank, 40);

// }

// function evCanvasDown(e)
// {
// e.preventDefault();
// console.log(" evCanvasDown");

// window.addEventListener('mousemove', evCanvasMove, false);
// window.addEventListener('mouseup',   evCanvasUp, false);
// elemPos = {x:canvas.offsetLeft, y:canvas.offsetTop};
// startPos = {x:e.clientX - elemPos.x, y:e.clientY - elemPos.y};


// //      context.beginPath();

// //    context.moveTo(e.clientX,e.clientY);
// }

// function evCanvasMove(e)
// {
// e.preventDefault();
// console.log(" evCanvasMove");


// }

// function evCanvasUp(e)
// {
// //e.preventDefault();
// console.log(" evCanvasUp " + e);
// var s = "";
// for(var v in e)
// {
// s += v + " " + e[v] + ",";
// }
// console.log("s = " + s);
// console.log("elemPos = " + elemPos);
// console.log("startPos = " + startPos);
// //   return;

// var newPos = {x:e.clientX - startPos.x - elemPos.x,  y:e.clientY - startPos.y - elemPos.y};
// //  console.log("e.clientX = " + e.clientX);
// //   console.log("e.clientY = " + e.clientY);
// //   console.log(" evCanvasMove " + JSON.stringify(newPos));

// context.beginPath();

// context.moveTo(e.clientX,e.clientY);
// context.lineTo(newPos.x, newPos.y );
// context.stroke();
// window.removeEventListener('mousemove', evCanvasMove, false);
// window.removeEventListener('mouseup',   evCanvasUp, false);
// console.log("done");
// }






