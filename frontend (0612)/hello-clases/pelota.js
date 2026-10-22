class Pelota{
    constructor(x,y,d,vx,vy,epilepsia = true){
        this.x = x;
        this.y = y;
        this.d = d;
        this.r = d / 2;
        this.vx = vx;
        this.vy = vy;
        if (epilepsia){
            this.colorR = random(150,255); 
            this.colorG = random(150,255); 
            this.colorB = random(150,255); 
        }
        else{
            this.colorR = 255; 
            this.colorG = 0; 
            this.colorB = 0; 
        }
    }

    draw(){

        fill(this.colorR, this.colorG, this.colorB)

        circle(
            this.x,
            this.y,
            this.d
        )
    }

    update(){

        if (this.x + this.r > width || this.x - this.r < 0){
            this.vx = this.vx * -1
        }
        
        if (this.y + this.r > height || this.y - this.r < 0 ){
            this.vy = this.vy * -1
        }

        this.x = this.x + this.vx;
        this.y = this.y + this.vy;
    }
}