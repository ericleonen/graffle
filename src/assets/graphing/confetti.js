const rand = (minVal, maxVal) => Math.random() * (maxVal - minVal) + minVal;

const colors = [
    'crimson',
    'darkorange',
    'gold',
    'lawn green',
    'lightskyblue',
    'lightseagreen',
    'mediumpurple'
];

export const randPick = (arr) => arr[Math.floor(rand(0, arr.length))];

export class Confetti {
    constructor(x, y) {
        this.position = { x, y };
        this.dimensions = {
            x: rand(10, 30),
            y: rand(10, 30)
        };
        this.scale = { x: 1, y: 1 };
        this.rotation = rand(0, 2 * Math.PI);
        this.color = randPick(colors);

        this.velocity = {
            x: rand(-1.5, 1.5),
            y: rand(10, 22)
        };
        this.terminalVelocity = -rand(1, 2);
        this.gravity = 0.1;
        this.tumbleSpeed = rand(-0.1, 0.1);
    }

    update() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;

        this.velocity.y -= this.gravity;
        this.velocity.y = Math.max(this.velocity.y, this.terminalVelocity);

        this.scale.y = Math.cos(this.position.y * this.tumbleSpeed);
    }
};

export const updateConfettis = (confettis, ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettis.forEach(confetti => {
        confetti.update();

        ctx.translate(confetti.position.x + canvas.width / 2, canvas.height / 2 - confetti.position.y);
        ctx.rotate(confetti.rotation);
        ctx.fillStyle = confetti.color;

        const height = confetti.dimensions.x * confetti.scale.x;
        const width = confetti.dimensions.y * confetti.scale.y;
        ctx.fillRect(
            width * -0.5, height * -0.5,
            width * 0.5, height * -0.5
        );

        ctx.setTransform(1, 0, 0, 1, 0, 0);
    });

    confettis.forEach((confetti, index) => {
        if (confetti.position.y < -canvas.height / 2)
            confettis.splice(index, 1);
    });
};

export const createConfettis = (count) => {
    const confettis = [];
    for (let i = 0; i < count; i++) confettis.push(new Confetti(0, -500));

    return confettis;
};