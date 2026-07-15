console.log("globale.js chargé");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM chargé");

    document.querySelectorAll(".gilead-header").forEach(function(header){
        header.innerHTML = '<img src="https://i.servimg.com/u/f51/20/60/27/40/fiche_10.png" style="width:100%;height:100%;object-fit:cover;">';
    });
});
