/* Animation lorsque l'on se trouve dans une certaine section */
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{        
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=>observer.observe(el));

const bloc_projet1 = document.querySelector('.bloc_projet1');
const info_in_bloc_projet_paris = document.getElementById('info_in_bloc_projet_paris');

const bloc_projet2 = document.querySelector('.bloc_projet2');
const info_in_bloc_projet_twitter = document.getElementById('info_in_bloc_projet_twitter');

const bloc_projet3 = document.querySelector('.bloc_projet3');
const info_in_bloc_projet_pokemon = document.getElementById('info_in_bloc_projet_pokemon');

const bloc_projet4 = document.querySelector('.bloc_projet4');
const info_in_bloc_projet_boulder = document.getElementById('info_in_bloc_projet_boulder');

const bloc_projet5 = document.querySelector('.bloc_projet5');
const info_in_bloc_projet_autreproj = document.getElementById('info_in_bloc_projet_autreproj');

const bloc_projet6 = document.querySelector('.bloc_projet6');
const info_in_bloc_projet_quiz = document.getElementById('info_in_bloc_projet_quiz');

bloc_projet1.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_paris.style.display = "flex"
})
bloc_projet1.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_paris.style.display = "none"
})

bloc_projet2.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_pokemon.style.display = "flex"
})  
bloc_projet2.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_pokemon.style.display = "none"
})

bloc_projet3.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_twitter.style.display = "flex"
})
bloc_projet3.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_twitter.style.display = "none"
})

bloc_projet4.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_boulder.style.display = "flex"
})
bloc_projet4.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_boulder.style.display = "none"
})

bloc_projet5.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_autreproj.style.display = "flex"
})
bloc_projet5.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_autreproj.style.display = "none"
})

bloc_projet6.addEventListener('mouseover', (event)=>{
    info_in_bloc_projet_quiz.style.display = "flex"
})
bloc_projet6.addEventListener('mouseout', (event)=>{
    info_in_bloc_projet_quiz.style.display = "none"
})

/* Animations pour la page sur le projet des ParisSportif */
const info_paris = document.getElementById('info_paris');
const info_paris_logo = document.getElementById('info_paris_logo');
const info_paris_desc = document.getElementById('info_paris_desc');
const paris_logo_anim = document.querySelector('.bloc_titre_paris');
const bouton1 = document.getElementById('bouton1');
const photo_paris = document.getElementById("photo_paris");

const texte_clique_logo_paris = document.getElementById("texte_clique_logo_paris");
const bloc_photo_logo_paris = document.getElementById("bloc_photo_logo_paris");
const titre_logo_paris = document.getElementById("titre_logo_paris");

bouton1.addEventListener('click', function() {
    paris_logo_anim.style.position = "absolute";
    paris_logo_anim.style.bottom = "60px";
    paris_logo_anim.style.left = "30px";
    paris_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_paris.style.animation = "opacityAnimation 3s 1";
    info_paris_logo.style.animation = "opacityAnimation 3s 1";
    info_paris_desc.style.animation = "opacityAnimation 3s 1";
    photo_paris.style.animation = "opacityAnimation 3s 1";
    info_paris.style.display = "flex";
    info_paris_logo.style.display = "flex";
    info_paris_desc.style.display = "flex";
    info_paris_photo.style.display = "flex";
    bloc_photo_logo_paris.style.border = "none"
    texte_clique_logo_paris.style.display = "none"
    titre_logo_paris.style.display = "none"
});

bloc_photo_logo_paris.addEventListener('mouseover', (event)=>{
    texte_clique_logo_paris.style.color = "#D6E8EE"
})

bloc_photo_logo_paris.addEventListener('mouseout', (event)=>{
    texte_clique_logo_paris.style.color = "transparent"
})


const text_info_imageparis = document.getElementById("text_info_imageparis");
var position_photo_paris = 1;
var nbre_photo_paris = 6;


var url_parisphoto = "";
var text1_paris = "Pour accéder au menu de cette application, il est impératif de se connecter via son interface de connexion.";
var text2_paris = "Il est également possible de s'inscrire à cette application via une interface dédiée, qui est directement connectée à la base de données SQLite Studio. Toutefois, il est impossible de créer plusieurs comptes avec le même nom d'utilisateur.";
var text3_paris = "Une fois que vous êtes connecté, en accédant au menu de connexion, vous pourrez consulter votre nom d'utilisateur ainsi que le nombre de jetons associé à votre compte.";
var text4_paris = `Dans cette application, seuls les matchs correspondant au numéro de la journée sélectionnée sont visibles dans le menu. Ces informations sont obtenues grâce à la fonctionnalité de web scraping du site "l'equipe.fr". Vous pouvez également consulter le classement de la ligue souhaitée. Si vous cliquez sur votre nom d'utilisateur, vous aurez accès à votre historique de paris.`;
var text5_paris = "L'historique de vos paris sportifs vous offre la possibilité de consulter les détails de vos paris en cours, de ceux remportés et de ceux perdus. Vous pourrez accéder aux résultats pariés, aux résultats finaux, à la date des paris, à la mise engagée, et à d'autres informations pertinentes.";
var text6_paris = "Lorsque vous cliquez sur la cote du match sélectionné, les détails du pari s'affichent. Cela vous permet de consulter votre solde, de confirmer que le pari sélectionné est correct et surtout, de choisir le montant en jetons que vous souhaitez parier.";

