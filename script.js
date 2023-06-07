

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
});


