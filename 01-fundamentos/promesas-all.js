let sumarLento = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 800);
        // puedo usar reject en vez de resolve para forzar el fallo
    });
}

let sumarRapido = (numero) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1), 300);
    });
}


let retornaTrue = () => true;
// si una promesa del promise all falla todo el resultado falla


let cosas = [sumarLento(5), sumarRapido(10), true, "hola mundo", retornaTrue()];


Promise.all(cosas)
    .then(res => {
        console.log(res);
    })
    .catch(console.log);
/* sumarLento(5).then(console.log)
sumarRapido(10).then(console.log) */