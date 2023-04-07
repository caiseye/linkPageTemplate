const thumbNail = document.getElementsByClassName("thumbnail");

for(let i=0; i<thumbNail.length; i++){
  thumbNail[i].addEventListener("mouseover", function() {
    this.style.backgroundColor = "rgba(128, 128, 128, 0.5)";
    this.style.opacity = "0.5";
  });
  
  thumbNail[i].addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.opacity = "1";
  });
}