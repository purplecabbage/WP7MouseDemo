

var canvas, context, tool;

function offsetWindow(obj)
{
    var topValue= 0,leftValue= 0;
    while(obj) {
        leftValue += obj.offsetLeft;
        topValue += obj.offsetTop;
        obj= obj.offsetParent;
    }
    return {x:leftValue,y:topValue};
}




document.addEventListener("deviceready",onDeviceReady);


function onDeviceReady(e) {

    console.log("onDeviceReady");
// Find the canvas element.
    canvas = document.getElementById('canvasView');
    if (!canvas) {
      console.log('Error: I cannot find the canvas element!');
      return;
    }

    if (!canvas.getContext) {
      console.log('Error: no canvas.getContext!');
      return;
    }

    // Get the 2D canvas context.
    context = canvas.getContext('2d');
    if (!context) {
      console.log('Error: failed to getContext!');
      return;
    }

    var offset = offsetWindow(canvas);

    // Pencil tool instance.
    tool = {
        started:false,

// This is called when you start holding down the mouse button.
// This starts the pencil drawing.        
        mousedown:function(ev) {
            context.beginPath();
            context.moveTo(ev.clientX - offset.x, ev.clientY - offset.y);
            this.started = true;
        },
// This function is called every time you move the mouse. Obviously, it only 
// draws if the tool.started state is set to true (when you are holding down 
// the mouse button).       
        mousemove:function(ev) {
            if (this.started) {
                context.lineTo(ev.clientX - offset.x, ev.clientY - offset.y);
                context.stroke();
            }
        },
        mouseup:function(ev) {
            if (this.started) {
                tool.mousemove(ev);
                this.started = false;
            }
        }

    };



    // The general-purpose event handler. This function just determines the mouse 
    // position relative to the canvas element.
    function onCanvasMouseEvent (ev) {
    // Call the event handler of the tool.
        var func = tool[ev.type];
        if (func) {
          ev.preventDefault();
          func(ev);
        }
    }

    // Attach the mousedown, mousemove and mouseup event listeners.
    canvas.addEventListener('mousedown', onCanvasMouseEvent, false);
    canvas.addEventListener('mousemove', onCanvasMouseEvent, false);
    canvas.addEventListener('mouseup',   onCanvasMouseEvent, false);

    context.fillStyle = "rgb(255,255,255)";  
    context.fillRect (0, 0, 300, 300);  

    context.fillStyle = "rgb(200,0,0)";  
    context.fillRect (10, 10, 55, 50);  
  
    context.fillStyle = "rgba(0, 0, 200, 0.5)";  
    context.fillRect (30, 30, 55, 50); 

    context.moveTo(200,200);
    context.lineTo(100, 100);
    context.stroke();

}




 



