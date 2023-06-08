/* Animation lorsque l'on se trouve dans une certaine section */
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

/* Animations pour la page sur le projet des ParisSportif */
const info_paris = document.getElementById('info_paris');
const info_paris_logo = document.getElementById('info_paris_logo');
const info_paris_desc = document.getElementById('info_paris_desc');
const paris_logo_anim = document.getElementById('logo_paris');
const bouton1 = document.getElementById('bouton1');

bouton1.addEventListener('click', function() {
    paris_logo_anim.style.marginTop = "50%";
    paris_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_paris.style.animation = "opacityAnimation 3s 1";
    info_paris_logo.style.animation = "opacityAnimation 3s 1";
    info_paris_desc.style.animation = "opacityAnimation 3s 1";
    info_paris.style.display = "flex";
    info_paris_logo.style.display = "flex";
    info_paris_desc.style.display = "flex";
});

/* Animations pour la page sur le projet Twitter */
const info_twi = document.getElementById('info_twi');
const info_twi_logo = document.getElementById('info_twi_logo');
const info_twi_desc = document.getElementById('info_twi_desc');
const twi_logo_anim = document.getElementById('logo_twi');
const bouton2 = document.getElementById('bouton2');

bouton2.addEventListener('click', function() {
    twi_logo_anim.style.marginTop = "50%";
    twi_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_twi.style.animation = "opacityAnimation 3s 1";
    info_twi_logo.style.animation = "opacityAnimation 3s 1";
    info_twi_desc.style.animation = "opacityAnimation 3s 1";
    info_twi.style.display = "flex";
    info_twi_logo.style.display = "flex";
    info_twi_desc.style.display = "flex";
});

/* Animations pour la page sur le projet Pokemon */
const info_poke = document.getElementById('info_poke');
const info_poke_logo = document.getElementById('info_poke_logo');
const info_poke_desc = document.getElementById('info_poke_desc');
const poke_logo_anim = document.getElementById('logo_poke');
const bouton3 = document.getElementById('bouton3');

bouton3.addEventListener('click', function() {
    poke_logo_anim.style.marginTop = "50%";
    poke_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_poke.style.animation = "opacityAnimation 3s 1";
    info_poke_logo.style.animation = "opacityAnimation 3s 1";
    info_poke_desc.style.animation = "opacityAnimation 3s 1";
    info_poke.style.display = "flex";
    info_poke_logo.style.display = "flex";
    info_poke_desc.style.display = "flex";
});

/* Animations pour la page sur le projet Pokemon */
const info_boulder = document.getElementById('info_boulder');
const info_boulder_logo = document.getElementById('info_boulder_logo');
const info_boulder_desc = document.getElementById('info_boulder_desc');
const info_boulder_photo = document.getElementById('info_boulder_photo');
const boulder_logo_anim = document.getElementById('logo_boulder');
const bouton4 = document.getElementById('bouton4');

bouton4.addEventListener('click', function() {
    boulder_logo_anim.style.marginTop = "50%";
    boulder_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_boulder.style.animation = "opacityAnimation 3s 1";
    info_boulder_logo.style.animation = "opacityAnimation 3s 1";
    info_boulder_desc.style.animation = "opacityAnimation 3s 1";
    info_boulder.style.display = "flex";
    info_boulder_logo.style.display = "flex";
    info_boulder_desc.style.display = "flex";
    info_boulder_photo.style.display = "flex";
});

var position_photo_boulder = 1;
var nbre_photo_boulder = 4;
const bouton_fleche_gauche = document.getElementById("fleche_gauche");
const bouton_fleche_droite = document.getElementById("fleche_droite");
var photo_boulder = document.getElementById("photo_boulder");



bouton_fleche_gauche.addEventListener('click', function(){
    if(position_photo_boulder-1>0){
        console.log("photo avant" + position_photo_boulder);
        position_photo_boulder = position_photo_boulder - 1;
        console.log(position_photo_boulder);
        photo_boulder.style.backgroundImage = "url(Images/bouldershark2.png)";

    }else{
        console.log("pas de photo avant");
        console.log(position_photo_boulder);
    }
})
bouton_fleche_droite.addEventListener('click', function(){
    if(position_photo_boulder+1<=nbre_photo_boulder){
        console.log("photo apres" + position_photo_boulder);
        position_photo_boulder = position_photo_boulder + 1;
        console.log(position_photo_boulder);
        photo_boulder.style.backgroundImage = "url(Images/x-mark.png)";
    }else{
        console.log("pas de photo apres");
        console.log(position_photo_boulder);
    }
})


const bloc_photo_boulder = document.getElementById("info_boulder_photo");

const croix = document.getElementById("croix");

photo_boulder.addEventListener('click', function(){
    bouton_fleche_gauche.style.display = "inline-block";
    bouton_fleche_droite.style.display = "inline-block";
    bloc_photo_boulder.style.position = "absolute";
    bloc_photo_boulder.style.left = "50%";
    bloc_photo_boulder.style.top = "50%";
    bloc_photo_boulder.style.width = "70%";
    bloc_photo_boulder.style.height = "70%";   
    bloc_photo_boulder.style.transform = "translate(-50%, -50%)";
    croix.style.display = "flex";
})

croix.addEventListener('click', function(){
    bouton_fleche_gauche.style.display = "none";
    bouton_fleche_droite.style.display = "none";
    bloc_photo_boulder.style.position = "absolute";
    bloc_photo_boulder.style.bottom = "30px";
    bloc_photo_boulder.style.left = "200px";
    bloc_photo_boulder.style.width = "50%";
    bloc_photo_boulder.style.height = "45%";  
    bloc_photo_boulder.style.transform = "translate(0%, 0%)"; 
    croix.style.display = "none";
    photo_boulder.style.backgroundImage = "url(Images/bouldershark2.png)";
})


