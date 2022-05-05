document.addEventListener("DOMContentLoaded", function () {
  let iframe = document.getElementById("iframe");

  let btn = document.getElementById("btn");

  btn.onclick = function(){
      let el = iframe.contentDocument.querySelector("h1");
      el.textContent = "Changed";
  }

  let ta = document.querySelector("textarea");

  ta.oninput = function(){
      iframe.contentDocument.body.innerHTML = ta.value;
  }

//   let video = document.querySelector("video");

//   console.log(video.src);

//   // video.onload = function(){
//   //     console.log(video.duration);
//   // }

//   video.onloadeddata = function(){
//       //console.log(video.duration);
//       //video.play();
//   }

//   let playBtn = document.getElementById("play-btn");

//   playBtn.onclick = function(){
//       //video.play();
//       //video.pause();
//       //console.log(video.currentTime);
//       //console.log(video.volume);
//       console.log(video.paused);
//   }

//   let progressInput = document.querySelector("#progress");

//   video.ontimeupdate = function(){
//       progressInput.value = video.currentTime;
//   }

//   video.onloadedmetadata = function(){
//       progressInput.value = 0;
//       progressInput.max = video.duration;
//   }

//   progressInput.onchange = function(){
//       video.currentTime = progressInput.value;
//   }



//   let dropTarget = document.getElementById("drop-target");

//   let dragTarget = document.getElementById("drag-target");

//   dragTarget.ondrag = function () {
//     //console.log("drag");
//   };
//   dragTarget.ondragstart = function (ev) {
//     console.log("dragstart");
//     //dropTarget.textContent = "Drop here";
//     ev.dataTransfer.setData("text", this.id);
//   };
//   dragTarget.ondragend = function () {
//     console.log("dragend");
//     //dropTarget.textContent = "";
//     dropTarget.style.border = "solid";
//   };

//   dropTarget.ondragenter = function () {
//     console.log("dragenter");
//     dropTarget.style.border = "dashed";
//   };

//   dropTarget.ondragleave = function () {
//     console.log("dragleave");
//     dropTarget.style.border = "solid";
//   };

//   dropTarget.ondragover = function (ev) {
//     ev.preventDefault();
//     console.log("dragover");
//   };

//   dropTarget.ondrop = function (ev) {
//     ev.preventDefault();
//     console.log("drop");
//     let data = ev.dataTransfer.getData("text");
//     this.append(document.getElementById(data));
//   };
});
