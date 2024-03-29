const canvas = document.getElementById('draw');
const ctx = canvas.getContext('2d');


canvas.width = window.innerWidth;
canvas.height  = window.innerHeight;
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 50;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

const draw = (e) => {
  if (isDrawing === true) {
    console.log(e);
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360) {
      hue=0;
    }
  }
}

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener("mouseup", () => {
  isDrawing = false
  ctx.clearRect
});
canvas.addEventListener("mouseout", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);
