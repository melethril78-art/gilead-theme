const headers = [
"https://i.servimg.com/u/f51/20/60/27/40/fiche_10.png",
"https://i.servimg.com/u/f51/20/60/27/40/header10.png",
"https://i.servimg.com/u/f51/20/60/27/40/header11.png",
"https://i.servimg.com/u/f51/20/60/27/40/header12.png"
];

document.addEventListener("DOMContentLoaded",()=>{

    const header=document.querySelector(".gilead-header");

    if(!header) return;

    headers.forEach((url,i)=>{

        const img=document.createElement("img");

        img.src=url;

        if(i===0) img.classList.add("active");

        header.appendChild(img);

    });

    const images=header.querySelectorAll("img");

    let current=0;

    setInterval(()=>{

        images[current].classList.remove("active");

        current=(current+1)%images.length;

        images[current].classList.add("active");

    },8000);

});
