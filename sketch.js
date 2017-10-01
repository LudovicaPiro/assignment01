function setup() { createCanvas(800,600);
					background(230, 232, 250);
  
}

function draw() { 	

					//collo
					strokeWeight(5);
					stroke(188, 212, 230);
					line(width/2-25, height/2, width/2-25, height/2+100);
					line(width/2, height/2, width/2, height/2+100);
					line(width/2+25, height/2, width/2+25, height/2+100);

					//antenne
					line(width/2, height/2, width/2-50, height/2-75);
					line(width/2, height/2,width/2+50, 100);
					line(width/2, height/2,width/2+125,height/2+40);

					//testa
					fill(221, 173, 175);
					noStroke();
					ellipse(width/2, height/2, 75*2, 75*2);

					//ruota
					ellipse(width/2, height-52, 100,100)

					//occhio
					fill(61, 61, 91); //grande
					/*strokeWeight(5);
					stroke(25,255,200);*/
					ellipse( width/2+15, height/2-15, 50, 50);

					
					
					fill(255, 253, 208); //giallo
					ellipse(width/2+15, height/2-15, 10, 10);

					fill(61, 61, 91); //grigi piccoli
					ellipse(width/2-25, height/2-25, 20, 20);
					ellipse(width/2+40, height/2-40, 10, 10);
					ellipse(width/2+50, height/2, 8,8);

  					//corpo
  					rect(width/2-73, height/2+100, 154, 148);
  					strokeWeight(10);
  					stroke(221, 173, 175);
  					line(width/2-69, height/2+125, width/2+77, height/2+125);

  					//manine
  					strokeWeight(5);
  					stroke(188, 212, 230);
  					line(width/2-71, height/2+150, width/2-21, height/2+200); //L
  					line(width/2+77, height/2+150, width/2+27, height/2+200); //R
  					line(width/2-48, height/2+175, width/2-48, height/2+202); //v L
  					line(width/2-48, height/2+175, width/2-21, height/2+175); //o L
  					line(width/2+50, height/2+175, width/2+50, height/2+202); //v R
  					line(width/2+50, height/2+175, width/2+23, height/2+175); //o
  					noStroke();
  					fill(221, 173, 175);
  					ellipse(width/2-71, height/2+150,25,25);
  					ellipse(width/2+78, height/2+150,25,25);

  					//polsi
  					ellipse(width/2-48, height/2+175, 15, 15);
  					ellipse(width/2+52, height/2+175, 15,15);

}