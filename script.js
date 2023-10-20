let settingsMenu = document.querySelector(".settings-menu");
let toggleDarkBtn = document.getElementById("dark-btn")

function settingsMenuToggle(){
    settingsMenu.classList.toggle("settings-menu-height");
}

toggleDarkBtn.onclick = function(){
    toggleDarkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "light"){
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }




    }

    if(localStorage.getItem("theme") == "light"){
        toggleDarkBtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
    } 
    else if (localStorage.getItem("theme") == "dark"){
        toggleDarkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    }
    else {
        localStorage.setItem("theme", "light");

    }

