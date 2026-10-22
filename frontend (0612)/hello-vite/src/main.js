import './reset.css'
import './style.css'

import Pelota from "./pelota.js";
import p5 from 'p5';

function sketch(p) {
  const pelotas = [];
  const MAX = 1;

  p.setup = () => {
    p.createCanvas(600, 600);
    // noStroke();

    for (let i = 0; i < MAX; i++) {
      pelotas.push(new Pelota(
        p.width / 2,
        p.height / 2,
        p.random(50, 100),
        p.random(-5, 5),
        p.random(-5, 5),
        true,
        p
      ))
    }
  };

  p.draw = function draw() {
    p.background(150);



    pelotas.forEach((pelota, i, arr) => {
      pelota.draw();

      if (arr.length > i) {
        const x = pelota?.x;
        const nextx = arr[i + 1]?.x;
        const y = pelota?.y;
        const nexty = arr[i + 1]?.y;

        p.line(x, y, nextx, nexty);
      }

    })

    for (const pelota of pelotas) {
      pelota.update();
    }

    const w = new Pelota(
      p.mouseX,
      p.mouseY, 100, 0, 0, false, p);

    w.draw()

  }


  p.mouseClicked = () => {
    const nueva = new Pelota(
      p.width / 2,
      p.height / 2,
      p.random(10, 100),
      p.random(-10, 10),
      p.random(-10, 10),
      false,
      p
    )

    pelotas.push(nueva)
  }

}

new p5(sketch, document.querySelector("#app"))