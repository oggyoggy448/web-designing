var show_nav = document.querySelector("#show");
show_nav.onclick = () => {
    var uls = document.querySelectorAll("ul");
    for (const ul of uls) {
        if(ul.style.display == "block"){
            ul.style.display = "none";
            show_nav.innerHTML = "show";
        }else{
            ul.style.display = "block";
            show_nav.innerHTML = "hide";
        }

    }
}