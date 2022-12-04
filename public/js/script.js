document.querySelector(".hamburguer").addEventListener("click", () =>
    document.querySelector(".container").classList.toggle("show-menu")
);

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});

function repeatText() {
    var t = document.getElementById("titulo").value;
    document.getElementById("repeatTitulo").innerHTML = t;

    var g = document.getElementById("gravata").value;
    document.getElementById("repeatGravata").innerHTML = g;

    var l = document.getElementById("lide").value;
    document.getElementById("repeatLide").innerHTML = l;

    var i = document.getElementById("imagem").value;
    document.getElementById("repeatImagem").innerHTML = i;
}

function logar() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "valeskam" && senha == "przybeuka"){
        alert('Sucesso');
        location.href = "/works/add";
    }
    else{
        alert("Usuario ou Senha Incorertos");
    }
}