const bouton_fleche_gauche_paris = document.getElementById("fleche_gauche_paris");
const bouton_fleche_droite_paris = document.getElementById("fleche_droite_paris");

bouton_fleche_gauche_paris.addEventListener('click', function(){
    if(position_photo_paris-1>0){
        console.log("photo avant" + position_photo_paris);
        position_photo_paris = position_photo_paris - 1;
        console.log(position_photo_paris);
        url_parisphoto = "Images/paris" + position_photo_paris + ".png";
        photo_paris.style.backgroundImage = `url(${url_parisphoto})`;
        if(position_photo_paris == 1){
            text_info_imageparis.innerHTML = text1_paris;
        }
        if(position_photo_paris == 2){
            text_info_imageparis.innerHTML = text2_paris;
        }
        if(position_photo_paris == 3){
            text_info_imageparis.innerHTML = text3_paris;
        }
        if(position_photo_paris == 4){
            text_info_imageparis.innerHTML = text4_paris;
        }
        if(position_photo_paris == 5){
            text_info_imageparis.innerHTML = text5_paris;
        }
    }else{
        console.log("pas de photo avant");
    }
})
bouton_fleche_droite_paris.addEventListener('click', function(){
    if(position_photo_paris+1<=nbre_photo_paris){   
        position_photo_paris = position_photo_paris + 1;
        url_parisphoto = "Images/paris" + position_photo_paris + ".png";
        photo_paris.style.backgroundImage = `url(${url_parisphoto})`;
        if(position_photo_paris == 2){
            text_info_imageparis.innerHTML = text2_paris;
        }
        if(position_photo_paris == 3){
            text_info_imageparis.innerHTML = text3_paris;
        }
        if(position_photo_paris == 4){
            text_info_imageparis.innerHTML = text4_paris;
        }
        if(position_photo_paris == 5){
            text_info_imageparis.innerHTML = text5_paris;
        }
        if(position_photo_paris == 6){
            text_info_imageparis.innerHTML = text6_paris;
        }
    }else{
        console.log("pas de photo apres");
    }
})


const bloc_photo_paris = document.getElementById("info_paris_photo");
var croix_paris = document.getElementById("croix_paris");

photo_paris.addEventListener('click', function(){
    bouton_fleche_gauche_paris.style.display = "inline-block";
    bouton_fleche_droite_paris.style.display = "inline-block";
    bloc_photo_paris.style.position = "absolute";
    bloc_photo_paris.style.left = "50%";
    bloc_photo_paris.style.bottom = "20%";
    bloc_photo_paris.style.width = "1000px";
    bloc_photo_paris.style.height = "calc(1000px*0.56)";   
    bloc_photo_paris.style.transform = "translate(-50%, 0%)";
    croix_paris.style.display = "flex";
    text_info_imageparis.style.display = "flex";
    text_info_imageparis.innerHTML = text1_paris;
    info_paris_logo.style.filter = "blur(1.5rem)";
    info_paris_desc.style.filter = "blur(1.5rem)";
    paris_logo_anim.style.filter = "blur(1.5rem)";
    info_paris.style.filter = "blur(1.5rem)";
})

croix_paris.addEventListener('click', function(){
    bouton_fleche_gauche_paris.style.display = "none";
    bouton_fleche_droite_paris.style.display = "none";
    bloc_photo_paris.style.bottom = "0px";
    bloc_photo_paris.style.left = "50%";
    bloc_photo_paris.style.transform = "translate(-50%, -5%)"; 
    bloc_photo_paris.style.width = "600px";
    bloc_photo_paris.style.height = "calc(600px*0.56)";  
    croix_paris.style.display = "none";
    photo_paris.style.backgroundImage = "url(Images/paris1.png)";
    text_info_imageparis.style.display = "none";
    info_paris_logo.style.filter = "blur(0)";
    info_paris_desc.style.filter = "blur(0)";
    paris_logo_anim.style.filter = "blur(0)";
    info_paris.style.filter = "blur(0)";
})

/* Animations pour la page sur le projet Twitter */
const info_twi = document.getElementById('info_twi');
const info_twi_logo = document.getElementById('info_twi_logo');
const info_twi_desc = document.getElementById('info_twi_desc');
const twi_logo_anim = document.querySelector('.bloc_titre_twitter');
const bouton2 = document.getElementById('bouton2');
const photo_twi = document.getElementById("photo_twi");

const texte_clique_logo_twitter = document.getElementById("texte_clique_logo_twitter");
const bloc_photo_logo_twitter = document.getElementById("bloc_photo_logo_twitter");
const titre_logo_twitter = document.getElementById("titre_logo_twitter");

