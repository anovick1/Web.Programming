var x = 450;
function moveRight() {
  x = x + 50;
  document.getElementById("redball").style.left = x + 'px';
}
function  bounce() {
  if(x < 1400){
    x = 1400;
    document.getElementById("redball").style.left = x + 'px';
   }
   else if(x >= 1400){
    x = 450;
     document.getElementById("redball").style.left = x + 'px';
 }

}
