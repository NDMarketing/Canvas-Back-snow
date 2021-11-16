// load the content first and then run the onload function

window.onresize = function() { 
    location.reload(); 
  }

window.onload = function () {
  // declare the canvas object and get the context
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

  // set the width and height of the window
  let W = window.innerWidth;
  let H = window.innerHeight;
  // appliy the width and height to the canvas
  canvas.width = W;
  canvas.height = H;

  const objectNumber = 300;
  const objectArray = [];
  // loop through the number of objects and push objects into array
  for (let i = 0; i < objectNumber; i++) {
    objectArray.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 3 + 2,
      d: Math.random() + 1,
    });
  }
  //draw objects on the canvas
  function drawObjects() {
    //clear the screen
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = "white";

    ctx.beginPath();
    for (let i = 0; i < objectNumber; i++) {
      let obj = objectArray[i];
      ctx.moveTo(obj.x, obj.y);
      ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2, true);
    }
    ctx.fill();
    moveObjects();
  }
  let angle = 0;
// using cos and sin to float between -1 to 1
  function moveObjects() {
    angle += 0.01;
    for (let i = 0; i < objectNumber; i++) {
      let obj = objectArray[i];

      obj.y += Math.pow(obj.d, 2) + 1;
      obj.x += Math.sin(angle) * 1.5;

      if (obj.y > H) {
        objectArray[i] = {
          x: Math.random() * W,
          y: 0,
          r: obj.r,
          d: obj.d,
        };
      }
    }
  }
  setInterval(drawObjects, 30);
};
