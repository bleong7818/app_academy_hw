document.addEventListener("DOMContentLoaded", function(){
    const canvasEl = document.getElementById("mycanvas");
    canvasEl.width = 500;
    canvasEl.height = 500;

    const ctx = canvasEl.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(10, 10, 50, 50);

    ctx.beginPath();
    
    ctx.arc(100, 100, 20, 0, 2 * Math.PI, true);
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 7;
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
    

});
