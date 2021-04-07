export class FlowField {
    private particles = [];
    private isInit = false;

    private s;
    private colorFn: () => any;
    private backgroundColor;
    private width: number;
    private height: number;

    constructor(s, colorFn, backgroundColor = 0, w, h) {
        this.s = s;
        this.colorFn = colorFn;
        this.backgroundColor = backgroundColor;
        this.width = w;
        this.height = h;
    }

    private setup() {
        for (let index = 0; index < 1000; index++) {
            this.particles.push({
                x: this.s.random(this.width),
                y: this.s.random(this.height),
                color: this.colorFn(),
            });
        }
        this.s.background(this.backgroundColor);
        this.isInit = true;
    }

    public destroy() {
        this.particles = [];
        this.isInit = false;
    }

    public draw() {
        if (!this.isInit) {
            this.setup();
            return;
        }
        for (let index = 0; index < this.particles.length; index++) {
            let p = this.particles[index];

            const noiseVal = this.s.noise(p.x / this.width, p.y / this.height);
            const angle = this.s.map(noiseVal, 0, 1, -2 * this.s.PI, 2 * this.s.PI);
            p.x = p.x + this.s.sin(angle);
            p.y = p.y + this.s.cos(angle);
            this.s.stroke(p.color);
            this.s.line(p.x, p.y, p.x + this.s.sin(angle), p.y + this.s.cos(angle));

            if (p.x > this.width || p.x < 0 || p.y > this.height || p.y < 0) {
                p.x = this.s.random(this.width);
                p.y = this.s.random(this.height);
            }
        }
    }
}
