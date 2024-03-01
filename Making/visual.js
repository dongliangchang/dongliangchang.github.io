function fadeIn(el, display){
  el.style.opacity = 0;
  el.style.display = display || "block";

  (function fade() {
    var val = parseFloat(el.style.opacity);
    if (!((val += .1) > 1)) {
      el.style.opacity = val;
      requestAnimationFrame(fade);
    }
  })();
}


function visual_click(event) {
    var id = event.currentTarget.id;
    console.log(id);
    document.getElementById('qr_image').src = "./visulization/"+id+".png";
    // document.getElementById('qr_image').src = "./visulization/Bubble.png";
    fadeIn(document.getElementById('qrcode'));
}