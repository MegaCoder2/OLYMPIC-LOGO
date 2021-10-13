var Canvas = document.getElementById("Canvas");
var cdx = Canvas.getContext("2d")
var color = "blue"
cdx.beginPath();
cdx.strokeStyle = color
cdx.lineWidth = 2
cdx.arc(200, 200, 40, 0, 2*Math.PI)
cdx.stroke()

Canvas.addEventListener("mousedown", click)
function click(e)
{
color = document.getElementById("Color").value
mousex = e.clientX - Canvas.offsetLeft
mousey = e.clientY - Canvas.offsetTop
console.log(mousex)
console.log(mousey)
circle(mousex, mousey)
}
function circle(mousex, mousey)
{
cdx.beginPath()
cdx.strokeStyle = color
cdx.lineWidth = 2
cdx.arc(mousex, mousey, 40, 0, 2*Math.PI)
cdx.stroke()
}
function clearcanvas()
{
cdx.clearRect(0, 0, Canvas.width, Canvas.height)
}
