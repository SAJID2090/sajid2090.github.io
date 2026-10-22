(function(){
  var slides=document.querySelectorAll(".slide"),i=0,timer=null;
  function show(n){if(!slides.length)return;i=(n+slides.length)%slides.length;
    slides.forEach(function(s,k){s.classList.toggle("show",k===i);});}
  function stop(){if(timer){clearInterval(timer);timer=null;}}
  var p=document.querySelector(".prev"),n=document.querySelector(".next");
  if(p)p.addEventListener("click",function(){show(i-1);stop();});
  if(n)n.addEventListener("click",function(){show(i+1);stop();});
  if(slides.length&&!window.matchMedia("(prefers-reduced-motion: reduce)").matches){timer=setInterval(function(){show(i+1);},6000);}
  document.querySelectorAll(".copybtn").forEach(function(b){
    b.addEventListener("click",function(){
      var el=document.getElementById(b.dataset.copy);
      function sel(){var r=document.createRange();r.selectNodeContents(el);var s=getSelection();s.removeAllRanges();s.addRange(r);b.textContent="Selected";}
      try{navigator.clipboard.writeText(el.textContent).then(function(){b.textContent="Copied";},sel);}catch(e){sel();}
      setTimeout(function(){b.textContent="Copy";},2000);
    });
  });
})();
