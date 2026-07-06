const theme=localStorage.getItem("theme");

if(theme==="light"){
    document.body.classList.add("light");
}

function toggleTheme(){
    document.body.classList.toggle("light");
    localStorage.setItem(
        "theme",
        document.body.classList.contains("light")
        ?"light":"dark"
    );
}
