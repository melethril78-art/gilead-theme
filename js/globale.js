/*==================================================
        GILEAD - HEADER ROTATIF
==================================================*/

document.addEventListener("DOMContentLoaded", function () {

    const headers = [
        "https://i.servimg.com/u/f51/20/60/27/40/fiche_10.png",
        "https://i.servimg.com/u/f51/20/60/27/40/header10.png",
        "https://i.servimg.com/u/f51/20/60/27/40/header11.png",
        "https://i.servimg.com/u/f51/20/60/27/40/header12.png"
    ];

    document.querySelectorAll(".gilead-header").forEach(function(header){

        let current = 0;

        headers.forEach(function(url,index){

            const img = document.createElement("img");

            img.src = url;

            img.className = "gilead-slide";

            if(index===0){
                img.classList.add("active");
            }

            header.appendChild(img);

        });

        const slides = header.querySelectorAll(".gilead-slide");

        setInterval(function(){

            slides[current].classList.remove("active");

            current++;

            if(current>=slides.length){
                current=0;
            }

            slides[current].classList.add("active");

        },5000);

    });

});