bouton2.addEventListener('click', function() {
    twi_logo_anim.style.position = "absolute";
    twi_logo_anim.style.bottom = "60px";
    twi_logo_anim.style.left = "30px";
    twi_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_twi.style.animation = "opacityAnimation 3s 1";
    info_twi_logo.style.animation = "opacityAnimation 3s 1";
    info_twi_desc.style.animation = "opacityAnimation 3s 1";
    photo_twi.style.animation = "opacityAnimation 3s 1";
    info_twi.style.display = "flex";
    info_twi_logo.style.display = "flex";
    info_twi_desc.style.display = "flex";
    info_twi_photo.style.display = "flex";
    bloc_photo_logo_twitter.style.border = "none";
    texte_clique_logo_twitter.style.display = "none"
    titre_logo_twitter.style.display = "none"
});

bloc_photo_logo_twitter.addEventListener('mouseover', (event)=>{
    texte_clique_logo_twitter.style.color = "#D6E8EE"
})

bloc_photo_logo_twitter.addEventListener('mouseout', (event)=>{
    texte_clique_logo_twitter.style.color = "transparent"
})

const text_info_imagetwi = document.getElementById("text_info_imagetwi");
var position_photo_twi = 1;
var nbre_photo_twi = 5;


var url_twiphoto = "";
var text1_twi = "Il est possible d'effectuer des tweets en utilisant un nom d'utilisateur et un texte, éventuellement suivi d'un sujet précédé d'un '#'. Il est également possible de visualiser les tweets liés à un sujet spécifique, les tweets d'une personne en particulier, ou encore la liste complète des sujets utilisés.";
var text2_twi = "Les tweets sont présentés sous cette forme. Il est également possible d'effectuer un retweet en cliquant sur le bouton 'RT'. Cela affichera un message dans la console indiquant le contenu du tweet ainsi que l'identité de son auteur.";
var text3_twi = "Les tweets ayant le sujet 'Twitter' sont présentés de cette manière.";
var text4_twi = "Une alerte affiche la liste de tous les sujets présents dans les tweets.";
var text5_twi = "Les tweets ayant comme auteur 'romain' sont présentés de cette manière.";

const bouton_fleche_gauche_twi = document.getElementById("fleche_gauche_twi");
const bouton_fleche_droite_twi = document.getElementById("fleche_droite_twi");

bouton_fleche_gauche_twi.addEventListener('click', function(){
    if(position_photo_twi-1>0){
        position_photo_twi = position_photo_twi - 1;
        url_twiphoto = "Images/twitter" + position_photo_twi + ".png";
        photo_twi.style.backgroundImage = `url(${url_twiphoto})`;
        if(position_photo_twi == 1){
            text_info_imagetwi.innerHTML = text1_twi;
        }
        if(position_photo_twi == 2){
            text_info_imagetwi.innerHTML = text2_twi;
        }
        if(position_photo_twi == 3){
            text_info_imagetwi.innerHTML = text3_twi;
        }
        if(position_photo_twi == 4){
            text_info_imagetwi.innerHTML = text4_twi;
        }
    }else{
        console.log("pas de photo avant");
        
    }
})
bouton_fleche_droite_twi.addEventListener('click', function(){
    if(position_photo_twi+1<=nbre_photo_twi){
        position_photo_twi = position_photo_twi + 1;
        url_twiphoto = "Images/twitter" + position_photo_twi + ".png";
        photo_twi.style.backgroundImage = `url(${url_twiphoto})`;
        if(position_photo_twi == 2){
            text_info_imagetwi.innerHTML = text2_twi;
        }
        if(position_photo_twi == 3){
            text_info_imagetwi.innerHTML = text3_twi;
        }
        if(position_photo_twi == 4){
            text_info_imagetwi.innerHTML = text4_twi;
        }
        if(position_photo_twi == 5){
            text_info_imagetwi.innerHTML = text5_twi;
        }
    }else{
        console.log("pas de photo apres");    
    }
})


const bloc_photo_twi = document.getElementById("info_twi_photo");
const croix_twi = document.getElementById("croix_twi");

photo_twi.addEventListener('click', function(){
    bouton_fleche_gauche_twi.style.display = "inline-block";
    bouton_fleche_droite_twi.style.display = "inline-block";
    bloc_photo_twi.style.position = "absolute";
    bloc_photo_twi.style.left = "50%";
    bloc_photo_twi.style.bottom = "20%";
    bloc_photo_twi.style.width = "850px";
    bloc_photo_twi.style.height = "calc(1000px*0.56)";   
    bloc_photo_twi.style.transform = "translate(-50%, 0%)";
    croix_twi.style.display = "flex";
    text_info_imagetwi.style.display = "flex";
    text_info_imagetwi.innerHTML = text1_twi;
    info_twi_logo.style.filter = "blur(1.5rem)";
    info_twi_desc.style.filter = "blur(1.5rem)";
    twi_logo_anim.style.filter = "blur(1.5rem)";
    info_twi.style.filter = "blur(1.5rem)";
})

