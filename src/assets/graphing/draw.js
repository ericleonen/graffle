const drawGrid = (ctx, scale, canvas) => {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "lightgray";

    for (let x = scale; x < canvas.width; x += scale) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
    }

    for (let y = scale; y < canvas.height; y += scale) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
    }

    ctx.stroke();
};

const drawAxes = (ctx, canvas) => {
    ctx.beginPath();
    ctx.strokeStyle = "gray";
    ctx.lineWidth = 3;

    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);

    ctx.moveTo(canvas.width / 2, 0);
    ctx.lineTo(canvas.width / 2, canvas.height);

    ctx.stroke();
};

export const drawLine = (ctx, point1, point2, scale, canvas, { color, lineWidth }) => {
    ctx.beginPath();

    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round';

    const x1 = point1[0] * scale + canvas.width / 2;
    let y1 = -(point1[point1.length - 1]) * scale + canvas.height / 2;

    const x2 = point2[0] * scale + canvas.width / 2;
    let y2 = -point2[point2.length - 1] * scale + canvas.height / 2;

    const slope = (y2 - y1) / (x2 - x1);
    
    if (Math.abs(slope) > 2000) return;

    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}

export const drawGraph = (ctx, points, scale, canvas, { color, lineWidth }) => {
    for (let p = 0; p < points.length - 1; p++) {
        drawLine(ctx, points[p], points[p + 1], scale, canvas, { color, lineWidth });
    }
}

export const drawLabels = (ctx, scale, interval, canvas) => {
    ctx.beginPath();

    ctx.font = "20px Arial";
    ctx.fillStyle = "gray";
    ctx.textAlign = "center";

    const xMaxLabel = canvas.width / scale / 2 - interval;

    for (let xLabel = -xMaxLabel; xLabel <= xMaxLabel; xLabel += interval) {
        ctx.fillText(
            xLabel.toString(),
            xLabel * scale + canvas.width / 2 - (xLabel === 0 ? scale / 2 : 0),
            canvas.height / 2 + 23
        )
    }

    const yMaxLabel = canvas.height / scale / 2 - interval;

    for (let yLabel = yMaxLabel; yLabel >= -yMaxLabel; yLabel -= interval) {
        if (yLabel === 0) continue;

        ctx.fillText(
            (-yLabel).toString(),
            canvas.width / 2 - 22,
            yLabel * scale + canvas.height / 2
        );
    }
};

export const resetGraph = (ctx, canvas, origPoints, origColor) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (origColor === null) return;

    drawGrid(ctx, 25, canvas);
    drawAxes(ctx, canvas);
    drawLabels(ctx, 25, 5, canvas);

    drawGraph(ctx, origPoints, 25, canvas, {
        color: origColor,
        lineWidth: 8
    });
};