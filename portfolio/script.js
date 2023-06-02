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



//BoulderShark
function scrollFunction1(){

    console.log("b")
    let e = document.getElementById("boulderShark");
        e.scrollIntoView({
          
          behavior: 'smooth',
        });
}

//App mobiles
function scrollFunction2(){
    console.log("app")
    let b = document.getElementById("appmobile");
        b.scrollIntoView({
          behavior: 'smooth',
        });
}

//paris sportif
function scrollFunction3(){
    console.log("p")
    let e = document.getElementById("parisportif");
        e.scrollIntoView({
          behavior: 'smooth',
        });
}

//twitter
function scrollFunction4(){
    console.log("t")
    let e = document.getElementById("twitter");
        e.scrollIntoView({
          behavior: 'smooth',
        });
}

//pokemon
function scrollFunction5(){
    console.log("p")
    let e = document.getElementById("pokemon");
        e.scrollIntoView({
          behavior: 'smooth',
        });
}

//vinted
function scrollFunction6(){
    console.log("v")
    let e = document.getElementById("vinted");
        e.scrollIntoView({
          behavior: 'smooth',
        });
}
