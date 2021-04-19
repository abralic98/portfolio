function Loading(){
    if(window.innerWidth>1000){
        setTimeout(Loading1,8000);
    }
    if(window.innerWidth<=1000){
        setTimeout(fon,2000);
    }
}

function Loading1(){
    document.getElementById("glavnaSekcija").style.display="block";
    document.getElementById("glavnaSekcija").style.animation="stvoriMainSekciju 5s forwards";
    document.getElementById("sekcija").style.animation="nestaniLoader 2s forwards";
    
    setTimeout(LoadingNone,2000);
}
function fon(){
    document.getElementById("sekcija").style.display="none";
    document.getElementsByClassName("fon")[0].style.display="flex";
}

function LoadingNone(){
    document.getElementById("sekcija").style.display="none";
}

function Home(){
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function About(){
    document.getElementById("oMeni").scrollIntoView();
}

function Projects(){
    document.getElementById("projekti").scrollIntoView();
}

function Contact(){
    document.getElementById("contact").scrollIntoView();
}

//kontakt mejl

function sendMailCustomer(){
    let ime=document.getElementById("inputName").value;
    let mejl=document.getElementById("inputMejl").value;
    let poruka=document.getElementById("inputPoruka").value;
    let naslov=document.getElementById("inputSubject").value;
    sendMailToMe();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abralic98portfolio@gmail.com",
        Password : "biznisbajo98",
        To : mejl,
        From : "abralic98portfolio@gmail.com",
        Subject : "no-reply",
        Body : `Thank you for contacting me ${ime}. I recieved your message and I will respond as soon as possible`
    }).then(
      
    );
}

function sendMailToMe(){
    let ime=document.getElementById("inputName").value;
    let mejl=document.getElementById("inputMejl").value;
    let poruka=document.getElementById("inputPoruka").value;
    let naslov=document.getElementById("inputSubject").value;
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abralic98portfolio@gmail.com",
        Password : "biznisbajo98",
        To : "ante.bralic2@gmail.com",
        From : "abralic98portfolio@gmail.com",
        Subject : "Imas narudzbu",
        Body : `Neki ${ime} te hoce kontaktirat sa mejla ${mejl} i njegova Naslov  glasi ${naslov} sa porukom ${poruka}`
    }).then(
      
    );
}


function sendMailCustomerFon(){
    let ime=document.getElementById("inputNameFon").value;
    let mejl=document.getElementById("inputMejlFon").value;
    let poruka=document.getElementById("inputPorukaFon").value;
    let naslov=document.getElementById("inputSubjectFon").value;
    sendMailToMeFon();
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abralic98portfolio@gmail.com",
        Password : "biznisbajo98",
        To : mejl,
        From : "abralic98portfolio@gmail.com",
        Subject : "no-reply",
        Body : `Thank you for contacting me ${ime}. I recieved your message and I will respond as soon as possible`
    }).then(
      
    );
}

function sendMailToMeFon(){
    let ime=document.getElementById("inputNameFon").value;
    let mejl=document.getElementById("inputMejlFon").value;
    let poruka=document.getElementById("inputPorukaFon").value;
    let naslov=document.getElementById("inputSubjectFon").value;
    setTimeout(Reload,1000)
    Email.send({
        Host : "smtp.gmail.com",
        Username : "abralic98portfolio@gmail.com",
        Password : "biznisbajo98",
        To : "ante.bralic2@gmail.com",
        From : "abralic98portfolio@gmail.com",
        Subject : "Imas narudzbu",
        Body : `Neki ${ime} te hoce kontaktirat sa mejla ${mejl} i njegova Naslov  glasi ${naslov} sa porukom ${poruka}`
    }).then(
      
    );
}

function Reload(){
    window.location.reload(true);
}



