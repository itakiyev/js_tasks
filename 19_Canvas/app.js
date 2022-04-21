// function draw() {
//   var canvas = document.getElementById("tutorial");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");
//   }
// }

/**
 * 01 - Simple example
 */

// function draw() {
//     var canvas = document.getElementById("canvas");
//     if (canvas.getContext) {
//       var ctx = canvas.getContext("2d");

//       ctx.fillStyle = "rgb(200,0,0)";
//       ctx.fillRect (10, 10, 55, 50);

//       ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
//       ctx.fillRect (30, 30, 55, 50);
//     }
//   }

/**
 * 02 - Drawing figures
 */

// function draw() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");

//     ctx.fillRect(25, 25, 100, 100);
//     ctx.clearRect(45, 45, 60, 60);
//     ctx.strokeRect(50, 50, 50, 50);
//   }
// }

// 02.1
// function draw() {
//   var canvas = document.getElementById("canvas");
//   if (canvas.getContext) {
//     var ctx = canvas.getContext("2d");

//     ctx.beginPath();
//     ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Внешняя окружность
//     ctx.moveTo(110, 75);
//     ctx.arc(75, 75, 35, 0, Math.PI, false); // рот (по часовой стрелке)
//     ctx.moveTo(65, 65);
//     ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Левый глаз
//     ctx.moveTo(95, 65);
//     ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Правый глаз
//     ctx.stroke();
//   }
// }

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//       var ctx = canvas.getContext('2d');

//       // Quadratric curves example
//       ctx.beginPath();
//       ctx.moveTo(75,25);
//       ctx.quadraticCurveTo(25,25,25,62.5);
//       ctx.quadraticCurveTo(25,100,50,100);
//       ctx.quadraticCurveTo(50,120,30,125);
//       ctx.quadraticCurveTo(60,120,65,100);
//       ctx.quadraticCurveTo(125,100,125,62.5);
//       ctx.quadraticCurveTo(125,25,75,25);
//       ctx.stroke();
//     }
//   }

// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext){
//       var ctx = canvas.getContext('2d');

//       // Cubic curves example
//       ctx.beginPath();
//       ctx.moveTo(75,40);
//       ctx.bezierCurveTo(75,37,70,25,50,25);
//       ctx.bezierCurveTo(20,25,20,62.5,20,62.5);
//       ctx.bezierCurveTo(20,80,40,102,75,120);
//       ctx.bezierCurveTo(110,102,130,80,130,62.5);
//       ctx.bezierCurveTo(130,62.5,130,25,100,25);
//       ctx.bezierCurveTo(85,25,75,37,75,40);
//       ctx.fill();
//     }
//   }

/**
 * Apply styles
 */

// function draw() {
//   var ctx = document.getElementById("canvas").getContext("2d");
//   for (var i = 0; i < 6; i++) {
//     for (var j = 0; j < 6; j++) {
//       ctx.fillStyle =
//         "rgb(" +
//         Math.floor(255 - 42.5 * i) +
//         "," +
//         Math.floor(255 - 42.5 * j) +
//         ",0)";
//       ctx.fillRect(j * 25, i * 25, 25, 25);
//     }
//   }
// }

/**
 * Drawing text
 */

// function draw() {
//   var ctx = document.getElementById("canvas").getContext("2d");
//   ctx.font = "48px serif";
//   ctx.fillText("Hello world", 10, 50);
// }

// function draw() {
//   var ctx = document.getElementById("canvas").getContext("2d");
//   ctx.font = "48px serif";
//   ctx.strokeText("Hello world", 10, 50);
// }

/**
 * Simple animations
 */


/**
 * Solar system example
 */
// var sun = new Image();
// var moon = new Image();
// var earth = new Image();
// function init() {
//   sun.src = "https://mdn.mozillademos.org/files/1456/Canvas_sun.png";
//   moon.src = "https://mdn.mozillademos.org/files/1443/Canvas_moon.png";
//   earth.src = "https://mdn.mozillademos.org/files/1429/Canvas_earth.png";
//   window.requestAnimationFrame(draw);
// }

// function draw() {
//   var ctx = document.getElementById("canvas").getContext("2d");

//   ctx.globalCompositeOperation = "destination-over";
//   ctx.clearRect(0, 0, 300, 300); // clear canvas

//   ctx.fillStyle = "rgba(0,0,0,0.4)";
//   ctx.strokeStyle = "rgba(0,153,255,0.4)";
//   ctx.save();
//   ctx.translate(150, 150);

//   // Earth
//   var time = new Date();
//   ctx.rotate(
//     ((2 * Math.PI) / 60) * time.getSeconds() +
//       ((2 * Math.PI) / 60000) * time.getMilliseconds()
//   );
//   ctx.translate(105, 0);
//   ctx.fillRect(0, -12, 50, 24); // Shadow
//   ctx.drawImage(earth, -12, -12);

//   // Moon
//   ctx.save();
//   ctx.rotate(
//     ((2 * Math.PI) / 6) * time.getSeconds() +
//       ((2 * Math.PI) / 6000) * time.getMilliseconds()
//   );
//   ctx.translate(0, 28.5);
//   ctx.drawImage(moon, -3.5, -3.5);
//   ctx.restore();

//   ctx.restore();

//   ctx.beginPath();
//   ctx.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
//   ctx.stroke();

//   ctx.drawImage(sun, 0, 0, 300, 300);

//   window.requestAnimationFrame(draw);
// }

// init();

/**
 * Clock example
 */

