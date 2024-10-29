// show menubar
document.getElementById("menu-icon").addEventListener("click", function() {
   document.getElementById("nav-links").classList.toggle("show");
let links = document.querySelectorAll('#link');
 
for(let link of links){
    link.style.fontSize = '1.2em';
}
 
});
// close menubar
let close=   document.querySelector('closemenu');
function closemenu(){
    document.getElementById("nav-links").classList.remove("show");
 
 }

