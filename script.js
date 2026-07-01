/*
=========================================
DAVIZOLA COUNTRYBALLS
script.js
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================
        MENU MOBILE
    ==========================*/

    const menuButton = document.getElementById("menuButton");
    const nav = document.querySelector("nav");

    if(menuButton){

        menuButton.addEventListener("click", () =>{

            nav.classList.toggle("active");

        });

    }

    /*==========================
        FECHAR MENU AO CLICAR
    ==========================*/

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click",()=>{

            nav.classList.remove("active");

        });

    });

    /*==========================
        HEADER SCROLL
    ==========================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll",()=>{

        if(window.scrollY > 40){

            header.classList.add("scroll");

        }else{

            header.classList.remove("scroll");

        }

    });

    /*==========================
        ANIMAÇÕES
    ==========================*/

    const revealElements = document.querySelectorAll(
        ".about-card, .video-card, .content-grid article, .section-title"
    );

    const observer = new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{
        threshold:0.15
    });

    revealElements.forEach(el=>{

        observer.observe(el);

    });

    /*==========================
        HERO DIGITAÇÃO
    ==========================*/

    const heroTitle = document.querySelector(".hero h1");

    if(heroTitle){

        const texto = heroTitle.textContent;

        heroTitle.textContent = "";

        let i = 0;

        function escrever(){

            if(i < texto.length){

                heroTitle.textContent += texto.charAt(i);

                i++;

                setTimeout(escrever,30);

            }

        }

        escrever();

    }

    /*==========================
        BOTÃO TOPO
    ==========================*/

    const topButton = document.querySelector(".backToTop");

    if(topButton){

        window.addEventListener("scroll",()=>{

            if(window.scrollY > 500){

                topButton.classList.add("visible");

            }else{

                topButton.classList.remove("visible");

            }

        });

        topButton.addEventListener("click",()=>{

            window.scrollTo({

                top:0,

                behavior:"smooth"

            });

        });

    }

});
