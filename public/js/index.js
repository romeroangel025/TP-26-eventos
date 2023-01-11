window.onload = function(){
    //JavaScript del Index
    let container = document.querySelector('.container');
    let subtitulo = document.querySelector('.subtitulo');
    let destacado = document.querySelectorAll('p');
    let fondo = document.querySelector('body');
    let enlace = document.querySelector('a');
    let logo = document.querySelector('.logoDH');
    let menu = document.querySelector('#menu');
    let ul = document.querySelector('#menu ul');
    let li = document.querySelector('#menu ul li');



    let nombre = prompt('Ingrese su nombre');
    
    if(nombre !=''){
        subtitulo.innerHTML += nombre;
    }else{
        subtitulo.innerHTML += 'INVITADO';
    }
        
    subtitulo.style.textTransform = 'uppercase';
    let confirmar = confirm('Desea colocar un fondo de pantalla ')
    if(confirmar){
        fondo.classList.add('fondo');
        enlace.style.color = '#E51B3E';
    }
    
    for(let i = 0 ; i < destacado.length; i++){
        if(i % 2 == 0){
            destacado[i].classList.add('destacadoPar');
        }else{
            destacado[i].classList.add('destacadoImpar');
        }
    }
    

 
   
        
        logo.addEventListener("click",()=>{
            menu.classList.toggle("mostrar")
        });
        
        ul.addEventListener("mouseover", (e) => {
            menu.classList.add("mostrar")
          });
          li.addEventListener("mouseover", (e) => {
            menu.classList.add("mostrar")
          });
          menu.addEventListener("mouseout", (e) => {
            menu.classList.remove("mostrar")
          });


    container.style.display = 'block';
}