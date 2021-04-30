canvas = document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width_of_line=3;
var mouseEvent="empty";
canvas.addEventListener("mousedown" , my_mousedown);
function my_mousedown(e){
    mouseEvent="mouseDown"
}
canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove(e){
    current_position_of_mousex = e.clientX-canvas.offsetLeft;
    current_position_of_mousey = e.clientY-canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y = ");
        console.log("x= " + current_position_of_mousex + "Y= " + current_position_of_mousey);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mousex, current_position_of_mousey, 5, 0,2* Math.PI);
        ctx.stroke();
    }
}