// function clock(){
//     var now = new Date();
//     var ctx = document.getElementById('canvas').getContext('2d');
//     ctx.save();
//     ctx.clearRect(0,0,150,150);
//     ctx.translate(75,75);
//     ctx.scale(0.4,0.4);
//     ctx.rotate(-Math.PI/2);
//     ctx.strokeStyle = "black";
//     ctx.fillStyle = "white";
//     ctx.lineWidth = 8;
//     ctx.lineCap = "round";

//     // Hour marks
//     ctx.save();
//     for (var i=0;i<12;i++){
//       ctx.beginPath();
//       ctx.rotate(Math.PI/6);
//       ctx.moveTo(100,0);
//       ctx.lineTo(120,0);
//       ctx.stroke();
//     }
//     ctx.restore();

//     // Minute marks
//     ctx.save();
//     ctx.lineWidth = 5;
//     for (i=0;i<60;i++){
//       if (i%5!=0) {
//         ctx.beginPath();
//         ctx.moveTo(117,0);
//         ctx.lineTo(120,0);
//         ctx.stroke();
//       }
//       ctx.rotate(Math.PI/30);
//     }
//     ctx.restore();

//     var sec = now.getSeconds();
//     var min = now.getMinutes();
//     var hr  = now.getHours();
//     hr = hr>=12 ? hr-12 : hr;

//     ctx.fillStyle = "black";

//     // write Hours
//     ctx.save();
//     ctx.rotate( hr*(Math.PI/6) + (Math.PI/360)*min + (Math.PI/21600)*sec )
//     ctx.lineWidth = 14;
//     ctx.beginPath();
//     ctx.moveTo(-20,0);
//     ctx.lineTo(80,0);
//     ctx.stroke();
//     ctx.restore();

//     // write Minutes
//     ctx.save();
//     ctx.rotate( (Math.PI/30)*min + (Math.PI/1800)*sec )
//     ctx.lineWidth = 10;
//     ctx.beginPath();
//     ctx.moveTo(-28,0);
//     ctx.lineTo(112,0);
//     ctx.stroke();
//     ctx.restore();

//     // Write seconds
//     ctx.save();
//     ctx.rotate(sec * Math.PI/30);
//     ctx.strokeStyle = "#D40000";
//     ctx.fillStyle = "#D40000";
//     ctx.lineWidth = 6;
//     ctx.beginPath();
//     ctx.moveTo(-30,0);
//     ctx.lineTo(83,0);
//     ctx.stroke();
//     ctx.beginPath();
//     ctx.arc(0,0,10,0,Math.PI*2,true);
//     ctx.fill();
//     ctx.beginPath();
//     ctx.arc(95,0,10,0,Math.PI*2,true);
//     ctx.stroke();
//     ctx.fillStyle = "rgba(0,0,0,0)";
//     ctx.arc(0,0,3,0,Math.PI*2,true);
//     ctx.fill();
//     ctx.restore();

//     ctx.beginPath();
//     ctx.lineWidth = 14;
//     ctx.strokeStyle = '#325FA2';
//     ctx.arc(0,0,142,0,Math.PI*2,true);
//     ctx.stroke();

//     ctx.restore();

//     window.requestAnimationFrame(clock);
//   }

//   window.requestAnimationFrame(clock);

/**
 * Panorama
 */

// var img = new Image();

// // User Variables - customize these to change the image being scrolled, its
// // direction, and the speed.

// img.src =
//   "https://mdn.mozillademos.org/files/4553/Capitan_Meadows,_Yosemite_National_Park.jpg";
// var CanvasXSize = 800;
// var CanvasYSize = 200;
// var speed = 30; //lower is faster
// var scale = 1.05;
// var y = -4.5; //vertical offset

// // Main program

// var dx = 0.75;
// var imgW;
// var imgH;
// var x = 0;
// var clearX;
// var clearY;
// var ctx;

// img.onload = function () {
//   imgW = img.width * scale;
//   imgH = img.height * scale;
//   if (imgW > CanvasXSize) {
//     x = CanvasXSize - imgW;
//   } // image larger than canvas
//   if (imgW > CanvasXSize) {
//     clearX = imgW;
//   } // image larger than canvas
//   else {
//     clearX = CanvasXSize;
//   }
//   if (imgH > CanvasYSize) {
//     clearY = imgH;
//   } // image larger than canvas
//   else {
//     clearY = CanvasYSize;
//   }
//   //Get Canvas Element
//   ctx = document.getElementById("canvas").getContext("2d");
//   //Set Refresh Rate
//   return setInterval(draw, speed);
// };

// function draw() {
//   //Clear Canvas
//   ctx.clearRect(0, 0, clearX, clearY);
//   //If image is <= Canvas Size
//   if (imgW <= CanvasXSize) {
//     //reset, start from beginning
//     if (x > CanvasXSize) {
//       x = 0;
//     }
//     //draw aditional image
//     if (x > CanvasXSize - imgW) {
//       ctx.drawImage(img, x - CanvasXSize + 1, y, imgW, imgH);
//     }
//   }
//   //If image is > Canvas Size
//   else {
//     //reset, start from beginning
//     if (x > CanvasXSize) {
//       x = CanvasXSize - imgW;
//     }
//     //draw aditional image
//     if (x > CanvasXSize - imgW) {
//       ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
//     }
//   }
//   //draw image
//   ctx.drawImage(img, x, y, imgW, imgH);
//   //amount to move
//   x += dx;
// }