croix_twi.addEventListener('click', function(){
    bouton_fleche_gauche_twi.style.display = "none";
    bouton_fleche_droite_twi.style.display = "none";
    bloc_photo_twi.style.position = "absolute";
    bloc_photo_twi.style.bottom = "0px";
    bloc_photo_twi.style.left = "50%";
    bloc_photo_twi.style.transform = "translate(-50%, -5%)"; 
    bloc_photo_twi.style.width = "600px";
    bloc_photo_twi.style.height = "calc(600px*0.60)";
    croix_twi.style.display = "none";
    photo_twi.style.backgroundImage = "url(Images/twitter1.png)";
    text_info_imagetwi.style.display = "none";
    info_twi_logo.style.filter = "blur(0)";
    info_twi_desc.style.filter = "blur(0)";
    twi_logo_anim.style.filter = "blur(0)";
    info_twi.style.filter = "blur(0)";
})

/* Animations pour la page sur le projet Pokemon */
const info_poke = document.getElementById('info_poke');
const info_poke_logo = document.getElementById('info_poke_logo');
const info_poke_desc = document.getElementById('info_poke_desc');
const poke_logo_anim = document.querySelector('.bloc_titre_poke');
const bouton3 = document.getElementById('bouton3');
const photo_poke = document.getElementById("photo_poke");

const texte_clique_logo_pokemon = document.getElementById("texte_clique_logo_pokemon");
const bloc_photo_logo_pokemon = document.getElementById("bloc_photo_logo_pokemon");
const titre_logo_poke = document.getElementById("titre_logo_poke");

bouton3.addEventListener('click', function() {
    poke_logo_anim.style.position = "absolute";
    poke_logo_anim.style.bottom = "60px";
    poke_logo_anim.style.left = "30px";
    poke_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_poke.style.animation = "opacityAnimation 3s 1";
    info_poke_logo.style.animation = "opacityAnimation 3s 1";
    info_poke_desc.style.animation = "opacityAnimation 3s 1";
    photo_poke.style.animation = "opacityAnimation 3s 1";
    info_poke.style.display = "flex";
    info_poke_logo.style.display = "flex";
    info_poke_desc.style.display = "flex";
    info_poke_photo.style.display = "flex";
    bloc_photo_logo_pokemon.style.border = "none";
    texte_clique_logo_pokemon.style.display = "none"
    titre_logo_poke.style.display = "none"
});

bloc_photo_logo_pokemon.addEventListener('mouseover', (event)=>{
    texte_clique_logo_pokemon.style.color = "#D6E8EE"
})

bloc_photo_logo_pokemon.addEventListener('mouseout', (event)=>{
    texte_clique_logo_pokemon.style.color = "transparent"
})

const text_info_imagepoke = document.getElementById("text_info_imagepoke");
var position_photo_poke = 1;
var nbre_photo_poke = 4;


var url_pokephoto = "";
var text1_poke = "Dans cette version de Pokémon, il est possible d'engager des combats contre des Pokémon se trouvant dans les buissons. Remporter un combat vous octroie de l'expérience. Il est également la possible de lire les pancartes, de se déplacer pour atteindre la PokéBalls et de se soigner dans le centre Pokémon.";
var text2_poke = "En appuyant sur la touche 'Esc', une page d'information s'affiche, répertoriant toutes les touches pouvant être utilisées dans le jeu, ainsi que les options permettant de sauvegarder ou de reprendre une partie en cours.";
var text3_poke = "Dans le jeu, un Pokédex est accessible. Il présente les images des Pokémon que vous avez déjà rencontrés, ainsi que le nombre de fois que vous les avez observés.";
var text4_poke = "Voici un cas où Carapuce a été rencontré une seule fois.";

const bouton_fleche_gauche_poke = document.getElementById("fleche_gauche_poke");
const bouton_fleche_droite_poke = document.getElementById("fleche_droite_poke");

bouton_fleche_gauche_poke.addEventListener('click', function(){
    if(position_photo_poke-1>0){
        position_photo_poke = position_photo_poke - 1;
        url_pokephoto = "Images/poke" + position_photo_poke + ".png";
        photo_poke.style.backgroundImage = `url(${url_pokephoto})`;
        if(position_photo_poke == 1){
            text_info_imagepoke.innerHTML = text1_poke;
        }
        if(position_photo_paris == 2){
            text_info_imagepoke.innerHTML = text2_poke;
        }
        if(position_photo_paris == 3){
            text_info_imagepoke.innerHTML = text3_poke;
        }
    }else{
        console.log("pas de photo avant");
    }
})
bouton_fleche_droite_poke.addEventListener('click', function(){
    if(position_photo_poke+1<=nbre_photo_poke){
        position_photo_poke = position_photo_poke + 1;
        url_pokephoto = "Images/poke" + position_photo_poke + ".png";
        photo_poke.style.backgroundImage = `url(${url_pokephoto})`;
        if(position_photo_poke == 2){
            text_info_imagepoke.innerHTML = text2_poke;
        }
        if(position_photo_twi == 3){
            text_info_imagepoke.innerHTML = text3_poke;
        }
        if(position_photo_twi == 4){
            text_info_imagepoke.innerHTML = text4_poke;
        }
    }else{
        console.log("pas de photo apres");  
    }
})


const bloc_photo_poke = document.getElementById("info_poke_photo");

const croix_poke = document.getElementById("croix_poke");

