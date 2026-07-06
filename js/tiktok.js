const TikTokAPI={
    login(){
        console.log("Inicio de sesión con TikTok");
    },
    publish(video){
        console.log("Publicando:",video);
    },
    logout(){
        console.log("Sesión cerrada");
    }
};

document.addEventListener("DOMContentLoaded",()=>{
    const btn=document.querySelector(".btn");
    if(btn){
        btn.addEventListener("click",()=>{
            TikTokAPI.login();
            alert("Aquí irá la integración con TikTok Login Kit.");
        });
    }
});
