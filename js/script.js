window.addEventListener("scroll", () => {

    const header = document.getElementById("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(0,0,0,.98)";
        header.style.boxShadow =
        "0 0 20px rgba(212,175,55,.15)";

    }else{

        header.style.background =
        "rgba(0,0,0,.95)";

        header.style.boxShadow = "none";

    }

});