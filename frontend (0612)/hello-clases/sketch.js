const pelotas = [];
const MAX = 1;


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


function draw(){
  background(150);

  

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

  for(p of pelotas){
    p.update();
  }

  const w = new Pelota(
    mouseX,
    mouseY, 100, 0 , 0, false);

    w.draw()

}

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