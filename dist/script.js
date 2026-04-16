document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    drawGround();
    drawSnowText();
    drawSnowman();
    drawSnowflakes();

    // Draw gray sky + brown ground
    function drawGround() {
        // sky
        ctx.fillStyle = "#d3d3d3";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // ground
        ctx.fillStyle = "#8b2e2e";
        ctx.fillRect(0, 220, canvas.width, 80);
    }

    // draw "SNOW"
    function drawSnowText() {
        ctx.font = "80px Verdana";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillStyle = "blue";
        ctx.fillText("SNOW", canvas.width / 2, 10);
    }

    //draw snowman
    function drawSnowman() {
        ctx.fillStyle = "white";

        // bottom
        ctx.beginPath();
        ctx.arc(150, 200, 50, 0, Math.PI * 2);
        ctx.fill();

        // middle
        ctx.beginPath();
        ctx.arc(150, 120, 40, 0, Math.PI * 2);
        ctx.fill();

        // top
        ctx.beginPath();
        ctx.arc(150, 60, 25, 0, Math.PI * 2);
        ctx.fill();
    }

    
    function drawSnowflakes() {
        for (let i = 0; i < 100; i++) {
            let x = Math.random() * canvas.width;
            let y = Math.random() * canvas.height;
            drawSingleFlake(x, y);
        }
    }

    
    function drawSingleFlake(x, y) {
        let flakeSize = 4;

        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + flakeSize / 2, y + flakeSize / 2);
        ctx.lineTo(x, y + flakeSize);
        ctx.lineTo(x - flakeSize / 2, y + flakeSize / 2);
        ctx.closePath();

        ctx.fillStyle = "#eee";
        ctx.fill();
    }
});