const pelotas = [];
// Number of balls created during setup; mouse clicks can add more.
const MAX = 1;


// p5 calls setup once to create the canvas and initial ball(s).
function setup(){
    createCanvas(600,600);
    // noStroke();

    for(let i = 0 ; i < MAX ; i++){
        pelotas.push(new Pelota(
            width / 2,
            height / 2,
            random(50,100),
            random(-5,5),
            random(-5,5),
            true
        ))
    }
    
}


// p5 calls draw repeatedly; drawing and position updates create the animation.
function draw(){
  background(150);

  

  // forEach provides the ball, its index, and the source array to this callback.
  pelotas.forEach( (p , i, arr) => {
    p.draw();

    if (arr.length > i){
        const x = p?.x;
        const nextx = arr[i+1]?.x;
        const y = p?.y;
        const nexty = arr[i+1]?.y;

        line(x,y,nextx, nexty);
    }

  })

  // Advance every ball after drawing its current position.
  for(p of pelotas){
    p.update();
  }

  const w = new Pelota(
    mouseX,
    mouseY, 100, 0 , 0, false);

    w.draw()

}

// A click adds a newly constructed ball to the shared array.
function mouseClicked(){
    const nueva = new Pelota(
        width / 2,
        height / 2,
        random(10,100),
        random(-10, 10),
        random(-10, 10)
    )

    pelotas.push(nueva)
}