let burg = document.getElementById("menu");
function menuBurg (){
    let menu = document.getElementById("listB");
    
    if (menu.style.display==="none"){
        menu.style.display="Block"
    } else{
        menu.style.display="none"
    }
}
burg.addEventListener('click',menuBurg)
