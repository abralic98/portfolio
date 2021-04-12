function Loading(){
    
    setTimeout(Loading1,1000);
}

function Loading1(){
    document.getElementById("glavnaSekcija").style.display="block";
    document.getElementById("glavnaSekcija").style.animation="stvoriMainSekciju 5s forwards";
    document.getElementById("sekcija").style.animation="nestaniLoader 2s forwards";
    
    setTimeout(LoadingNone,1000);
}

function LoadingNone(){
    document.getElementById("sekcija").style.display="none";
}