photo_poke.addEventListener('click', function(){
    bouton_fleche_gauche_poke.style.display = "inline-block";
    bouton_fleche_droite_poke.style.display = "inline-block";
    bloc_photo_poke.style.position = "absolute";
    bloc_photo_poke.style.left = "50%";
    bloc_photo_poke.style.bottom = "15%";
    bloc_photo_poke.style.width = "1000px";
    bloc_photo_poke.style.height = "calc(1000px*0.60)";   
    bloc_photo_poke.style.transform = "translate(-50%, 0%)";
    croix_poke.style.display = "flex";
    text_info_imagepoke.style.display = "flex";
    text_info_imagepoke.innerHTML = text1;
    info_poke_logo.style.filter = "blur(1.5rem)";
    info_poke_desc.style.filter = "blur(1.5rem)";
    poke_logo_anim.style.filter = "blur(1.5rem)";
    info_poke.style.filter = "blur(1.5rem)";
})

croix_poke.addEventListener('click', function(){
    bouton_fleche_gauche_poke.style.display = "none";
    bouton_fleche_droite_poke.style.display = "none";
    bloc_photo_poke.style.position = "absolute";
    bloc_photo_poke.style.bottom = "30px";
    bloc_photo_poke.style.left = "50%";
    bloc_photo_poke.style.width = "600px";
    bloc_photo_poke.style.height = "calc(600px*0.60)";  
    bloc_photo_poke.style.transform = "translate(-50%, -5%)"; 
    croix_poke.style.display = "none";
    photo_poke.style.backgroundImage = "url(Images/poke1.png)";
    text_info_imagepoke.style.display = "none";
    info_poke_logo.style.filter = "blur(0)";
    info_poke_desc.style.filter = "blur(0)";
    poke_logo_anim.style.filter = "blur(0)";
    info_poke.style.filter = "blur(0)";
})

/* Animations pour la page sur le projet Pokemon */
const info_boulder = document.getElementById('info_boulder');
const info_boulder_logo = document.getElementById('info_boulder_logo');
const info_boulder_desc = document.getElementById('info_boulder_desc');
const info_boulder_photo = document.getElementById('info_boulder_photo');
const boulder_logo_anim = document.querySelector('.bloc_titre_boulder');
const bouton4 = document.getElementById('bouton4');
const photo_boulder = document.getElementById("photo_boulder");

const texte_clique_logo_boulder = document.getElementById("texte_clique_logo_boulder");
const bloc_photo_logo_boulder = document.getElementById("bloc_photo_logo_boulder");
const titre_logo_boulder = document.getElementById("titre_logo_boulder");

bouton4.addEventListener('click', function() {
    boulder_logo_anim.style.position = "absolute";
    boulder_logo_anim.style.bottom = "60px";
    boulder_logo_anim.style.left = "30px";
    boulder_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_boulder.style.animation = "opacityAnimation 3s 1";
    info_boulder_logo.style.animation = "opacityAnimation 3s 1";
    info_boulder_desc.style.animation = "opacityAnimation 3s 1";
    photo_boulder.style.animation = "opacityAnimation 3s 1";
    info_boulder.style.display = "flex";
    info_boulder_logo.style.display = "flex";
    info_boulder_desc.style.display = "flex";
    info_boulder_photo.style.display = "flex";
    bloc_photo_logo_boulder.style.border = "none";
    texte_clique_logo_boulder.style.display = "none"
    titre_logo_boulder.style.display = "none"
});

bloc_photo_logo_boulder.addEventListener('mouseover', (event)=>{
    texte_clique_logo_boulder.style.color = "#D6E8EE"
})

bloc_photo_logo_boulder.addEventListener('mouseout', (event)=>{
    texte_clique_logo_boulder.style.color = "transparent"
})

var position_photo_boulder = 1;
var nbre_photo_boulder = 4;


var url_boulderphoto = "";
var text1 = "Ce jeu offre trois options de jeu : vous pouvez sélectionner l'un des trois niveaux prédéfinis en cliquant sur le bouton 'Jouer', reprendre la partie précédemment commencée, ou importer un fichier .txt contenant vos propres emplacements d'obstacles.";
var text2 = "Niveau 1. Les règles pour le jeu sont : une pierre peut être déplacée uniquement s'il n'y a rien derrière elle, une pierrre tombe s'il y a un espace vide en dessous, et le requin peut manger à la fois les herbes et les nageurs.";
var text3 = "Niveau 2. La partie se termine par une défaite si le joueur est écrasé par une pierre, et par une victoire si tous les nageurs sont mangés.";
var text4 = "Niveau 3. Sur la page, vous pouvez visualiser le nombre de déplacements effectués ainsi que le nombre de nageurs mangés et ceux qui sont encore en vie. De plus, un bouton '?' est disponible pour résumer les règles du jeu.";
const text_info_imageboulder = document.getElementById("text_info_imageboulder");

const bouton_fleche_gauche_boulder = document.getElementById("fleche_gauche_boulder");
const bouton_fleche_droite_boulder = document.getElementById("fleche_droite_boulder");

