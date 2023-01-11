window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');


    let imputTitulo = document.getElementById("titulo");
    let estadoSecreto = 0;

    titulo.addEventListener("mouseover",()=>{
         titulo.style.color = "purple"
    })
    titulo.addEventListener("mouseout",()=>{
         titulo.style.color = "red"
    })

    const checkKey = (key) => {
        switch (true) {
            case key === "s" && estadoSecreto === 0:
                ++estadoSecreto;   
                break;
                case key === "e" && estadoSecreto === 1:
                ++estadoSecreto;   
                break;
                case key === "c" && estadoSecreto === 2:
                ++estadoSecreto;   
                break;
                case key === "r" && estadoSecreto === 3:
                ++estadoSecreto;   
                break;
                case key === "e" && estadoSecreto === 4:
                ++estadoSecreto;   
                break;
                case key === "t" && estadoSecreto === 5:
                ++estadoSecreto;   
                break;
                case key === "o" && estadoSecreto === 6:
                ++estadoSecreto
                alert("SECRETO MÁGICO")
                break;
        
            default:
                estadoSecreto = 0;
                break;
        }
    }

    imputTitulo.addEventListener("keyup", (e) => {
        checkKey(e.key)
    })

}

