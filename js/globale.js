alert("Le JavaScript GitHub fonctionne !");
const headers=[
"https://i.servimg.com/u/f51/20/60/27/40/fiche_10.png",
"https://i.servimg.com/u/f51/20/60/27/40/header10.png",
"https://i.servimg.com/u/f51/20/60/27/40/header11.png",
"https://i.servimg.com/u/f51/20/60/27/40/header12.png"
];

document.addEventListener("DOMContentLoaded",function(){

    const header=document.querySelector(".gilead-header");

    if(!header) return;

    headers.forEach(function(url,index){

        const img=document.createElement("img");

        img.src=url;

        if(index===0) img.classList.add("active");

        header.appendChild(img);

    });

    const images=header.querySelectorAll("img");

    let current=0;

    setInterval(function(){

        images[current].classList.remove("active");

        current++;

        if(current>=images.length) current=0;

        images[current].classList.add("active");

    },5000);

});
