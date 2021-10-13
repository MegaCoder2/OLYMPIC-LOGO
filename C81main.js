var Canvas = document.getElementById("Canvas");
var cdx = Canvas.getContext("2d")

cdx.beginPath();
cdx.strokeStyle = "grey"
cdx.lineWidth = 2
cdx.rect(150, 130, 430, 200)
cdx.stroke()

cdx.beginPath();
cdx.strokeStyle = "blue"
cdx.lineWidth = 5
cdx.arc(250, 210, 40, 0, 2*Math.PI)
cdx.stroke()

cdx.beginPath();
cdx.strokeStyle = "black"
cdx.lineWidth = 5
cdx.arc(350, 210, 40, 0, 2*Math.PI)
cdx.stroke()

cdx.beginPath();
cdx.strokeStyle = "red"
cdx.lineWidth = 5
cdx.arc(450, 210, 40, 0, 2*Math.PI)
cdx.stroke()

cdx.beginPath();
cdx.strokeStyle = "orange"
cdx.lineWidth = 5
cdx.arc(300, 250, 40, 0, 2*Math.PI)
cdx.stroke()

cdx.beginPath();
cdx.strokeStyle = "green"
cdx.lineWidth = 5
cdx.arc(400, 250, 40, 0, 2*Math.PI)
cdx.stroke()