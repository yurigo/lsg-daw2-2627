export default class Pelota {
    // Store the p5 instance so methods can use instance-mode drawing and random APIs.
    constructor(x, y, d, vx, vy, epilepsia = true, p5) {
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = d / 2;
        this.vx = vx;
        this.vy = vy;
        this.p5 = p5;

        if (epilepsia) {
            this.colorR = this.p5.random(150, 255);
            this.colorG = this.p5.random(150, 255);
            this.colorB = this.p5.random(150, 255);
        }
        else {
            this.colorR = 255;
            this.colorG = 0;
            this.colorB = 0;
        }
    }

    // Draw the ball at its current coordinates.
    draw() {

        this.p5.fill(this.colorR, this.colorG, this.colorB)

        this.p5.circle(
            this.x,
            this.y,
            this.d
        )
    }

    // Bounce from canvas boundaries and move once by the velocity vector.
    update() {

        if (this.x + this.r > this.p5.width || this.x - this.r < 0) {
            this.vx = this.vx * -1
        }

        if (this.y + this.r > this.p5.height || this.y - this.r < 0) {
            this.vy = this.vy * -1
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}
