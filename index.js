function Loading(){
    
    setTimeout(Loading1,6000);
}

function Loading1(){
    document.getElementById("glavnaSekcija").style.display="block";
    document.getElementById("glavnaSekcija").style.animation="stvoriMainSekciju 3s forwards";
    document.getElementById("sekcija").style.animation="nestaniLoader 2s forwards";
    
    setTimeout(LoadingNone,2000);
}

function LoadingNone(){
    document.getElementById("sekcija").style.display="none";
}

function StvoriHeader(){
    let header=document.getElementsByClassName("header");
    let headerlinija=document.getElementsByClassName("headerLinija");
    setTimeout(nestaniUvod,1000);
    header[1].style.animation="stvoriHeader 1s forwards";
    headerlinija[1].style.animation="stvoriHeader 1s forwards";
}

function nestaniUvod(){
    let uvod=document.getElementsByClassName("introduction");
    uvod[0].style.display="none";
}

function skroltop(){
    document.documentElement.scrollTop = 0;
    let header=document.getElementsByClassName("header");
    let headerlinija=document.getElementsByClassName("headerLinija");
    header[1].style.animation="brisiHeader 1s backwards";
    headerlinija[1].style.animation="brisiHeader 1s backwards";
}