bouton_fleche_gauche_boulder.addEventListener('click', function(){
    if(position_photo_boulder-1>0){
        position_photo_boulder = position_photo_boulder - 1;
        url_boulderphoto = "Images/bouldershark" + position_photo_boulder + ".png";
        photo_boulder.style.backgroundImage = `url(${url_boulderphoto})`;
        if(position_photo_boulder == 1){
            text_info_imageboulder.innerHTML = text1;
        }
        if(position_photo_boulder == 2){
            text_info_imageboulder.innerHTML = text2;
        }
        if(position_photo_boulder == 3){
            text_info_imageboulder.innerHTML = text3;
        }
    }else{
        console.log("pas de photo avant");
    }
})
bouton_fleche_droite_boulder.addEventListener('click', function(){
    if(position_photo_boulder+1<=nbre_photo_boulder){
        position_photo_boulder = position_photo_boulder + 1;
        url_boulderphoto = "Images/bouldershark" + position_photo_boulder + ".png";
        photo_boulder.style.backgroundImage = `url(${url_boulderphoto})`;
        if(position_photo_boulder == 2){
            text_info_imageboulder.innerHTML = text2;
        }
        if(position_photo_boulder == 3){
            text_info_imageboulder.innerHTML = text3;
        }
        if(position_photo_boulder == 4){
            text_info_imageboulder.innerHTML = text4;
        }
    }else{
        console.log("pas de photo apres");
    }
})


const bloc_photo_boulder = document.getElementById("info_boulder_photo");

const croix_boulder = document.getElementById("croix_boulder");

photo_boulder.addEventListener('click', function(){
    bouton_fleche_gauche_boulder.style.display = "inline-block";
    bouton_fleche_droite_boulder.style.display = "inline-block";
    bloc_photo_boulder.style.position = "absolute";
    bloc_photo_boulder.style.left = "50%";
    bloc_photo_boulder.style.bottom = "20%";
    bloc_photo_boulder.style.width = "1000px";
    bloc_photo_boulder.style.height = "calc(1000px*0.56)";   
    bloc_photo_boulder.style.transform = "translate(-50%, 0%)";
    croix_boulder.style.display = "flex";
    text_info_imageboulder.style.display = "flex";
    text_info_imageboulder.innerHTML = text1;
    info_boulder_logo.style.filter = "blur(1.5rem)";
    info_boulder_desc.style.filter = "blur(1.5rem)";
    boulder_logo_anim.style.filter = "blur(1.5rem)";
    info_boulder.style.filter = "blur(1.5rem)";
})

croix_boulder.addEventListener('click', function(){
    bouton_fleche_gauche_boulder.style.display = "none";
    bouton_fleche_droite_boulder.style.display = "none";
    bloc_photo_boulder.style.position = "absolute";
    bloc_photo_boulder.style.bottom = "30px";
    bloc_photo_boulder.style.left = "50%";
    bloc_photo_boulder.style.width = "600px";
    bloc_photo_boulder.style.height = "calc(600px*0.56)";  
    bloc_photo_boulder.style.transform = "translate(-50%, -5%)"; 
    croix_boulder.style.display = "none";
    photo_boulder.style.backgroundImage = "url(Images/bouldershark1.png)";
    text_info_imageboulder.style.display = "none";
    info_boulder_logo.style.filter = "blur(0)";
    info_boulder_desc.style.filter = "blur(0)";
    boulder_logo_anim.style.filter = "blur(0)";
    info_boulder.style.filter = "blur(0)";
})

/* Animations pour la page sur les autres projets */

const bouton5 = document.getElementById('bouton5');

const info_autreproj1 = document.getElementById("info_autreproj1");
const info_autreproj2 = document.getElementById("info_autreproj2");
const info_autreproj3 = document.getElementById("info_autreproj3");

const text_autreproj1 = document.getElementById("texte_autreproj1");
const text_autreproj2 = document.getElementById("texte_autreproj2");
const text_autreproj3 = document.getElementById("texte_autreproj3");

const titre_photo_autreproj1 = document.getElementById("titre_photo_autreproj1");
const titre_photo_autreproj2 = document.getElementById("titre_photo_autreproj2");
const titre_photo_autreproj3 = document.getElementById("titre_photo_autreproj3");

const autreproj1 = document.getElementById("description_autreproj1");
const autreproj2 = document.getElementById("description_autreproj2");
const autreproj3 = document.getElementById("description_autreproj3");

const autreproj_logo_anim = document.querySelector('.bloc_titre_autreprojet');

const texte_clique_logo_autreproj = document.getElementById("texte_clique_logo_autreproj");
const bloc_photo_logo_autreprojet = document.getElementById("bloc_photo_logo_autreprojet");


bouton5.addEventListener('click', function() {
    autreproj_logo_anim.style.top = "0%";
    autreproj_logo_anim.style.left = "50%";
    autreproj_logo_anim.style.transform = "translate(0%, -50%)";
    autreproj_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_autreproj1.style.display = "flex";
    info_autreproj2.style.display = "flex";
    info_autreproj3.style.display = "flex";
    info_autreproj1.style.animation = "opacityAnimation 3s 1";
    info_autreproj2.style.animation = "opacityAnimation 3s 1";
    info_autreproj3.style.animation = "opacityAnimation 3s 1";
    autreproj1.style.display = "flex";
    autreproj2.style.display = "flex";
    autreproj3.style.display = "flex";
    bloc_photo_logo_autreprojet.style.border = "none";
    texte_clique_logo_autreproj.style.display = "none"
});

