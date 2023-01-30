const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const canvasWidth = 1024 
const canvasHeigth = 576

canvas.width = canvasWidth
canvas.height = canvasHeigth

ctx.fillRect(0, 0, canvasWidth, canvasHeigth)

function animate() {
    window.requestAnimationFrame(animate)
}