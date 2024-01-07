let img1=document.getElementById("img1")
let img_remove=document.getElementById("img_remove")
function fun1(){
    // alert("Bulb Turning On")
    img1.style.display='flex';
    img_remove.style.display='none'
}

let img2=document.getElementById("img2");
function fun2(){
    img2.style.display='flex';
    img1.style.display='none';
}