bloc_photo_logo_autreprojet.addEventListener('mouseover', (event)=>{
    texte_clique_logo_autreproj.style.color = "#D6E8EE"
})

bloc_photo_logo_autreprojet.addEventListener('mouseout', (event)=>{
    texte_clique_logo_autreproj.style.color = "transparent"
})

autreproj1.addEventListener('click', function(){
    if(titre_photo_autreproj1.style.display == "none"){
        titre_photo_autreproj1.style.display = "flex";
        text_autreproj1.style.display = "none";   
    }else{
        titre_photo_autreproj1.style.display = "none";
        text_autreproj1.style.display = "flex";
    }
})

autreproj2.addEventListener('click', function(){
    if(titre_photo_autreproj2.style.display == "none"){
        titre_photo_autreproj2.style.display = "flex";
        text_autreproj2.style.display = "none"; 
    }else{
        titre_photo_autreproj2.style.display = "none";
        text_autreproj2.style.display = "flex";
    }
})

autreproj3.addEventListener('click', function(){
    if(titre_photo_autreproj3.style.display == "none"){
        titre_photo_autreproj3.style.display = "flex";
        text_autreproj3.style.display = "none"; 
    }else{
        titre_photo_autreproj3.style.display = "none";
        text_autreproj3.style.display = "flex";
    }
})

/* Animations pour la page sur le projet Quiz */
const info_quiz = document.getElementById('info_quiz');
const info_quiz_logo = document.getElementById('info_quiz_logo');
const info_quiz_desc = document.getElementById('info_quiz_desc');
const info_quiz_photo = document.getElementById('info_quiz_photo');
const quiz_logo_anim = document.querySelector('.bloc_titre_quiz');
const bouton6 = document.getElementById('bouton_quiz');
const photo_quiz = document.getElementById("photo_quiz");

const texte_clique_logo_quiz = document.getElementById("texte_clique_logo_quiz");
const bloc_photo_logo_quiz = document.getElementById("bloc_photo_logo_quiz");
const titre_logo_quiz = document.getElementById("titre_logo_quiz");

bouton6.addEventListener('click', function() {
    quiz_logo_anim.style.position = "absolute";
    quiz_logo_anim.style.bottom = "60px";
    quiz_logo_anim.style.left = "30px";
    quiz_logo_anim.style.animation = "opacityAnimation 5s 1";
    info_quiz.style.animation = "opacityAnimation 3s 1";
    info_quiz_logo.style.animation = "opacityAnimation 3s 1";
    info_quiz_desc.style.animation = "opacityAnimation 3s 1";
    photo_quiz.style.animation = "opacityAnimation 3s 1";
    info_quiz.style.display = "flex";
    info_quiz_logo.style.display = "flex";
    info_quiz_desc.style.display = "flex";
    info_quiz_photo.style.display = "flex";
    bloc_photo_logo_quiz.style.border = "none";
    texte_clique_logo_quiz.style.display = "none"
    titre_logo_quiz.style.display = "none"
});

bloc_photo_logo_quiz.addEventListener('mouseover', (event)=>{
    texte_clique_logo_quiz.style.color = "#D6E8EE"
})

bloc_photo_logo_quiz.addEventListener('mouseout', (event)=>{
    texte_clique_logo_quiz.style.color = "transparent"
})

var position_photo_quiz = 1;
var nbre_photo_quiz = 8;


var url_quizphoto = "";
var text1 = "Le menu permet à l'utilisateur de choisir le quiz qui lui convient. En passant la souris sur les quizs, une animation réduit l'image et laisse apparaitre la description de celui-ci. Il est également notable que les menus de la NavBar dépendent du type d'utilisateur(user ou admin).";
var text2 = "Voici l'historique de l'utilisateur 'celest'. La moyenne de tous ces quizs est affiché dans la NavBar. Il est également possible, grâce à une animation similaire à celle sur la page d'accueil, de visualer le score de chaque quiz en survolant avec la souris les blocs de chaque quiz.";
var text3 = "Voici la première partie réservé aux administrateurs. Il s'agit du dashboard qui permet une visualisation de chaque quiz créée. Il est possible de supprimer et de modifier un quiz grâce aux logos présents à droites de chaque ligne du dashboard.";
var text4 = "Voici la seconde partie permettant de créer un quiz. Il est possible de rajouter autant de question et réponses que l'on souhaite. Cependant, une seule réponse doit être juste.";
var text5 = "Voici un exemple du quiz sur Cristiano Ronaldo. On y retrouve le titre du quiz, sa description ainsi que toutes ses questions et ses réponses associées.";
var text6 = "Lorsque l'on clique sur une proposition, celle affiche en rouge les mauvaises réponses et en vert la bonne réponse. Le bouton 'Send' en bas de page permet de communiquer à la base de donnée le score total obtenu par l'utilisateur."
var text7 = "L'interface de connexion. Lorsque la connexion est validé, un token possédant l'id de l'utilisateur est généré dans les cookies. Ceci permet de pouvoir rajouter de la sécurité, au niveau des routes, comme par exemple vérfier que l'utilisateur est bien connecté pour qu'il puisse accéder à son historique. Dans la partie frontend, au moment de l'appel API du signin, les informations de l'utilisateur sont stockés dans le localStorage."
var text8 = "L'interface d'inscription."
const text_info_imagequiz = document.getElementById("text_info_imagequiz");

