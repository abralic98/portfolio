


window.addEventListener("scroll" ,() =>{
    let nevidljivi=document.getElementsByClassName("nevidljiviBlok");
    let header=document.getElementsByClassName("header");
    let headerLinija=document.getElementsByClassName("headerLinija");
    let contentPosition=nevidljivi[0].getBoundingClientRect().top;
    let contentPosition1=nevidljivi[1].getBoundingClientRect().top;
    let contentPosition2=nevidljivi[2].getBoundingClientRect().top;

    console.log(contentPosition1+ "  " +window.innerHeight)
    if(contentPosition<window.innerHeight-40 ){
        header[0].style.animation="brisiHeader 1s forwards";
        headerLinija[0].style.animation="brisiHeader 1s forwards";

        header[1].style.animation="stvoriHeader 1s forwards";
        headerLinija[1].style.animation="stvoriHeader 1s forwards";
    }

    if(contentPosition>window.innerHeight-40){
        header[0].style.animation="stvoriHeader 1s forwards";
        headerLinija[0].style.animation="StvoriHeader 1s forwards";

        header[1].style.animation="brisiHeader 1s forwards";
        headerLinija[1].style.animation="brisiHeader 1s forwards";
        
    }

    if(contentPosition1<window.innerHeight-70 ){
        header[1].style.animation="brisiHeader 1s forwards";
        headerLinija[1].style.animation="brisiHeader 1s forwards";

        header[2].style.animation="stvoriHeader 1s forwards";
        headerLinija[2].style.animation="stvoriHeader 1s forwards";
    }

    if(contentPosition1>window.innerHeight-40){
        header[1].style.animation="stvoriHeader 1s forwards";
        headerLinija[1].style.animation="StvoriHeader 1s forwards";

        header[2].style.animation="brisiHeader 1s forwards";
        headerLinija[2].style.animation="brisiHeader 1s forwards";
        
    }

    if(contentPosition2<window.innerHeight-40 ){
        header[2].style.animation="brisiHeader 1s forwards";
        headerLinija[2].style.animation="brisiHeader 1s forwards";

        header[3].style.animation="stvoriHeader 1s forwards";
        headerLinija[3].style.animation="stvoriHeader 1s forwards";
    }

    if(contentPosition2>window.innerHeight-40){
        header[2].style.animation="stvoriHeader 1s forwards";
        headerLinija[2].style.animation="StvoriHeader 1s forwards";

        header[3].style.animation="brisiHeader 1s forwards";
        headerLinija[3].style.animation="brisiHeader 1s forwards";
        
    }

})