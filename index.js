function Loading(){
    
    setTimeout(Loading1,6000);
}

function Loading1(){
    document.getElementById("glavnaSekcija").style.display="block";
    document.getElementById("glavnaSekcija").style.animation="stvoriMainSekciju 5s forwards";
    document.getElementById("sekcija").style.animation="nestaniLoader 2s forwards";
    
    setTimeout(LoadingNone,2000);
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
      message => alert("PogledajderMejl")
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
        Body : `Neki ${ime} te hoce kontaktirat sa mejla ${mejl} i njegova Naslov  glasi ${naslov} sa porukokm ${poruka}`
    }).then(
      message => alert("PogledajderMejl")
    );
}


