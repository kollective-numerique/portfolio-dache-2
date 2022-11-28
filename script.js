let burg=document.getElementById("burg");
let open=document.getElementById("iconeOpen");
let close=document.getElementById("iconeClose");

function menu(){
    if (burg.style.display==="none"){
    close.style.display="block";
    open.style.display="none";
    burg.style.display="block";
    }else{
        burg.style.display="none";
    }
    
};
function menu1(){
    if (burg.style.display==="block"){
        open.style.display="block";
        close.style.display="none";
        burg.style.display="none";
    };
}
open.addEventListener('click',menu);
close.addEventListener('click',menu1);

// let burg = document.getElementById("iconeOpen");
// function menuBurg (){
//     let menu = document.getElementById("burg");
    
//     if (menu.style.display==="none"){
//         menu.style.display="Block"
//     } else{
//         menu.style.display="none"
//     }
// }
// burg.addEventListener('click',menuBurg)