const bouton_fleche_gauche_quiz = document.getElementById("fleche_gauche_quiz");
const bouton_fleche_droite_quiz = document.getElementById("fleche_droite_quiz");

bouton_fleche_gauche_quiz.addEventListener('click', function(){
    if(position_photo_quiz-1>0){
        position_photo_quiz = position_photo_quiz - 1;
        url_quizphoto = "Images/quiz" + position_photo_quiz + ".png";
        photo_quiz.style.backgroundImage = `url(${url_quizphoto})`;
        if(position_photo_quiz == 1){
            text_info_imagequiz.innerHTML = text1;
        }
        if(position_photo_quiz == 2){
            text_info_imagequiz.innerHTML = text2;
        }
        if(position_photo_quiz == 3){
            text_info_imagequiz.innerHTML = text3;
        }
        if(position_photo_quiz == 4){
            text_info_imagequiz.innerHTML = text4;
        }
        if(position_photo_quiz == 5){
            text_info_imagequiz.innerHTML = text5;
        }
        if(position_photo_quiz == 6){
            text_info_imagequiz.innerHTML = text6;
        }
        if(position_photo_quiz == 7){
            text_info_imagequiz.innerHTML = text7;
        }
    }else{
        console.log("pas de photo avant");
    }
})
bouton_fleche_droite_quiz.addEventListener('click', function(){
    if(position_photo_quiz+1<=nbre_photo_quiz){
        position_photo_quiz = position_photo_quiz + 1;
        url_quizphoto = "Images/quiz" + position_photo_quiz + ".png";
        photo_quiz.style.backgroundImage = `url(${url_quizphoto})`;
        if(position_photo_quiz == 2){
            text_info_imagequiz.innerHTML = text2;
        }
        if(position_photo_quiz == 3){
            text_info_imagequiz.innerHTML = text3;
        }
        if(position_photo_quiz == 4){
            text_info_imagequiz.innerHTML = text4;
        }
        if(position_photo_quiz == 5){
            text_info_imagequiz.innerHTML = text5;
        }
        if(position_photo_quiz == 6){
            text_info_imagequiz.innerHTML = text6;
        }
        if(position_photo_quiz == 7){
            text_info_imagequiz.innerHTML = text7;
        }
        if(position_photo_quiz == 8){
            text_info_imagequiz.innerHTML = text8;
        }
    }else{
        console.log("pas de photo apres");
    }
})


const bloc_photo_quiz = document.getElementById("info_quiz_photo");

const croix_quiz = document.getElementById("croix_quiz");

photo_quiz.addEventListener('click', function(){
    bouton_fleche_gauche_quiz.style.display = "inline-block";
    bouton_fleche_droite_quiz.style.display = "inline-block";
    bloc_photo_quiz.style.position = "absolute";
    bloc_photo_quiz.style.left = "50%";
    bloc_photo_quiz.style.bottom = "20%";
    bloc_photo_quiz.style.width = "1000px";
    bloc_photo_quiz.style.height = "calc(1000px*0.56)";   
    bloc_photo_quiz.style.transform = "translate(-50%, 0%)";
    croix_quiz.style.display = "flex";
    text_info_imagequiz.style.display = "flex";
    text_info_imagequiz.innerHTML = text1;
    info_quiz_logo.style.filter = "blur(1.5rem)";
    info_quiz_desc.style.filter = "blur(1.5rem)";
    quiz_logo_anim.style.filter = "blur(1.5rem)";
    info_quiz.style.filter = "blur(1.5rem)";
})

croix_quiz.addEventListener('click', function(){
    bouton_fleche_gauche_quiz.style.display = "none";
    bouton_fleche_droite_quiz.style.display = "none";
    bloc_photo_quiz.style.position = "absolute";
    bloc_photo_quiz.style.bottom = "30px";
    bloc_photo_quiz.style.left = "50%";
    bloc_photo_quiz.style.width = "600px";
    bloc_photo_quiz.style.height = "calc(600px*0.56)";  
    bloc_photo_quiz.style.transform = "translate(-50%, -5%)"; 
    croix_quiz.style.display = "none";
    photo_quiz.style.backgroundImage = "url(Images/quiz1.png)";
    text_info_imagequiz.style.display = "none";
    info_quiz_logo.style.filter = "blur(0)";
    info_quiz_desc.style.filter = "blur(0)";
    quiz_logo_anim.style.filter = "blur(0)";
    info_quiz.style.filter = "blur(0)";
})
