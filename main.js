contador = 0;



function botonCopiar() {
    newBoton = document.createElement("input")
    newBoton.setAttribute("type", "button");
    newBoton.setAttribute("value", "Copiar");
    newBoton.className = "copiar";
    newBoton.id = "Copiar";
    return newBoton;
}


function eliminarElemento() {
    const muñeco = document.getElementById("muñe");
    muñeco.remove();
    const rec1 = document.getElementById("Rec1");
    rec1.remove();
}


function encriptar() {
    let texto = document.getElementById("texto");
    let mostrar = document.getElementById("mostrarContenido");
    let text1 = texto.value;
    let text2 = text1.split('');
    let array = []
    array.length
    array = text2;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'e') {
            array[i] = 'enter';
        }
        if (array[i] === 'i') {
            array[i] = 'imes';
        }
        if (array[i] === 'a') {
            array[i] = 'ai'
        }
        if (array[i] === 'o') {
            array[i] = 'ober'
        }
        if (array[i] === 'u') {
            array[i] = 'ufat';
        }
    }

    eliminarElemento();


    const parrafo = document.createElement("p");
    parrafo.className = "texto-c";
    parrafo.id = "Texto-c";
    mostrar.appendChild(parrafo);
    parrafo.textContent = array.join('');

    mostrar.appendChild(botonCopiar());
    
    const p = document.getElementById("Texto-c");
    const b = document.getElementById("Copiar");
    b.addEventListener('click', () => {
        const textCopy = p.innerText;
        navigator.clipboard.writeText(textCopy);
        console.log("Texto copiado")
    })
    contador++;

}

contador2 = 0;

function desencriptar() {
    let text = document.getElementById("texto");
    let most = document.getElementById("mostrarContenido");
    let tex1 = text.value;
    let tex2 = tex1.split('');
    let alma = []
    alma = tex2;
    for (let e = 0; e < alma.length; e++) {

        if (alma[e] === 'e') {
            if (alma[e + 1] === 'n') {
                alma[e + 1] = ''
            }
            if (alma[e + 2] === 't') {
                alma[e + 2] = ''
            }
            if (alma[e + 3] === 'e') {
                alma[e + 3] = ''
            }
            if (alma[e + 4] === 'r') {
                alma[e + 4] = ''
            }
        }
        if (alma[e] === 'i') {
            if (alma[e + 1] === 'm') {
                alma[e + 1] = '';
            }
            if (alma[e + 2] === 'e') {
                alma[e + 2] = '';
            }
            if (alma[e + 3] === 's') {
                alma[e + 3] = '';
            }
        }
        if (alma[e] === 'a') {
            if (alma[e + 1] === 'i') {
                alma[e + 1] = '';
            }
        }
        if (alma[e] === 'o') {
            if (alma[e + 1] === 'b') {
                alma[e + 1] = ''
            }
            if (alma[e + 2] === 'e') {
                alma[e + 2] = ''
            }
            if (alma[e + 3] === 'r') {
                alma[e + 3] = ''
            }
        }
        if (alma[e] === 'u') {
            if (alma[e + 1] === 'f') {
                alma[e + 1] = ''
            }
            if (alma[e + 2] === 'a') {
                alma[e + 2] = ''
            }
            if (alma[e + 3] === 't') {
                alma[e + 3] = ''
            }
        }

    }

    eliminarElemento();
    const parrafo = document.createElement("p");
    parrafo.className = "texto-c";
    parrafo.id = "Texto-c";
    most.appendChild(parrafo);
    parrafo.textContent = alma.join('');
    most.appendChild(botonCopiar());

    const p = document.getElementById("Texto-c");
    const b = document.getElementById("Copiar");
    b.addEventListener('click', () => {
        const textCopy = p.innerText;
        navigator.clipboard.writeText(textCopy);
        console.log("Texto copiado")
    })

    if (contador2 > 1) {
        const par = document.getElementById("Texto-c")
        par.remove();
    }
    contador2++;

}

















