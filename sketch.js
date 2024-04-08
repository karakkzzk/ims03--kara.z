//Attributes: “Event Horizon” by KomaTebehttp://openprocessing.org/sketch/2130260License CreativeCommons Attribution NonCommercial ShareAlikehttps://creativecommons.org/licenses/by-nc-sa/3.0

let f=0;
let now;
let day, month, year;
let fullscreenBtn; // Button for toggling fullscreen

function setup(){
  createCanvas(windowWidth, windowHeight); // Set the canvas to fill the window
  now = new Date();
  day = now.getDate();
  month = now.getMonth() + 1;
  year = now.getFullYear();
  
  fullscreenBtn = createButton('Full Screen'); // Create the full screen button
  fullscreenBtn.position(10, 10); // Position the button
  fullscreenBtn.mousePressed(toggleFullscreen); // Specify the action on click
}

function draw(){
  let W = min(windowWidth, windowHeight); // Use the smaller dimension for square canvas behavior
  background(month*10, day*2, year%100);
  translate(width/2, height/2); // Center the drawing in the canvas
  rotate(f/W * (day/15));
  
  if(W > 0){
    for(let z=255; z>=0; z-=2){
      for(let i=0;i<TAU;i+=PI/64){ 
        let n=noise(i, tan(i)/90000, (f+z)/100);
        push();
        rotate(i);
        stroke(W-z);
        point(0, z*n);
        stroke(W, 77);
        point(z-n*W, i*12);
        pop();
      }
    }
  }
  f-=2;
}

// Toggle between full screen and windowed mode
function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  if (!fs) {
    fullscreenBtn.html('Windowed'); // Change button text to "Windowed" when in full screen
  } else {
    fullscreenBtn.html('Full Screen'); // Change back to "Full Screen" when exiting full screen
  }
}

// Adjust canvas size dynamically when the window is resized
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


// ----------------------------------------
// Minimized
// ----------------------------------------
// f=0,draw=t=>{if(f||createCanvas(W=400,W),background(0),r=W,translate(200,200),rotate(f/W),r>0)for(z=255;z>=0;z-=2)for(i=0;i<TAU;i+=PI/64)push(n=noise(i,tan(i)/9e4,(f+z)/100)),rotate(i),stroke(W-z),point(0,z*n),stroke(W,77),point(z-n*W,12*i),pop(),r--;f-=2};//#つぶやきProcessing