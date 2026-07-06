const nav=document.querySelector("nav");
const btn=document.createElement("button");

btn.textContent="☰";
btn.className="menu-btn";

btn.onclick=()=>{
    nav.classList.toggle("show");
};

if(window.innerWidth<768){
    document.querySelector("header").prepend(btn);
}
